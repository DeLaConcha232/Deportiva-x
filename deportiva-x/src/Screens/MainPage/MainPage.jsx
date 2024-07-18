import './MainPage.css'
import Discount from '../../components/Discount/Discount'
import Cookies from '../../components/Cookies/Cookies'
import Carousel from '../../components/carousel/carousel'
import BurguerMenu from '../../components/BurguerMenu/BurguerMenu'

export default function MainPage() {
    return (
        <>
            <header>
                <nav id='mainNavbar'>
                    <BurguerMenu />
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
            <main id='mainContent'>
                <article className='collage-container'>
                    <section className='collage'>
                        <a href="" className='calzado square'><h1>Calzado</h1><img src="../../../public/assets/MainPage/tenis-main-collage.png" alt="" className='img-collage' /></a>
                        <a href="" className='deportes square'><h1>Deportes</h1><img src="../../../public/assets/MainPage/balon-main-collage.png" alt="" className='img-collage' /></a>
                        <a href="" className='jerseys square'><h1>Jerseys</h1> <img src="../../../public/assets/MainPage/jersey-main-collage.png" alt="" className='img-collage' /></a>
                        <a href="" className='accesorios square'><h1>accesorios</h1><img src="../../../public/assets/MainPage/accesories-main-collage.png" alt="" className='img-collage' /></a>
                        <a href="" className='niños square'><img src="../../../public/assets/MainPage/childs-main-collage.png" alt="" className='img-collage childs' /><h1>niños</h1></a>
                        <a href="" className='hombres square'><h1>Hombre</h1><img src="../../../public/assets/MainPage/man-main-collage.png" alt="" className='img-collage' /></a>
                        <a href="" className='mujeres square'><h1>Mujer</h1><img src="../../../public/assets/MainPage/woman-main-collage.png" alt="" className='img-collage' /></a>
                    </section>
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Productos'
                        uno="../../../public/assets/MainPage/producto1-main-slider.png"
                        dos="../../../public/assets/MainPage/producto2-main-slider.png"
                        tres="../../../public/assets/MainPage/producto3-main-slider.png"
                        cuatro="../../../public/assets/MainPage/producto4-main-slider.png"
                        cinco="../../../public/assets/MainPage/producto5-main-slider.png"
                        seis="../../../public/assets/MainPage/producto6-main-slider.png"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Calzado'
                        uno="../../../public/assets/MainPage/tenis1-main-slider.png"
                        dos="../../../public/assets/MainPage/tenis2-main-slider.png"
                        tres="../../../public/assets/MainPage/tenis3-main-slider.png"
                        cuatro="../../../public/assets/MainPage/tenis4-main-slider.png"
                        cinco="../../../public/assets/MainPage/tenis5-main-slider.png"
                        seis="../../../public/assets/MainPage/tenis6-main-slider.png"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Accesorios'
                        uno="../../../public/assets/MainPage/Accesorio1-slider.png"
                        dos="../../../public/assets/MainPage/Accesorio2-slider.png"
                        tres="../../../public/assets/MainPage/Accesorio3-slider.png"
                        cuatro="../../../public/assets/MainPage/Accesorio4-slider.png"
                        cinco="../../../public/assets/MainPage/Accesorio5-slider.png"
                        seis="../../../public/assets/MainPage/Accesorio6-slider.png"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Deportes'
                        uno="../../../public/assets/MainPage/"
                        dos="../../../public/assets/MainPage/"
                        tres="../../../public/assets/MainPage/"
                        cuatro="../../../public/assets/MainPage/"
                        cinco="../../../public/assets/MainPage/"
                        seis="../../../public/assets/MainPage/"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Mujer'
                        uno="../../../public/assets/MainPage/"
                        dos="../../../public/assets/MainPage/"
                        tres="../../../public/assets/MainPage/"
                        cuatro="../../../public/assets/MainPage/"
                        cinco="../../../public/assets/MainPage/"
                        seis="../../../public/assets/MainPage/"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Hombre'
                        uno="../../../public/assets/MainPage/"
                        dos="../../../public/assets/MainPage/"
                        tres="../../../public/assets/MainPage/"
                        cuatro="../../../public/assets/MainPage/"
                        cinco="../../../public/assets/MainPage/"
                        seis="../../../public/assets/MainPage/"
                    />
                </article>
            </main>
            {/* <footer>
                <h1>Footer</h1>
            </footer> */}
            <Cookies />

        </>
    )
}