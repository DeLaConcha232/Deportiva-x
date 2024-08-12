import './Payment.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Payment({ onClose, cartItems, total, onPaymentSuccess }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const userId = localStorage.getItem('userId');

    const handleNumberChange = (event) => {
        const { value } = event.target;
        if (/^\d{0,16}$/.test(value)) {
            setCardNumber(value);
        }
    };

    const handleExpiryChange = (event) => {
        const { value } = event.target;
        if (/^\d{0,4}$/.test(value)) {
            setExpiryDate(value);
        }
    };

    const handleCvvChange = (event) => {
        const { value } = event.target;
        if (/^\d{0,3}$/.test(value)) {
            setCvv(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Verifica que todos los productos tengan la información necesaria
            const orderItems = cartItems.map(item => {
                if (!item.idProductos || !item.precio || !item.talla) {
                    console.error("Product data is missing or incomplete for item:", item);
                    return null;
                }
                return {
                    ProductId: item.idProductos,
                    Cantidad: item.cantidad,
                    Price: item.precio,
                    Talla: item.talla
                };
            }).filter(item => item !== null); // Filtrar los elementos nulos

            if (orderItems.length === 0) {
                console.error('No valid items in the cart');
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No se pudo procesar el pedido debido a datos de productos incompletos.",
                });
                return;
            }

            const response = await fetch('https://api-deportiva-x.ngrok.io/api/user/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                    cartItems: orderItems,
                    total: total
                })
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Alright...",
                    text: "Your order was paid successfully!",
                    footer: '<a href="#">Have a Good Day</a>'
                }).then(async () => {
                    await clearCart();  // Llama a la función para limpiar el carrito
                    onClose();          // Cierra el formulario de pago
                    onPaymentSuccess(); // Limpia el carrito en el frontend
                });
            } else {
                console.error('Failed to save the order');
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was an error processing your payment. Please try again.",
                });
            }
        } catch (error) {
            console.error('Error saving the order:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There was an error processing your payment. Please try again.",
            });
        }
    };

    const clearCart = async () => {
        try {
            const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/cart/clear/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Cart cleared successfully.');
                onPaymentSuccess(); // Asegúrate de que se limpie el carrito en el frontend
            } else {
                console.error('Failed to clear the cart');
            }
        } catch (error) {
            console.error('Error clearing the cart:', error);
        }
    };

    return (
        <div className='body-Payment'>
            <main className='container-pay'>
                <form className='container-infoPay' onSubmit={handleSubmit}>
                    <article className='container-closePay' onClick={onClose}>
                        <img src="../../../public/assets/MainPage/Close-icon.png" alt="closeIcon" />
                    </article>
                    <section className='container-2info'>
                        <div className='container12'>
                            <h2>Titular de la Tarjeta</h2>
                            <input type="text" className='input-Pay' required />
                        </div>
                        <div className='container12'>
                            <h2>Número de tarjeta</h2>
                            <input type="number" className='input-Pay'
                                value={cardNumber}
                                onChange={handleNumberChange}
                                maxLength={16}
                                pattern="\d{16}"
                                title="Ingresa el número de tarjeta de 16 dígitos"
                                required />
                        </div>
                    </section>
                    <section className='container-2infoNumbers'>
                        <div>
                            <h2>MM/AA</h2>
                            <input type="number" className='input-Pay'
                                value={expiryDate}
                                onChange={handleExpiryChange}
                                maxLength={4}
                                pattern="\d{4}"
                                title="Ingresa la fecha de expiración en formato MM/AA"
                                required />
                        </div>
                        <div>
                            <h2>CVV</h2>
                            <input type="number" className='input-Pay'
                                value={cvv}
                                onChange={handleCvvChange}
                                maxLength={3}
                                pattern="\d{3}"
                                title="Ingresa el CVV de 3 dígitos"
                                required
                            />
                        </div>
                    </section>
                    <section className='container-btnPay'>
                        <button type='submit'>Realizar el pedido</button>
                    </section>
                    <section className='container-imgPay'>
                        <img src="../../../public/assets/Payment/VISA.jpg" alt="VISA" />
                        <img src="../../../public/assets/Payment/MasterCard.jpg" alt="MasterCard" />
                    </section>
                </form>
            </main>
        </div>
    );
}
