import { useEffect, useState } from 'react';
import './ShoppingCart.css';
import NavBar from '../../components/NavBar/NavBar';
import Discount from '../../components/Discount/Discount';
import ProductCart from '../../components/ProductCart/ProductCart';
import Payment from '../../components/Payment/Payment';
import Whatsapp from '../../components/whatsapp/Whatsapp';
import Footer from '../../components/Footer/Footer';

export default function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [userHasInitialDiscount, setUserHasInitialDiscount] = useState(false);
    const userId = localStorage.getItem('userId'); // Asume que el ID del usuario está almacenado en localStorage

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cartResponse = await fetch(`https://api-deportiva-x.ngrok.io/api/user/cart/${userId}`);
                const userResponse = await fetch(`https://api-deportiva-x.ngrok.io/api/user/${userId}`);

                if (cartResponse.ok && userResponse.ok) {
                    const cartData = await cartResponse.json();
                    const userData = await userResponse.json();

                    console.log('Received cart items:', cartData); // Verificar la respuesta de la API
                    console.log('User data:', userData); // Verificar los datos del usuario

                    const items = Array.isArray(cartData) ? cartData : cartData.$values;
                    setCartItems(items);

                    const userHasInitialDiscount = userData.descuentoInicial === 1;
                    setUserHasInitialDiscount(userHasInitialDiscount);

                    calculateTotal(items, userHasInitialDiscount);
                } else {
                    console.error('Failed to fetch cart items or user data');
                }
            } catch (error) {
                console.error('Error fetching cart items or user data:', error);
            }
        };

        fetchCartItems();
    }, [userId]);


    const calculateTotal = (items, userHasInitialDiscount) => {
        let total = 0;

        items.forEach(item => {
            // Asegurarte de que las propiedades son correctas
            if (!item || !item.precio || !item.nombre) {
                console.error("Product data is missing or incomplete for item:", item);
                return;
            }

            total += item.precio * item.cantidad;
        });

        if (userHasInitialDiscount) {
            console.log('Applying discount of 25%');
            total *= 0.75;
        } else {
            console.log('No discount applied');
        }

        setTotal(total);
    };





    const handleRemoveItem = async (idCarritoItems) => {
        try {
            const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/cart/remove/${idCarritoItems}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const updatedItems = cartItems.filter(item => item.idCarritoItems !== idCarritoItems);
                setCartItems(updatedItems);
                calculateTotal(updatedItems, userHasInitialDiscount);
            } else {
                console.error('Failed to remove item from cart');
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const handleBtnPay = () => {
        setIsOpen(!isOpen);
    }

    const handleClosePayment = () => {
        setIsOpen(false);
    }

    const handlePaymentSuccess = async () => {
        console.log('handlePaymentSuccess called');
        try {
            // Limpia el carrito
            const clearCartResponse = await fetch(`https://api-deportiva-x.ngrok.io/api/user/cart/clear/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (clearCartResponse.ok) {
                setCartItems([]); // Limpia el carrito en el frontend
                setTotal(0);      // Resetea el total
                console.log('Cart cleared successfully.');

                // Actualiza el descuentoInicial del usuario a 0
                const updateUserResponse = await fetch(`https://api-deportiva-x.ngrok.io/api/user/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ descuentoInicial: 0 })
                });

                if (updateUserResponse.ok) {
                    console.log('User discount updated successfully.');
                } else {
                    console.error('Failed to update user discount');
                }
            } else {
                console.error('Failed to clear the cart');
            }
        } catch (error) {
            console.error('Error clearing the cart:', error);
        }
    };

    return (
        <>
            <NavBar />
            <Discount />
            <Whatsapp />

            <main className='ContainerCart'>
                <article className='container-productsCart'>
                    <h1>Tu Carrito</h1>
                    <section className='container-productsCart-component'>
                        {cartItems.map((item, index) => (
                            <ProductCart
                                key={`${item.idCarritoItems}-${index}`}
                                item={item}
                                onRemove={handleRemoveItem}
                            />
                        ))}
                    </section>
                </article>
                <article className='container-resumeCart'>
                    <h1 className='Title-Cart'>Resumen del Pedido</h1>
                    <h3 className='subtitle-cart'>Total de Productos: {cartItems.length}</h3>

                    {userHasInitialDiscount && (
                        <h4 className='discount-message'>Se aplicó un descuento del 25% por ser tu primera compra!</h4>
                    )}

                    <h3 className='subtitle-cart'>Total: ${total.toFixed(2)}</h3>
                    <button className='btn-Pay' onClick={handleBtnPay}>
                        Ir a Pagar
                        <img src="../../../public/assets/Carrito de compras/flecha.png" alt="flecha" className='btn-flecha' />
                    </button>
                </article>
            </main>

            {isOpen && <Payment onClose={handleClosePayment} cartItems={cartItems} total={total} onPaymentSuccess={handlePaymentSuccess} />}
        </>
    );
}
