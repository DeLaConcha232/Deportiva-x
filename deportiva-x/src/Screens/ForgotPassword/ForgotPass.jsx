import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Asegúrate de importar Link y useNavigate
import './Forgot.css';

export default function ForgotPass() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api-deportiva-x.ngrok.io/api/account/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                setMessage('An email has been sent to reset your password.');
                // Opcional: podrías redirigir al usuario después de mostrar el mensaje
                // navigate('/login');
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

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
                        <h1>Forgot Password</h1>
                        <Link to='/Login'>
                            <h3>Back to top</h3>
                        </Link>
                        <p className='signin'>Enter your email to receive a password reset link</p>
                    </article>
                    <form onSubmit={handleForgotPassword} className='formulario'>
                        <span>EMAIL</span>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Link to='/reset-password' className='formulario' id='buttons'>
                            <button type="submit" className='btn'>Send Reset Link</button>
                        </Link>
                    </form>
                    {message && <p>{message}</p>}
                </article>
            </main>
        </>
    );
}
