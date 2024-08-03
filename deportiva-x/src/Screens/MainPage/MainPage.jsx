import './MainPage.css';
import Discount from '../../components/Discount/Discount';
import Cookies from '../../components/Cookies/Cookies';
import Carousel from '../../components/carousel/carousel';
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';

export default function MainPage() {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    const calzadoProductos = [
        { id: 1, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Gimnasio y Entrenamiento/Tenis Adidas Amplimove Trainer Red.png" },
        { id: 14, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Casual/Tenis Nike Air Max Excee.png" },
        { id: 15, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Running/Tenis Nike Journey Run.png" },
        { id: 16, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tacos De Futbol/Tenis De Fútbol Nike Vapor 15 Academy Mercurial Dream Speed Mg.png" },
        { id: 17, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tenis De Basquetbol/Tenis Adidas Bounce Legends.png" },
        { id: 18, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Calzado/Gimnasio Y Entrenamiento/Tenis Adidas Dropset 2 Green.png" },
    ];

    const accesoriosProductos = [
        { id: 19, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Gorras/Gorra New Era 9forty Haas F1 Team Miami Race Special.png" },
        { id: 20, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Bolsas Y Mochilas/Maleta Under Armour Gametime.png" },
        { id: 21, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Bolsas Y Mochilas/Mochila Under Armour Studio Campus.png" },
        { id: 22, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Termos y Cilindros/Botella Puma Training.png" },
        { id: 23, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Gorras/Gorra Under_Armour Launch.png" },
        { id: 24, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Gorras/Gorra Under Armour Blitzing.png" },
    ];

    const deportesProductos = [
        { id: 25, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Basquetbol/Balon Wilson Drv Pro Streak.png" },
        { id: 26, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Fútbol/Balón De Fútbol Adidas Ucl Club Orange.png" },
        { id: 27, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Guantes De Portera/Guantes Nike Match 2.png" },
        { id: 28, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Tablas De Skate/MUSA.png" },
        { id: 29, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Muñequeras Y Bandas/Banda Nathan Hypernight Reflective.png" },
        { id: 30, img: "../../../public/assets/Imagenes Productos PNG/Niño/Accesorios/Balones De Fútbol/Balón De Fútbol Adidas Ucl League Knockout Mini.png" },
    ];

    const mujerProductos = [
        { id: 31, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Chamarras/Chamarra Adidas Tiro Cut 3.png" },
        { id: 32, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Pants/Pantalón Adidas Tiro 24.png" },
        { id: 33, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Sudaderas/Sudadera Under Armour Essential 2.png" },
        { id: 34, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Calcetines/Calcetines Asics Quick Lyte Plus 3 Pares.png" },
        { id: 35, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Tops Deportivos/Top Adidas All Me.png" },
        { id: 36, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Jerseys Equipos De Fútbol/Jersey Adidas Selección Nacional De México Visita 2024.png" },
    ];

    const hombreProductos = [
        { id: 37, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Chamarras/Chamarra Adidas 3 Stripes.png" },
        { id: 38, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Shorts/Short Adidas Messi.png" },
        { id: 39, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Jerseys Equipos De Fútbol/Jersey Adidas Real Madrid Visita.png" },
        { id: 40, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Chamarras/Chamarra Puma Fit Woven.png" },
        { id: 41, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Pants/Pantalón Adidas House Of Tiro Woven.png" },
        { id: 42, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Jerseys Equipos De Basquetbol/Jersey Jordan Dri-Fit Nba Swingman Memphis Grizzlies.png" },
    ];

    const ninosProductos = [
        { id: 43, img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Calcetines/Calcetines Jordan Essentials 3 Pares.png" },
        { id: 44, img: "../../../public/assets/Imagenes Productos PNG/Niña/Ropa/Pants/Pantalón Adidas Tiro 23.png" },
        { id: 45, img: "../../../public/assets/Imagenes Productos PNG/Niña/Ropa/Playeras/Playera Puma Power.png" },
        { id: 46, img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Jerseys Equipos De Fútbol/Jersey Puma Chivas Visita.png" },
        { id: 47, img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Playeras/Playera Under Armour Golazo 3.0.png" },
        { id: 48, img: "../../../public/assets/Imagenes Productos PNG/Niña/Ropa/Jerseys Equipos De Fútbol/adidas Mexico Soccer.png" },
    ];

    const handleClickWhatsapp = () => {
        const phoneNumber = '4495654099'; // Reemplaza con el número de teléfono al que deseas redirigir
        const message = 'Hola, me gustaría obtener más información'; // Mensaje opcional prellenado
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    return (
        <>
            <NavBar />
            <Discount />
            <main id='mainContent'>
                <section className='container-Icons'>
                    <img src="../../../public/assets/MainPage/Chat-icon.png" alt="Chat-Icon" className='chats-icon' />
                    <img src="../../../public/assets/MainPage/Whatsapp-Icon.png" alt="Whatsapp-Icon" className='chats-icon' onClick={handleClickWhatsapp} />
                </section>
                <article className='collage-container'>
                    <section className='collage'>
                        <a href="" className='calzado square'><h1>Calzado</h1><img src="../../../public/assets/MainPage/tenis-main-collage.png" alt="Calzado" className='img-collage' /></a>
                        <a href="" className='deportes square'><h1>Deportes</h1><img src="../../../public/assets/MainPage/balon-main-collage.png" alt="Deportes" className='img-collage' /></a>
                        <a href="" className='jerseys square'><h1>Jerseys</h1> <img src="../../../public/assets/MainPage/jersey-main-collage.png" alt="Jerseys" className='img-collage' /></a>
                        <a href="" className='accesorios square'><h1>Accesorios</h1><img src="../../../public/assets/MainPage/accesories-main-collage.png" alt="Accesorios" className='img-collage' /></a>
                        <a href="" className='niños square'><img src="../../../public/assets/MainPage/childs-main-collage.png" alt="Niños" className='img-collage childs' /><h1>Niños</h1></a>
                        <a href="" className='hombres square'><h1>Hombre</h1><img src="../../../public/assets/MainPage/man-main-collage.png" alt="Hombre" className='img-collage' /></a>
                        <a href="" className='mujeres square'><h1>Mujer</h1><img src="../../../public/assets/MainPage/woman-main-collage.png" alt="Mujer" className='img-collage' /></a>
                    </section>
                </article>
                <Element className='carousel-products wishlist'>
                    <Carousel
                        title='Favoritos'
                        uno="../../../public/assets/Imagenes Productos PNG/placeholder1.png"
                        dos="../../../public/assets/Imagenes Productos PNG/placeholder2.png"
                        tres="../../../public/assets/Imagenes Productos PNG/placeholder3.png"
                        cuatro="../../../public/assets/Imagenes Productos PNG/placeholder4.png"
                        cinco="../../../public/assets/Imagenes Productos PNG/placeholder5.png"
                        seis="../../../public/assets/Imagenes Productos PNG/placeholder6.png"
                    />
                </Element>
                <Element className='carousel-products View'>
                    <Carousel
                        title='Visto Recientemente'
                        uno="../../../public/assets/Imagenes Productos PNG/placeholder7.png"
                        dos="../../../public/assets/Imagenes Productos PNG/placeholder8.png"
                        tres="../../../public/assets/Imagenes Productos PNG/placeholder9.png"
                        cuatro="../../../public/assets/Imagenes Productos PNG/placeholder10.png"
                        cinco="../../../public/assets/Imagenes Productos PNG/placeholder11.png"
                        seis="../../../public/assets/Imagenes Productos PNG/placeholder12.png"
                    />
                </Element>
                <article className='carousel-products'>
                    <Carousel
                        title='Calzado'
                        uno={calzadoProductos[0].img}
                        dos={calzadoProductos[1].img}
                        tres={calzadoProductos[2].img}
                        cuatro={calzadoProductos[3].img}
                        cinco={calzadoProductos[4].img}
                        seis={calzadoProductos[5].img}
                        ids={[calzadoProductos[0].id, calzadoProductos[1].id, calzadoProductos[2].id, calzadoProductos[3].id, calzadoProductos[4].id, calzadoProductos[5].id]}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Accesorios'
                        uno={accesoriosProductos[0].img}
                        dos={accesoriosProductos[1].img}
                        tres={accesoriosProductos[2].img}
                        cuatro={accesoriosProductos[3].img}
                        cinco={accesoriosProductos[4].img}
                        seis={accesoriosProductos[5].img}
                        ids={[accesoriosProductos[0].id, accesoriosProductos[1].id, accesoriosProductos[2].id, accesoriosProductos[3].id, accesoriosProductos[4].id, accesoriosProductos[5].id]}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Deportes'
                        uno={deportesProductos[0].img}
                        dos={deportesProductos[1].img}
                        tres={deportesProductos[2].img}
                        cuatro={deportesProductos[3].img}
                        cinco={deportesProductos[4].img}
                        seis={deportesProductos[5].img}
                        ids={[deportesProductos[0].id, deportesProductos[1].id, deportesProductos[2].id, deportesProductos[3].id, deportesProductos[4].id, deportesProductos[5].id]}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Mujer'
                        uno={mujerProductos[0].img}
                        dos={mujerProductos[1].img}
                        tres={mujerProductos[2].img}
                        cuatro={mujerProductos[3].img}
                        cinco={mujerProductos[4].img}
                        seis={mujerProductos[5].img}
                        ids={[mujerProductos[0].id, mujerProductos[1].id, mujerProductos[2].id, mujerProductos[3].id, mujerProductos[4].id, mujerProductos[5].id]}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Hombre'
                        uno={hombreProductos[0].img}
                        dos={hombreProductos[1].img}
                        tres={hombreProductos[2].img}
                        cuatro={hombreProductos[3].img}
                        cinco={hombreProductos[4].img}
                        seis={hombreProductos[5].img}
                        ids={[hombreProductos[0].id, hombreProductos[1].id, hombreProductos[2].id, hombreProductos[3].id, hombreProductos[4].id, hombreProductos[5].id]}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Niños'
                        uno={ninosProductos[0].img}
                        dos={ninosProductos[1].img}
                        tres={ninosProductos[2].img}
                        cuatro={ninosProductos[3].img}
                        cinco={ninosProductos[4].img}
                        seis={ninosProductos[5].img}
                        ids={[ninosProductos[0].id, ninosProductos[1].id, ninosProductos[2].id, ninosProductos[3].id, ninosProductos[4].id, ninosProductos[5].id]}
                    />
                </article>
            </main>
            <Cookies />
        </>
    );
}
