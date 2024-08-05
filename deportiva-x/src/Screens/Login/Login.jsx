import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Asegúrate de importar tus estilos CSS aquí

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Usa useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api-deportiva-x.ngrok.io/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }

            const data = await response.json();
            console.log('Response from server:', data); // Verifica la respuesta del servidor

            // Asegúrate de que la respuesta contenga los campos esperados
            if (data.token && data.user && data.user.idUsuarios) {
                localStorage.setItem('token', data.token); // Almacena el token JWT en localStorage
                localStorage.setItem('userId', data.user.idUsuarios); // Almacena el ID del usuario en localStorage

                console.log('userId stored in localStorage:', localStorage.getItem('userId')); // Verifica que el userId se haya almacenado

                // Redirige al usuario a la mainpage después del login
                navigate('/');
            } else {
                console.error('Response missing token or userId');
                setError('Response missing token or userId'); // Muestra el error al usuario
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Error logging in: ' + error.message); // Muestra el error al usuario
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
                        <Link to='/'>
                            <img src="../../../public/assets/Logo Horizontal WHITE.png" alt="user-icon" />
                        </Link>
                        <h1 className="">LOGIN</h1>
                        <p className='signin'>Sign in to continue</p>
                    </article>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleSubmit} className='formulario'>
                        <span>EMAIL</span>
                        <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span>PASSWORD</span>
                        <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='formulario' id='buttons'>
                            <button type='submit' className='btn'>Login</button>
                            <Link to="/signup" type="button" className='btn'>Sign Up</Link>
                            <Link to="/forgotpass" className='forgotPass'>Forgot Password?</Link>
                        </div>
                    </form>
                </article>
            </main>
        </>
    );
}
