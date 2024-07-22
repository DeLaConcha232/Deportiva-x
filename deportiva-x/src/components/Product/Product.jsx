import './Product.css';
import Carousel from '../../components/carousel/carousel';
import { useState } from 'react';

export default function Product() {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };
    return (
        <>
            <main className='container-product'>
                <article className='container-product-all'>
                    <section className='container-title-product'>
                        <h1>Titulo del producto</h1>
                        <h2>$4,599.00</h2>
                    </section>
                    <div className='contain-img-select'>
                        <section className='container-img-product'>
                            <img src='../../../public/assets/Imagenes Productos PNG/Hombre/Calzado/Gimnasio y Entrenamiento/Tenis Adidas Amplimove Trainer Red.png' alt="imagen de producto" className='img-product' />
                        </section>
                        <form action="" className='forms-product'>
                            <section className='container-select-product'>
                                <div className='select1 select-btn'>
                                    <h1>TALLA</h1>
                                    <select name="talla" id="select-talla">
                                        <option value="0">Elige</option>
                                        <option value="">*</option>
                                        <option value="">*</option>
                                        <option value="">*</option>
                                        <option value="">*</option>
                                        <option value="">*</option>
                                    </select>
                                </div>
                                <div className='select2 select-btn'>
                                    <h1>CANTIDAD</h1>
                                    <select name="cantidad" id="select-cantidad">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </section>
                            <section className='container-btn-product'>
                                <button className='btn-carrito'>Añadir al Carrito</button>
                                <img
                                    src={isWishlisted ? '../../../public/assets/Product/me-gusta-color.png' : '../../../public/assets/Product/me-gusta.png'}
                                    alt="Wishlist Button"
                                    className="img-favoritos"
                                    onClick={toggleWishlist}
                                />
                            </section>
                        </form>
                    </div>
                </article>
                <article className='container-description'>
                    <section className='container-info'>
                        <h1>Detalles</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam perferendis eaque, repudiandae molestias itaque animi!</p>
                    </section>
                    <section className='container-info'>
                        <h1>Confeccion</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, natus.</p>
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
            </main>
        </>
    )
}
