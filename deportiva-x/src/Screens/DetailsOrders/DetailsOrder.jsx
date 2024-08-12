import './DetailsOrder.css';
import NavBar from '../../components/NavBar/NavBar';
import Discount from '../../components/Discount/Discount';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importa ambos hooks desde react-router-dom
import { useState, useEffect } from 'react';

export default function DetailsOrder() {
    const location = useLocation();
    const navigate = useNavigate();
    const [order, setOrder] = useState(location.state.order);
    const [userDetails, setUserDetails] = useState(null);
    const [mainProductImage, setMainProductImage] = useState(null);
    const [appliedDiscount, setAppliedDiscount] = useState(false);
    const [originalTotal, setOriginalTotal] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const userId = localStorage.getItem('userId');
    const selectedOrderId = localStorage.getItem('selectedOrderId');  // Recupera el ID de la orden desde localStorage

    const cancelOrder = async () => {
        try {
            if (!selectedOrderId) {
                console.error("Order ID is not available.");
                return;
            }

            console.log(`Attempting to cancel order with ID: ${selectedOrderId}`);
            console.log(`Using URL: https://api-deportiva-x.ngrok.io/api/user/orders/cancel/${selectedOrderId}`);

            const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/orders/cancel/${selectedOrderId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            console.log("HTTP status:", response.status);
            const responseBody = await response.text();
            console.log("Response body:", responseBody);

            if (response.ok) {
                console.log("Order canceled successfully.");
                Swal.fire({
                    icon: "success",
                    title: "Alright...",
                    text: "Your order was canceled and removed!",
                    footer: '<a href="#">Have a Good Day</a>'
                });
            } else {
                console.error('Error text from server:', responseBody);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `There was an error canceling your order: ${responseBody}`,
                });
            }
        } catch (error) {
            console.error('Error caught in catch block:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There was an error processing your request. Please try again.",
            });
        }
    };



    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserDetails(data);
                } else {
                    console.error('User not found');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [userId]);

    useEffect(() => {
        if (order && order.orderItems?.$values) {
            let originalTotal = 0;

            order.orderItems.$values.forEach(item => {
                originalTotal += item.price * item.quantity;
            });

            setOriginalTotal(originalTotal);

            const isDiscountApplied = order.totalAmount < originalTotal;
            setAppliedDiscount(isDiscountApplied);

            if (isDiscountApplied) {
                const discountAmount = originalTotal * 0.25;
                setDiscountAmount(discountAmount);
            }

            if (order.orderItems.$values.length > 0) {
                setMainProductImage(order.orderItems.$values[0].productImage);
            }
        }
    }, [order]);

    if (!order || !userDetails) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <NavBar />
            <Discount />
            <div className='container-DetailsOrder-all'>
                <article className='container-title-Details'>
                    <h1>Detalles del Pedido</h1>
                </article>
                <Link className='container-closeIcon-Details' to='/orders'>
                    <img src="../../../public/assets/detalles de pedido/flecha izquierda.png" alt="closeIcon" className='closeIcon-DetailsOrder' />
                </Link>
                <article className='container-everything'>
                    {order.orderItems.$values.map((item, index) => (
                        <section id='container1' key={`${item.id}-${index}`}>
                            <section className='container-text1'>
                                <img src={item.productImage} alt={item.productName || "Producto"} />
                                <section className='container-title-info'>
                                    <h1>{item.productName || 'Nombre Producto'}</h1>
                                </section>
                                <button className='btn-DetailsOrder' onClick={cancelOrder}>Solicitar Devolucion</button>
                            </section>
                            <section className='contain-info1'>
                                <div>
                                    <h1>Numero de pedido</h1>
                                    <h2>DX{order.id.toString().padStart(6, '0')}</h2>
                                </div>
                                <div>
                                    <h1>Fecha del pedido</h1>
                                    <h2>{new Date(order.orderDate).toLocaleDateString()}</h2>
                                </div>
                                <div>
                                    <h1>Entrega</h1>
                                    <div>
                                        <h2>{userDetails.domicilio} <br /> {userDetails.postalcode} <br /> {userDetails.telefono}</h2>
                                    </div>
                                </div>
                                <div>
                                    <h1>Total</h1>
                                    <h2>${order.totalAmount.toFixed(2)}</h2>
                                </div>
                            </section>
                        </section>
                    ))}

                    <article id='container2'>
                        <section className='container-info2'>
                            <img src={mainProductImage || 'default-image.png'} alt="img producto" />
                            <div className='container-underground'>
                                <h1>{new Date(order.orderDate).toLocaleDateString()} || ${order.totalAmount.toFixed(2)}</h1>
                                <h2>Numero de Pedido: DX{order.id.toString().padStart(6, '0')}</h2>
                            </div>
                            {appliedDiscount && (
                                <h4 className='discount-message'>Se aplicó un descuento del 25% por ser tu primera compra!</h4>
                            )}
                            <Link to='/orders'>
                                <button className='btn-DetailsOrder' onClick={cancelOrder}>Solicitar Devolucion</button>
                            </Link>
                        </section>
                        <section className='container-entregaYtotales'>
                            <section className='container-entrega'>
                                <h1>Entrega</h1>
                                <div>
                                    <h2>Direccion de Entrega</h2>
                                    <h3>Nombre Completo: {userDetails.nombre}</h3>
                                    <h3>Calle Completa: {userDetails.domicilio}</h3>
                                    <h3>Codigo postal: {userDetails.postalcode}</h3>
                                    <h3>Numero Celular: {userDetails.telefono}</h3>
                                    <h3>Correo Electronico: {userDetails.email}</h3>
                                </div>
                            </section>
                            <section className='container-totales'>
                                <h1>TOTALES</h1>
                                <div className='contain-totales'>
                                    <div>
                                        <h3>Precio original del articulo:</h3>
                                        <h3>${originalTotal.toFixed(2)}</h3>
                                    </div>
                                    {appliedDiscount && (
                                        <div>
                                            <h3>Descuentos:</h3>
                                            <h3>${discountAmount.toFixed(2)}</h3>
                                        </div>
                                    )}
                                    <div>
                                        <h2>Total:</h2>
                                        <h2>${order.totalAmount.toFixed(2)}</h2>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className='container-MetodoPago'>
                            <div>
                                <h1>Metodo de Pago</h1>
                                <h2>Tarjeta Debito/Credito</h2>
                            </div>
                        </section>
                    </article>
                </article>
                <article className='minifooter'>
                    <h1>Recuerda que cuentas con 30 dias a partir de la entrega de tu pedido para iniciar un proceso de devolucion</h1>
                </article>
            </div>
        </>
    );
}
