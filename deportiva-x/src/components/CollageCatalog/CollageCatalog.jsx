import './CollageCatalog.css';
import { Link } from 'react-router-dom';


const CollageCatalog = () => {
    return (
        <>
            <article className='collage-container'>
                <section className='collage'>
                    <Link to="/category/Calzado" className='calzado square'>
                        <h1>Calzado</h1>
                        <img src="../../../public/assets/MainPage/tenis-main-collage.png" alt="Calzado" className='img-collage grande' />
                    </Link>
                    <Link to="/category/Deportes" className='deportes square'>
                        <h1>Deportes</h1>
                        <img src="../../../public/assets/MainPage/balon-main-collage.png" alt="Deportes" className='img-collage mediano' />
                    </Link>
                    <Link to="/category/Jerseys" className='jerseys square'>
                        <h1>Jerseys</h1>
                        <img src="../../../public/assets/MainPage/jersey-main-collage.png" alt="Jerseys" className='img-collage mediano' />
                    </Link>
                    <Link to="/category/Accesorios" className='accesorios square'>
                        <h1>Accesorios</h1>
                        <img src="../../../public/assets/MainPage/accesories-main-collage.png" alt="Accesorios" className='img-collage pequeño' />
                    </Link>
                    <Link to="/category/Niños" className='niños square'>
                        <img src="../../../public/assets/MainPage/childs-main-collage.png" alt="Niños" className='img-collage childs pequeño' />
                        <h1>Niños</h1>
                    </Link>
                    <Link to="/category/Hombre" className='hombres square'>
                        <h1>Hombre</h1>
                        <img src="../../../public/assets/MainPage/man-main-collage.png" alt="Hombre" className='img-collage mediano' />
                    </Link>
                    <Link to="/category/Mujer" className='mujeres square'>
                        <h1>Mujer</h1>
                        <img src="../../../public/assets/MainPage/woman-main-collage.png" alt="Mujer" className='img-collage mediano ' />
                    </Link>
                </section>
            </article>
        </>
    )
}

export default CollageCatalog;