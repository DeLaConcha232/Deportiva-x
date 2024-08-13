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
        { id: "ADTB001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tenis De Basquetbol/Tenis Nike Ja 1 Seasonal.png" },
        { id: "ADTB002", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tenis De Basquetbol/Tenis Nike Ja 1 Personal Touch.png" },
        { id: "ADTC001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Casual/Tenis Nike Court Vision Low White Black.png" },
        { id: "ADTB001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tacos De Futbol/Tenis De Fútbol Nike Vapor 15 Academy Mercurial Dream Speed Mg.png" },
        { id: "ADTF001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tacos De Futbol/Tenis De Fútbol Puma Vitoria Fg-Ag.png" },
        { id: "ADTF002", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Tacos De Futbol/Tenis De Fútbol Nike Premier 3 Fg.png" },
    ];

    const accesoriosProductos = [
        { id: "ADTE001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Termos y Cilindros/Botella Puma Training.png" },
        { id: "ADTE002", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Termos y Cilindros/Botella Nike Big Mouth.png" },
        { id: "ADBM001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Bolsas Y Mochilas/Maleta Under Armour Gametime.png" },
        { id: "ADEP001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Espinilleras/Espinilleras Adidas Messi Club.png" },
        { id: "NNMO001", img: "../../../public/assets/Imagenes Productos PNG/Niño/Accesorios/Mochilas/Mochila Jordan Hbr Jumpman 2.png" },
        { id: "MUGO001", img: "../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Gorras/Gorra Under Armour Blitzing.png" },
    ];


    const deportesProductos = [
        { id: "ADBB001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Basquetbol/Balon Wilson Drv Pro Streak.png" },
        { id: "ADBF001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Fútbol/Balón De Fútbol Adidas Ucl Club Orange.png" },
        { id: "ADGU001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Guantes De Portero/Guantes Adidas Tiro Club.png" },
        { id: "ADSK001", img: "../../../public/assets/Imagenes Productos PNG/Mujer/Accesorios/Tablas De Skate/MUSA.png" },
        { id: "ADMB001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Muñequeras Y Bandas/Banda Nathan Hypernight Reflective.png" },
        { id: "NNBF001", img: "../../../public/assets/Imagenes Productos PNG/Niño/Accesorios/Balones De Fútbol/Balón De Fútbol Adidas Ucl League Knockout Mini.png" },
    ];

    const mujerProductos = [
        { id: "MUCH001", img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Chamarras/Chamarra Adidas Tiro Cut 3.png" },
        { id: "MUPA001", img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Pants/Pantalón Adidas Tiro 24.png" },
        { id: "MUSU001", img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Sudaderas/Sudadera Under Armour Essential 2.png" },
        { id: "MUCA001", img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Calcetines/Calcetines Asics Quick Lyte Plus 3 Pares.png" },
        { id: "MUTO001", img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Tops Deportivos/Top Adidas All Me.png" },
        { id: "MUJE001", img: "../../../public/assets/Imagenes Productos PNG/Mujer/Ropa/Jerseys Equipos De Fútbol/Jersey Adidas Selección Nacional De México Visita 2024.png" },
    ];

    const hombreProductos = [
        { id: "HOPA001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Pants/Pantalón Puma Train All Day.png" },
        { id: "HOPL001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Playeras/Playera Adidas Gym Training Tee.png" },
        { id: "HOSH001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Shorts/Short Adidas Tiro 24.png" },
        { id: "NNSU001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Sudaderas/Sudadera Under Armour Project Rock.png" },
        { id: "HOPA002", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Pants/Pantalón Adidas House Of Tiro Woven.png" },
        { id: "HOJE001", img: "../../../public/assets/Imagenes Productos PNG/Hombre/Ropa/Jerseys Equipos De Basquetbol/Jersey Jordan Dri-Fit Nba Swingman Memphis Grizzlies.png" },
    ];

    const ninosProductos = [
        { id: "NNCA001", img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Calcetines/Calcetines Adidas Star Wars 3 Pack.png" },
        { id: "NNJE003", img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Jerseys Equipos De Fútbol/Jersey Adidas Jamaica Local.png" },
        { id: "NNPA001", img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Pants/Pantalón Adidas Messi.png" },
        { id: "NNPL001", img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Playeras/Playera Under Armour Ua Tech.png" },
        { id: "NNJE001", img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Jerseys Equipos De Fútbol/Jersey Puma Chivas Visita.png" },
        { id: "NNJE002", img: "../../../public/assets/Imagenes Productos PNG/Niño/Ropa/Jerseys Equipos De Basquetbol/Jersey Nike Denver Nuggets Icon Edition.png" },
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
