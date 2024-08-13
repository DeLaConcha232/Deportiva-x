import { useEffect, useState } from 'react';
import './MainPage.css';
import Discount from '../../components/Discount/Discount';
import Cookies from '../../components/Cookies/Cookies';
import Carousel from '../../components/carousel/carousel';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import useTawkTo from '../../components/livechat/useTawkTo';
import axios from 'axios';
import Whatsapp from '../../components/whatsapp/Whatsapp';
import Footer from '../../components/Footer/Footer';
import CollageCatalog from '../../components/CollageCatalog/CollageCatalog';

const API_URL = 'https://api-deportiva-x.ngrok.io';

export default function MainPage() {
    const navigate = useNavigate();
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
            axios.get(`${API_URL}/api/user/wishlist/${userId}`)
                .then(response => {
                    const wishlistData = response.data.$values || []; // Maneja el caso en que la lista esté vacía
                    setWishlistProducts(wishlistData);
                })
                .catch(error => {
                    if (error.response && error.response.status === 404) {
                        // Si el error es un 404, simplemente asigna un array vacío a los productos
                        setWishlistProducts([]);
                    } else {
                        console.error('Error fetching wishlist:', error);
                    }
                });
        }
    }, [userId]);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    const useLiveChat = () => {
        useEffect(() => {
            // Cargar el script de LiveChat
            const s1 = document.createElement("script");
            s1.async = true;
            s1.src = 'https://cdn.livechatinc.com/tracking.js';
            s1.type = 'text/javascript';
            s1.onload = () => {
                window.__lc = window.__lc || {};
                window.__lc.license = 18359016;
                window.__lc.integration_name = "manual_onboarding";
                window.__lc.product_name = "livechat";
                console.log("LiveChat script loaded");
            };
            document.body.appendChild(s1);

            return () => {
                document.body.removeChild(s1);
            };
        }, []);
    };

    useTawkTo();


    const calzadoProductos = [
        { id: "ADBB001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Gimnasio y Entrenamiento/Tenis Adidas Amplimove Trainer Red.png" },
        { id: "ADBF001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Casual/Tenis Nike Air Max Excee.png" },
        { id: 15, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Running/Tenis Nike Journey Run.png" },
        { id: "ADTB001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tacos De Futbol/Tenis De Fútbol Nike Vapor 15 Academy Mercurial Dream Speed Mg.png" },
        { id: 17, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tenis De Basquetbol/Tenis Adidas Bounce Legends.png" },
        { id: 18, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Calzado/Gimnasio Y Entrenamiento/Tenis Adidas Dropset 2 Green.png" },
    ];

    const accesoriosProductos = [
        { id: 19, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Gorras/Gorra New Era 9forty Haas F1 Team Miami Race Special.png" },
        { id: "ADBM001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Bolsas Y Mochilas/Maleta Under Armour Gametime.png" },
        { id: 21, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Bolsas Y Mochilas/Mochila Under Armour Studio Campus.png" },
        { id: "ADTE001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Termos y Cilindros/Botella Puma Training.png" },
        { id: 23, img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Gorras/Gorra Under_Armour Launch.png" },
        { id: 24, img: "../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Gorras/Gorra Under Armour Blitzing.png" },
    ];


    const deportesProductos = [
        { id: "ADBB001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Basquetbol/Balon Wilson Drv Pro Streak.png" },
        { id: "ADBF001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Fútbol/Balón De Fútbol Adidas Ucl Club Orange.png" },
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

    return (
        <>
            <NavBar />
            <Discount />
            <main id='mainContent'>
                <Whatsapp />
                <CollageCatalog />
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
            <Footer />
        </>
    );
}
