import './Product.css';
import Carousel from '../../components/carousel/carousel';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
    const [product, setProduct] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { idProductos } = useParams();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/products/${idProductos}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                } else {
                    console.error('Failed to fetch product:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        const checkWishlist = async () => {
            try {
                const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/wishlist/${userId}`);
                if (response.ok) {
                    const wishlist = await response.json();
                    setIsWishlisted(wishlist.some(product => product.idProductos === parseInt(idProductos)));
                } else {
                    console.error('Failed to fetch wishlist:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        fetchProduct();
        checkWishlist();
    }, [idProductos, userId]);

    const toggleWishlist = async (event) => {
        event.preventDefault();  // Prevent form from submitting and page reloading

        const url = isWishlisted
            ? 'https://api-deportiva-x.ngrok.io/api/user/wishlist/remove'
            : 'https://api-deportiva-x.ngrok.io/api/user/wishlist/add';

        const body = JSON.stringify({ UserId: userId, ProductId: parseInt(idProductos) });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });

            if (!response.ok) {
                console.error('Failed to update wishlist:', response.statusText);
            } else {
                setIsWishlisted(!isWishlisted);
            }
        } catch (error) {
            console.error('Error updating wishlist:', error);
        }
    };

    if (!product) {
        return (
            <div className="loading-message">
                <div className="loading-indicator"></div> {/* Spinner is now above the text */}
                <span className="loading-text">Loading product details...</span>
            </div>
        );
    }



    return (
        <>
            <main className='container-product'>
                <article className='container-product-all'>
                    <section className='container-title-product'>
                        <h1>{product.nombre}</h1>
                        <h2>${product.precio.toFixed(2)}</h2>
                    </section>
                    <div className='contain-img-select'>
                        <section className='container-img-product'>
                            <img src={product.imagen} alt="imagen de producto" className='img-product' />
                        </section>
                        <form className='forms-product' onSubmit={(e) => e.preventDefault()}>
                            <section className='container-select-product'>
                                <div className='select1 select-btn'>
                                    <h1>TALLA</h1>
                                    <select name="talla" id="select-talla">
                                        <option value="0">Elige</option>
                                        {product.tallas && product.tallas.length > 0 ? (
                                            product.tallas.map((talla, index) => (
                                                <option key={index} value={talla}>{talla}</option>
                                            ))
                                        ) : (
                                            <option value="">No hay tallas disponibles</option>
                                        )}
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
                                <button type='button' className='btn-carrito'>Añadir al Carrito</button>
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
                        <p>{product.descripcion}</p>
                    </section>
                    <section className='container-info'>
                        <h1>Confeccion</h1>
                        <p>{product.confeccion}</p>
                    </section>
                </article>
                <article className='carousel-products'>
                    <Carousel title='Calzado'>
                        {/* Carousel items not specified for brevity */}
                    </Carousel>
                </article>
            </main>
        </>
    );
}
