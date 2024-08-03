import './ProductCart.css';


export default function ProductCart() {
    return (
        <>
            <body className='Container-ProductCart'>
                <article className='container-ProductImg'>
                    <img src="../../../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Gorras/Gorra Under Armour Blitzing White.png" alt="Producto" className='ProductImg' />
                </article>
                <article className='container-ProductInfo'>
                    <section className='container-MainInfo'>
                        <h1 className='title-mainInfo'>Nombre Producto</h1>
                        <h1 className='title-mainInfo'>$ 0,000.00</h1>
                    </section>
                    <section className='container-MainSize'>
                        <h2 className='subtitle-mainSize'>Talla: talla que selecciono</h2>
                    </section>
                    <section className='container-MainAmount'>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </section>
                </article>
                <article className='container-productClose'>
                    <img src="../../../public/assets/MainPage/Close-icon.png" alt="close Icon" className='CloseIcon-productClose'/>
                </article>
            </body>
        </>
    )
}