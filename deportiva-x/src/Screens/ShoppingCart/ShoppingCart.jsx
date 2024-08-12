import { useEffect, useState } from 'react';
import './ShoppingCart.css';
import NavBar from '../../components/NavBar/NavBar';
import Discount from '../../components/Discount/Discount';
import ProductCart from '../../components/ProductCart/ProductCart';
import Payment from '../../components/Payment/Payment';
import Whatsapp from '../../components/whatsapp/Whatsapp';


export default function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const userId = localStorage.getItem('userId'); // Asume que el ID del usuario está almacenado en localStorage

    useEffect(() => {
        const fetchCartItems = async () => {
            const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/cart/${userId}`);
            if (response.ok) {
                const data = await response.json();

                // Asegúrate de que los datos sean un array
                const items = Array.isArray(data) ? data : data.$values;

                setCartItems(items);
                calculateTotal(items);
            } else {
                console.error('Failed to fetch cart items');
            }
        };

        fetchCartItems();
    }, [userId]);

    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.productos.precio * item.cantidad, 0);
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
                calculateTotal(updatedItems);
            } else {
                console.error('Failed to remove item from cart');
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const handleBtnPay = () => {
        setIsOpen(!isOpen);
        console.log('Click', isOpen);
        
    }
    const handleClosePayment = () => {
        setIsOpen(false);
    }

    return (
        <>
            <NavBar />
            <Discount />
            <Whatsapp />
            <main className='ContainerCart'>
                <article className='container-productsCart'>
                    <h1>Tu Carrito</h1>
                    <section className='container-productsCart-component'>
                        {cartItems.map(item => (
                            <ProductCart key={item.idCarritoItems} item={item} onRemove={handleRemoveItem} />
                        ))}
                    </section>
                </article>
                <article className='container-resumeCart'>
                    <h1 className='Title-Cart'>Resumen del Pedido</h1>
                    <h3 className='subtitle-cart'>Total de Productos: {cartItems.length}</h3>
                    <h3 className='subtitle-cart'>Total: ${total.toFixed(2)}</h3>
                    <button className='btn-Pay' onClick={handleBtnPay}>
                        Ir a Pagar
                        <img src="../../../public/assets/Carrito de compras/flecha.png" alt="flecha" className='btn-flecha' />
                    </button>
                </article>
            </main>
            {isOpen && <Payment onClose={handleClosePayment}/> }
        </>
    );
}
