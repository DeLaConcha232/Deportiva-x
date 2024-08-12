import { useEffect, useState } from 'react';
import './Orders.css';
import Discount from '../../components/Discount/Discount';
import Order from '../../components/Order/Order';
import NavBar from '../../components/NavBar/NavBar';
import Whatsapp from '../../components/whatsapp/Whatsapp';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';


export default function Orders() {
    const [orders, setOrders] = useState([]);
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/orders/${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.$values) {
                        setOrders(data.$values); // Acceder a las órdenes dentro de $values
                    } else {
                        console.error('Unexpected response format', data);
                    }
                } else {
                    console.error('Failed to fetch orders');
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [userId]);

    // const handleOrderClick = (order) => {
    //     console.log('Order clicked:', order);  // Verifica que la orden se pasa correctamente
    //     navigate('/detailsOrder', { state: { order } });
    // };

    const handleOrderClick = (order) => {
        console.log('Order clicked:', order);  // Verifica que la orden se pasa correctamente
        localStorage.setItem('selectedOrderId', order.id);  // Guarda el ID de la orden en localStorage
        navigate('/detailsOrder', { state: { order } });
    };



    return (
        <>
            <NavBar />
            <Discount />
            <Whatsapp />
            <Footer />
            <main className='container-orders'>
                <article className='container-title-orders'>
                    <h1 className='title-orders'>Pedidos</h1>
                </article>
                <article className='container-orders-components'>
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <div onClick={() => handleOrderClick(order)} key={order.id}>
                                <Order order={order} />
                            </div>
                        ))
                    ) : (
                        <p>No hay pedidos disponibles.</p>
                    )}
                </article>
            </main>
        </>
    );
}
