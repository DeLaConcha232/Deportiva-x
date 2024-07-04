import './MainPage.css'
import Discount from '../Discount/Discount'

export default function MainPage() {
    return (
        <>
            <header>
                <nav id='mainNavbar'>
                    <img src="../../../public/assets/BrandLogo-Navbar.png" alt="Brand Logo" className='nav-icon' />
                    <section className='search'>
                        <article className='input-icon-container'>
                            <img src="../../../public/assets/MainPage/Search-icon.png" alt="search-icon" className='input-icon' />
                        </article>
                        <input type="text" />
                        <article className='input-icon-container'>
                            <img src="../../../public/assets/MainPage/Close-icon.png" alt="close-icon" className='input-icon' />
                        </article>
                    </section>
                    <img src="../../../public/assets/MainPage/ShoppingCar.png" alt="shopping-car" className='nav-icon' />
                </nav>
            </header>
            <Discount />
            <main id='mainContent'>
                <section className='collage'>
                    <a href="#" className='calzado square'><h1>Calzado</h1><img src="" alt="" className='img-collage'/></a>
                    <a href="#" className='deportes square'><h1>Deportes</h1><img src="../../../public/assets/MainPage/balon-main-collage.png" alt="" className='img-collage'/></a>
                    <a href="#" className='jerseys square'><h1>Jerseys</h1> <img src="../../../public/assets/MainPage/jersey-main-collage.png" alt="" className='img-collage'/></a>
                    <a href="#" className='accesorios square'><h1>accesorios</h1><img src="../../../public/assets/MainPage/accesories-main-collage.png" alt="" className='img-collage'/></a>
                    <a href="#" className='niños square'><img src="../../../public/assets/MainPage/childs-main-collage.png" alt="" className='img-collage childs'/><h1>niños</h1></a>
                    <a href="#" className='hombres square'><h1>Hombre</h1><img src="../../../public/assets/MainPage/man-main-collage.png" alt="" className='img-collage'/></a>
                    <a href="#" className='mujeres square'><h1>Mujer</h1><img src="../../../public/assets/MainPage/woman-main-collage.png" alt="" className='img-collage'/></a>
                </section>
                <section>
                    <h1>hola</h1>
                </section>
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </>
    )
}