import './DetailsOrder.css';
import NavBar from '../../components/NavBar/NavBar';
import Discount from '../../components/Discount/Discount';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function DetailsOrder() {

    const Swal1 = () => {
        Swal.fire({
            icon: "success",
            title: "Alright...",
            text: "Your order was canceled!",
            footer: '<a href="#">Have a Good Day</a>'
        });
    }
    return (
        <>
            <NavBar />
            <Discount />
            <body className='container-DetailsOrder-all'>
                <article className='container-title-Details'>
                    <h1>Detalles del Pedido</h1>
                </article>
                <Link className='container-closeIcon-Details' to='/orders' >
                    <img src="../../../public/assets/detalles de pedido/flecha izquierda.png" alt="closeIcon" className='closeIcon-DetailsOrder' />
                </Link>
                <article className='container-everything'>
                    <section id='container1'>
                        <section className='container-text1'>
                            <img src="../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Gimnasio y Entrenamiento/Tenis Adidas Amplimove Trainer Red.png" alt="img producto" />
                            <section className='container-title-info'>
                                <h1>Nombre Producto</h1>
                            </section>
                            <Link to='/orders'>
                                <button className='btn-DetailsOrder' onClick={() => Swal1()}>Solicitar Devolucion</button>
                            </Link>
                        </section>
                        <section className='contain-info1'>
                            <div>
                                <h1>Numero de pedido</h1>
                                <h2>DX204853</h2>
                            </div>
                            <div>
                                <h1>Fecha del pedido</h1>
                                <h2>30/Enero/2024</h2>
                            </div>
                            <div>
                                <h1>Entrega</h1>
                                <div>
                                    <h2>Calle Cuauhtemoc <br /> Av. 20908 AGU <br /> Jesus Maria 4491234567</h2>
                                </div>
                            </div>
                            <div>
                                <h1>Total</h1>
                                <h2>$0,000.00</h2>
                            </div>
                        </section>
                    </section>
                    <article id='container2'>
                        <section className='container-info2'>
                            <img src="../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Gimnasio y Entrenamiento/Tenis Adidas Amplimove Trainer Red.png" alt="img producto" />
                            <div className='container-underground'>
                                <h1>Fecha ||  Precio</h1>
                                <h2>Numero de Pedido: DX204853</h2>
                            </div>
                            <Link to='/orders'>
                                <button className='btn-DetailsOrder' onClick={() => Swal1()}>Solicitar Devolucion</button>
                            </Link>
                        </section>
                        <section className='container-entregaYtotales'>
                            <section className='container-entrega'>
                                <h1>Entrega</h1>
                                <div>
                                    <h2>Direccion de Entrega</h2>
                                    <h3>Nombre Completo</h3>
                                    <h3>Calle Cmpleta</h3>
                                    <h3>Codigo postal</h3>
                                    <h3>Numero Celular</h3>
                                    <h3>Correo Electronico</h3>
                                </div>
                            </section>
                            <section className='container-totales'>
                                <h1>TOTALES</h1>
                                <div className='contain-totales'>
                                    <div>
                                        <h3>Precio del articulo:</h3>
                                        <h3>$ 1,499.99</h3>
                                    </div>
                                    <div>
                                        <h3>Descuentos: </h3>
                                        <h3>$ 0.00</h3>
                                    </div>
                                    <div>
                                        <h2>Total:</h2>
                                        <h2>1,125.00</h2>
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
            </body>
        </>
    )
}