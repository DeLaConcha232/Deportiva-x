import { Link, useNavigate } from 'react-router-dom';
import './BurguerMenu.css';
import { useState, useEffect } from 'react';

export default function BurguerMenu() {
    const [isOpen, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate(); // Usa useNavigate para redirigir

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Establece isLoggedIn según la existencia del token
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Elimina el token del localStorage
        setIsLoggedIn(false);
        setOpen(false);
        navigate('/login'); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <>
            <div className='Containers'>
                <img className='nav-icon' src="../../../public/assets/BrandLogo-Navbar.png" alt="" onClick={() => setOpen(!isOpen)} />
                <article className={`layout ${isOpen ? 'menuOpen' : 'menuClosed'}`}>
                    <article className={`container-menu ${isOpen ? 'menuOpen' : 'menuClosed'}`}>
                        <div className='container-close'>
                            <img src="../../../public/assets/MainPage/Close-icon.png" alt="" className='btn-close-burguer' onClick={() => setOpen(false)} />
                        </div>
                        <section className='container-menu2'>
                            <img src="../../../public/assets/Brand-logo.png" alt="" className='brandLogo-burguer' />
                            <Link to='/' className='btn-burguer' onClick={() => setOpen(false)}>Inicio</Link>
                            <Link to='/orders' className='btn-burguer' onClick={() => setOpen(false)}>Pedidos</Link>
                            <button className='btn-burguer' onClick={() => setOpen(false)}>Favoritos</button>
                            <button className='btn-burguer' onClick={() => setOpen(false)}>Vistos</button>
                            {isLoggedIn && (
                                <button className='btn-burguer log-out' onClick={handleLogout}>Log Out</button>
                            )}
                        </section>
                    </article>
                </article>
            </div>
        </>
    );
}
