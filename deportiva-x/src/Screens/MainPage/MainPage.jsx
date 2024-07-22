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
                        <a href="" className='accesorios square'><h1>Accesorios</h1><img src="../../../public/assets/MainPage/accesories-main-collage.png" alt="" className='img-collage' /></a>
                        <a href="" className='niños square'><img src="../../../public/assets/MainPage/childs-main-collage.png" alt="" className='img-collage childs' /><h1>Niños</h1></a>
                        <a href="" className='hombres square'><h1>Hombre</h1><img src="../../../public/assets/MainPage/man-main-collage.png" alt="" className='img-collage' /></a>
                        <a href="" className='mujeres square'><h1>Mujer</h1><img src="../../../public/assets/MainPage/woman-main-collage.png" alt="" className='img-collage' /></a>
                    </section>
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Calzado'
                        uno="../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Gimnasio y Entrenamiento/Tenis Adidas Amplimove Trainer Red.png"
                        dos="../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Casual/Tenis Nike Air Max Excee.png"
                        tres="../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Running/Tenis Nike Journey Run.png"
                        cuatro="../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tacos De Futbol/Tenis De Fútbol Nike Vapor 15 Academy Mercurial Dream Speed Mg.png"
                        cinco="../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tenis De Basquetbol/Tenis Adidas Bounce Legends.png"
                        seis="../../../public/assets/Imagenes Productos PNG/Mujer/Calzado/Gimnasio Y Entrenamiento/Tenis Adidas Dropset 2 Green.png"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Accesorios'
                        uno="../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Gorras/Gorra New Era 9forty Haas F1 Team Miami Race Special.png"
                        dos="../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Bolsas Y Mochilas/Maleta Under Armour Gametime.png"
                        tres="../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Bolsas Y Mochilas/Mochila Under Armour Studio Campus.png"
                        cuatro="../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Termos y Cilindros/Botella Puma Training.png"
                        cinco="../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Gorras/Gorra Under_Armour Launch.png"
                        seis="../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Gorras/Gorra Under Armour Blitzing.png"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Deportes'
                        uno="../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Basquetbol/Balon Wilson Drv Pro Streak.png"
                        dos="../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Fútbol/Balón De Fútbol Adidas Ucl Club Orange.png"
                        tres="../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Guantes De Portera/Guantes Nike Match 2.png"
                        cuatro="../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Tablas De Skate/MUSA.png"
                        cinco="../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Muñequeras Y Bandas/Banda Nathan Hypernight Reflective.png"
                        seis="../../../public/assets/Imagenes Productos PNG/Niño/Accesorios/Balones De Fútbol/Balón De Fútbol Adidas Ucl League Knockout Mini.png"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Mujer'
                        uno="../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Chamarras/Chamarra Adidas Tiro Cut 3.png"
                        dos="../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Pants/Pantalón Adidas Tiro 24.png"
                        tres="../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Sudaderas/Sudadera Under Armour Essential 2.png"
                        cuatro="../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Calcetines/Calcetines Asics Quick Lyte Plus 3 Pares.png"
                        cinco="../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Tops Deportivos/Top Adidas All Me.png"
                        seis="../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Jerseys Equipos De Fútbol/Jersey Adidas Selección Nacional De México Visita 2024.png"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Hombre'
                        uno="../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Chamarras/Chamarra Adidas 3 Stripes.png"
                        dos="../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Shorts/Short Adidas Messi.png"
                        tres="../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Jerseys Equipos De Fútbol/Jersey Adidas Real Madrid Visita.png"
                        cuatro="../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Chamarras/Chamarra Puma Fit Woven.png"
                        cinco="../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Pants/Pantalón Adidas House Of Tiro Woven.png"
                        seis="../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Jerseys Equipos De Basquetbol/Jersey Jordan Dri-Fit Nba Swingman Memphis Grizzlies.png"
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Niños'
                        uno="../../../public/assets/Imagenes Productos PNG//Niño/Ropa/Calcetines/Calcetines Jordan Essentials 3 Pares.png"
                        dos="../../../public/assets/Imagenes Productos PNG/Niña/Ropa/Pants/Pantalón Adidas Tiro 23.png"
                        tres="../../../public/assets/Imagenes Productos PNG/Niña/Ropa/Playeras/Playera Puma Power.png"
                        cuatro="../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Jerseys Equipos De Fútbol/Jersey Puma Chivas Visita.png"
                        cinco="../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Playeras/Playera Under Armour Golazo 3.0.png"
                        seis="../../../public/assets/Imagenes Productos PNG/Niña/Ropa/Jerseys Equipos De Fútbol/adidas Mexico Soccer.png"
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