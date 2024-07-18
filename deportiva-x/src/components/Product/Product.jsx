import './Product.css';
import Discount from '../Discount/Discount';


export default function Product() {
    return (
        <>
            <header>
                <nav id='mainNavbar'>
                    <img src="../../../public/assets/BrandLogo-Navbar.png" alt="Brand Logo" className='nav-icon' />
                    <article className='search'>
                        <form action="" className='forms-input-search'>
                            <section className='input-icon-container'>
                                <img src="../../../public/assets/MainPage/Search-icon.png" alt="search-icon" className='input-icon' />
                            </section>
                            <input type="text" />
                            <section className='input-icon-container'>
                                <button type='reset' className='button-reset'>
                                    <img type="reset" src="../../../public/assets/MainPage/Close-icon.png" alt="close-icon" className='input-icon' />
                                </button>
                            </section>
                        </form>
                    </article>
                    <img src="../../../public/assets/MainPage/ShoppingCar.png" alt="shopping-car" className='nav-icon' />
                </nav>
            </header>
            <Discount />
            <main id='mainContent' className='productMain'>
                <article className='product-img'>
                    <img src="../../../public/assets/MainPage/producto1-main-slider.png" alt="Producto" />
                    <section>
                        <button className='color-negro'>0</button>
                        <button className='color-blanco'>0</button>
                    </section>
                </article>
                <article className='product-properties'>
                    <h1>Nombre del articulo</h1>
                    <h1>precio</h1>
                    <h2>Tallas</h2>
                    <section className=''>
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </section>
                    <button>Comprar Ahora</button>
                </article>
            </main>
        </>
    )
}