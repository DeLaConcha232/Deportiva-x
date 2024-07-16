import { useState } from 'react'
import './Cookies.css'



export default function Cookies() {
    const[isVisible, setIsVisible] = useState(true)

    function handleClose() {
        setIsVisible(false)

    }

    if(!isVisible) {return null}
    
    return (
        <>
            <main className='cookies'>
                <article className='content'>
                    <h1>Esta pagina web usa cookies</h1>
                    <h2>Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrece funciones de redes sociales y analizar el trafico</h2>
                </article>
                <article className='btn-container'>
                    <button className='accept btn-cookies' onClick={handleClose}>Aceptar</button>
                    <button className='decline btn-cookies' onClick={handleClose}>Rechazar</button>
                </article>
            </main>
        </>
    )
}