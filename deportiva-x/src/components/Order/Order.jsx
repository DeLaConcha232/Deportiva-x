import { Link } from 'react-router-dom';
import './Order.css';


export default function Order() {
    return (
        <>
            <body className='container-body'>
                <article className='container-order'>
                    <section className='container-img-order'>
                        <img src="../../../public/assets/MainPage/tenis1-main-slider.png
                        " alt="" />
                    </section>
                    <section className='container-info-order'>
                        <div className='info-order'>
                            <div className='info2'>
                                <h1>30/01/24 |</h1>
                                <h1>| $2,699.99</h1>
                            </div>
                            <h3>N° Pedido:DX204853</h3>
                        </div>
                        <div className='container-btn-order'>
                            <Link to='/detailsOrder'>
                                <button className='btn-order'>Seguimiento</button>
                            </Link>
                            <button className='btn-order'>Cancelar Pedido</button>
                        </div>
                    </section>
                </article>
            </body>
        </>
    )
}