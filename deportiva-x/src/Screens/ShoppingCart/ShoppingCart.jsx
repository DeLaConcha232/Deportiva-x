import React, { useEffect, useState } from 'react';
import './ShoppingCart.css';
import NavBar from '../../components/NavBar/NavBar';
import Discount from '../../components/Discount/Discount';
import ProductCart from '../../components/ProductCart/ProductCart';

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const userId = localStorage.getItem('userId'); // Asume que el ID del usuario está almacenado en localStorage

    useEffect(() => {
        const fetchCartItems = async () => {
            const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/cart/${userId}`);
            if (response.ok) {
                const data = await response.json();
                setCartItems(data);
                calculateTotal(data);
            } else {
                console.error('Failed to fetch cart items');
            }
        };

        fetchCartItems();
    }, [userId]);

    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.Precio * item.Cantidad, 0);
        setTotal(total);
    };

    return (
        <>
            <NavBar />
            <Discount />
            <main className='ContainerCart'>
                <article className='container-productsCart'>
                    <h1>Tu Carrito</h1>
                    <section className='container-productsCart-component'>
                        {cartItems.map(item => (
                            <ProductCart key={item.idCarritoItems} item={item} />
                        ))}
                    </section>
                </article>
                <article className='container-resumeCart'>
                    <h1 className='Title-Cart'>Resumen del Pedido</h1>
                    <h3 className='subtitle-cart'>Total de Productos: {cartItems.length}</h3>
                    <h3 className='subtitle-cart'>Total: ${total.toFixed(2)}</h3>
                    <button className='btn-Pay'>
                        Ir a Pagar
                        <img src="../../../public/assets/Carrito de compras/flecha.png" alt="flecha" className='btn-flecha' />
                    </button>
                </article>
            </main>
        </>
    );
}
