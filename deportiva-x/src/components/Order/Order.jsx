import { Link } from 'react-router-dom';
import './Order.css';

export default function Order({ order }) {
    return (
        <article className='container-order'>
            <section className='container-info-order'>
                <h3>N° Pedido: DX{order.id.toString().padStart(6, '0')}</h3>
                {order.orderItems.$values.map((item, index) => (
                    <div className='container-product-order' key={`${item.id}-${index}`}>
                        <section className='container-img-order'>
                            <img src={item.productImage} alt={item.productName} />
                        </section>
                        <div className='info-order'>
                            <h2>{item.productName}</h2>
                            <div className='info2'>
                                <h1>{new Date(order.orderDate).toLocaleDateString()} |</h1>
                                <h1>| ${item.price.toFixed(2)}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='container-btn-order'>
                    <Link to='/detailsOrder'>
                        <button className='btn-order'>Seguimiento</button>
                    </Link>
                    <button className='btn-order'>Cancelar Pedido</button>
                </div>
            </section>
        </article>
    );
}
