import { useState, useEffect } from 'react';
import './Cookies.css';

export default function Cookies() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
        if (hasAcceptedCookies !== 'true') {
            setIsVisible(true);
        }
    }, []);

    function handleClose(accepted) {
        localStorage.setItem('cookiesAccepted', accepted ? 'true' : 'false');
        setIsVisible(false);
    }

    if (!isVisible) {
        return null;
    }

    return (
        <main className='cookies'>
            <article className='content'>
                <h1>Esta página web usa cookies</h1>
                <h2>Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico.</h2>
            </article>
            <article className='btn-container'>
                <button className='accept btn-cookies' onClick={() => handleClose(true)}>Aceptar</button>
                <button className='decline btn-cookies' onClick={() => handleClose(false)}>Rechazar</button>
            </article>
        </main>
    );
}
