import { Link } from 'react-router-dom'
import './Forgot.css'



export default function ForgotPass() {
    return (
        <>
            <header id='headerLogin'>
                <nav>
                    <img src="../../../public/assets/Login/burguer-menu.png" alt="burguerMenu" className='burguer-Menu' />
                </nav>
            </header>
            <main id='mainLogin'>
                <Link to='/'>
                    <img src="../../../public/assets/Logo Final_2 PNG.png" alt="Brand-logo" className='logo' />
                </Link>
                <article className='container'>
                    <article className='title'>
                        <h1 className="">Forgot Password</h1>
                        <p className='signin'>New Password</p>
                    </article>
                    <form action="Login" className='formulario'>
                        <span>EMAIL</span>
                        <input type='email' />
                        <div className='formulario' id='buttons'>
                            <button type="submit" className='btn'>Send</button>
                        </div>
                    </form>
                </article>
            </main>
        </>
    )
}