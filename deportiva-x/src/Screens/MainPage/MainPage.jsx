import React, { useEffect, useState } from 'react';
import './MainPage.css';
import Discount from '../../components/Discount/Discount';
import Cookies from '../../components/Cookies/Cookies';
import Carousel from '../../components/carousel/carousel';
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import useTawkTo from '../../components/livechat/useTawkTo';
import axios from 'axios';

const API_URL = 'https://api-deportiva-x.ngrok.io';

export default function MainPage() {
    const navigate = useNavigate();
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
            axios.get(`${API_URL}/api/user/wishlist/${userId}`)
                .then(response => {
                    const wishlistData = response.data.$values;
                    setWishlistProducts(wishlistData);
                })
                .catch(error => {
                    console.error('Error fetching wishlist:', error);
                });
        }
    }, [userId]);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    useTawkTo();

    const calzadoProductos = [
        { id: 1, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Gimnasio y Entrenamiento/Tenis Adidas Amplimove Trainer Red.png" },
        { id: 2, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Casual/Tenis Nike Air Max Excee.png" },
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
                    <img src="../../../public/assets/MainPage/Whatsapp-Icon.png" alt="Whatsapp-Icon" className='chats-icon' onClick={handleClickWhatsapp} />
                    {/* <img src="../../../public/assets/MainPage/Chat-icon.png" alt="Chat-Icon" className='chats-icon chatbot' /> */}
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
                {userId && userId !== "undefined" && wishlistProducts.length > 0 && (
                    <Element className='carousel-products wishlist'>
                        <Carousel
                            title='Favoritos'
                            products={wishlistProducts.map(p => ({ idProductos: p.idProductos, imagen: p.imagen, nombre: p.nombre }))}
                            isWishlist={true} // Indica que este es el carrusel de favoritos
                        />
                    </Element>
                )}
                <article className='carousel-products'>
                    <Carousel
                        title='Calzado'
                        products={calzadoProductos.map(p => ({ idProductos: p.id, imagen: p.img }))}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Accesorios'
                        products={accesoriosProductos.map(p => ({ idProductos: p.id, imagen: p.img }))}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Deportes'
                        products={deportesProductos.map(p => ({ idProductos: p.id, imagen: p.img }))}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Mujer'
                        products={mujerProductos.map(p => ({ idProductos: p.id, imagen: p.img }))}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Hombre'
                        products={hombreProductos.map(p => ({ idProductos: p.id, imagen: p.img }))}
                    />
                </article>
                <article className='carousel-products'>
                    <Carousel
                        title='Niños'
                        products={ninosProductos.map(p => ({ idProductos: p.id, imagen: p.img }))}
                    />
                </article>
            </main>
            <Cookies />
        </>
    );
}
