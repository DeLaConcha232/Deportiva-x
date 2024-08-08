import './Payment.css';
import { useState } from 'react';
import Swal from 'sweetalert2';


// eslint-disable-next-line react/prop-types
export default function Payment({ onClose }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

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

        const data = {
            cvv,
            expiryDate,
        };

        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Manejar la respuesta exitosa
                console.log('Pago realizado con éxito');
                Swal.fire({
                    icon: "success",
                    title: "Alright...",
                    text: "Your order was Payed Succesfully!",
                    footer: '<a href="#">Have a Good Day</a>'
                });
            } else {
                // Manejar errores
                console.error('Error en el pago');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const Swal1 = () => {
        Swal.fire({
            icon: "success",
            title: "Alright...",
            text: "Your order was Payed Succesfully!",
            footer: '<a href="#">Have a Good Day</a>'
        });
    }

    return (
        <>
            <body className='body-Payment'>
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
                                <h2>Numero de tarjeta</h2>
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
            </body>
        </>
    )
}