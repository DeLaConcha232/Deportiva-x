import './Orders.css';
import Discount from '../../components/Discount/Discount';
import Order from '../../components/Order/Order';
import NavBar from '../../components/NavBar/NavBar';

export default function Orders() {
    return (
        <>
            <NavBar />
            <Discount />
            <main className='container-orders'>
                <article className='container-title-orders'>
                    <h1 className='title-orders'>Pedidos</h1>
                </article>
                <article className='container-orders-components'>
                    <Order />
                    <Order />
                    <Order />
                </article>
            </main>

        </>
    )
}