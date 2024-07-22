import { Link } from 'react-router-dom'
import './BurguerMenu.css'
import { useState } from 'react'

export default function BurguerMenu() {
    const [isOpen, setOpen] = useState(false)


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
                            <Link to='/Orders' className='btn-burguer' onClick={() => setOpen(false)}>pedidos</Link>
                            <button className='btn-burguer' onClick={() => setOpen(false)}>favoritos</button>
                            <button className='btn-burguer' onClick={() => setOpen(false)}>Vistos</button>
                            <button className='btn-burguer log-out'>Log Out</button>
                            
                        </section>
                    </article>
                </article>
            </div>
        </>
    )
}



