import React from 'react';
import './ProductCart.css';

export default function ProductCart({ item, onRemove }) {
    const handleQuantityChange = (event) => {
        console.log(`Quantity for item ${item.idCarritoItems} changed to ${event.target.value}`);
        // Implementa aquí la lógica para actualizar la cantidad, si es necesario
    };

    return (
        <div className='Container-ProductCart'>
            <article className='container-ProductImg'>
                <img src={item.imagen || "default-image.png"} alt={item.nombre || "Producto"} className='ProductImg' />
            </article>
            <article className='container-ProductInfo'>
                <section className='container-MainInfo'>
                    <h1 className='title-mainInfo'>{item.nombre || "Nombre no disponible"}</h1>
                    <h1 className='title-mainInfo'>${item.precio ? item.precio.toFixed(2) : "Precio no disponible"}</h1>
                </section>
                <section className='container-MainSize'>
                    <h2 className='subtitle-mainSize'>Talla: {item.talla || "Talla no disponible"}</h2>
                </section>
                <section className='container-MainAmount'>
                    {/* Selección de cantidad comentada para simplificar */}
                </section>
            </article>
            <article className='container-productClose'>
                <img
                    src="../../../public/assets/MainPage/Close-icon.png"
                    alt="close Icon"
                    className='CloseIcon-productClose'
                    onClick={() => onRemove(item.idCarritoItems)}
                />
            </article>
        </div>
    );
}
