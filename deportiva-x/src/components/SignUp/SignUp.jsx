import './SignUp.css'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <>
            <header id='headerLogin'>
                <nav>
                    <img src="../../../public/assets/Login/burguer-menu.png" alt="burguerMenu" className='burguer-Menu' />
                </nav>
            </header>
            <main id='signup'>
                <img src="../../../public/assets/Brand-logo.png" alt="Brand-logo" className='logo' />
                <article className='container cont'>
                    <article className='title titleSign'>
                        <h1 className="newA">Create New Account</h1>
                        <Link to="/" id='signin'>Already Registered? Log in here</Link>
                    </article>
                    <form action="/" className='formulario forms'>
                        <span>NAME</span>
                        <input type="text" required/>
                        <span>EMAIL</span>
                        <input type='email' required/>
                        <span>PASSWORD</span>
                        <input type='password' required/>
                        <span>CODIGO POSTAL</span>
                        <input type="number" />
                        <span>DOMICILIO</span>
                        <input type="text" />
                        <span>TELEFONO</span>
                        <input type="number" required/>
                        <div className='formulario' id='buttonsSign'>
                            <button type='submit' className='btn' id='signupBtn'>Sign Up</button>
                            {/* <Link to="/" type='submit' className='btn' id='signup'>Sign Up</Link> */}
                        </div>
                    </form>
                </article>
            </main>


        </>
    )
}