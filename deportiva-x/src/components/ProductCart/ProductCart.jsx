import React from 'react';
import './ProductCart.css';

export default function ProductCart({ item, onRemove }) {
    const handleQuantityChange = (event) => {
        // Implement the logic to update the quantity
        console.log(`Quantity for item ${item.idCarritoItems} changed to ${event.target.value}`);
    };

    return (
        <div className='Container-ProductCart'>
            <article className='container-ProductImg'>
                <img src={item.productos.imagen} alt={item.productos.nombre} className='ProductImg' />
            </article>
            <article className='container-ProductInfo'>
                <section className='container-MainInfo'>
                    <h1 className='title-mainInfo'>{item.productos.nombre}</h1>
                    <h1 className='title-mainInfo'>${item.productos.precio.toFixed(2)}</h1>
                </section>
                <section className='container-MainSize'>
                    <h2 className='subtitle-mainSize'>Talla: {item.productos.tallaDb}</h2>
                </section>
                <section className='container-MainAmount'>
                    <select
                        name="cantidad"
                        id={`cantidad-${item.idCarritoItems}`}
                        value={item.cantidad}
                        onChange={handleQuantityChange} // Add this line
                    >
                        {[...Array(10).keys()].map(n => (
                            <option key={n + 1} value={n + 1}>{n + 1}</option>
                        ))}
                    </select>
                </section>
            </article>
            <article className='container-productClose'>
                <img
                    src="../../../public/assets/MainPage/Close-icon.png"
                    alt="close Icon"
                    className='CloseIcon-productClose'
                    onClick={() => onRemove(item.idCarritoItems)} // Add this line
                />
            </article>
        </div>
    );
}
