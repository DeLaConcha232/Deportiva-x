import './ShoppingCart.css';
import NavBar from '../../components/NavBar/NavBar';
import Discount from '../../components/Discount/Discount';
import ProductCart from '../../components/ProductCart/ProductCart';

export default function ShoppingCart() {
    return (
        <>
            <NavBar />
            <Discount />
            <main className='ContainerCart'>
                <article className='container-productsCart'>
                    <h1>Tu Carrito</h1>
                    <section className='container-productsCart-component'>
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                    </section>
                </article>
                <article className='container-resumeCart'>
                    <h1 className='Title-Cart'>Resumen del Pedido</h1>
                    <h3 className='subtitle-cart'>Contador de Productos</h3>
                    <h3 className='subtitle-cart'>Total: $0000.00</h3>
                    <button className='btn-Pay'>
                        <h3>Ir a Pagar</h3>
                        <img src="../../../public/assets/Carrito de compras/flecha.png" alt="flecha" className='btn-flecha' />
                    </button>
                </article>
            </main>
        </>
    )
}