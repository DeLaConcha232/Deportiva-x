import React from 'react';
import './ProductCart.css';

export default function ProductCart({ item, onRemove }) {
    if (!item) {
        return null; // O un mensaje de error adecuado
    }

    return (
        <div className='Container-ProductCart'>
            <article className='container-ProductImg'>
                <img src={item.imagen} alt={item.nombre} className='ProductImg' />
            </article>
            <article className='container-ProductInfo'>
                <section className='container-MainInfo'>
                    <h1 className='title-mainInfo'>{item.nombre}</h1>
                    <h1 className='title-mainInfo'>${item.precio.toFixed(2)}</h1>
                </section>
                <section className='container-MainSize'>
                    <h2 className='subtitle-mainSize'>Talla: {item.talla}</h2>
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
