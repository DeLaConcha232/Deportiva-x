import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Asegúrate de importar tus estilos CSS aquí

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5033/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                console.log('User logged in successfully');
            }
            else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Almacena el token JWT en localStorage para q luego lo use

            // para q luego redirija a donde queramos
            // history.push('/profile');

        } catch (error) {
            console.error('Error logging in:', error);

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
                <img src="../../../public/assets/Brand-logo.png" alt="Brand-logo" className='logo' />
                <article className='container'>
                    <article className='title'>
                        <img src="../../../public/assets/Login/User-icon.png" alt="user-icon" />
                        <h1 className="">LOGIN</h1>
                        <p className='signin'>Sign in to continue</p>
                    </article>
                    <form onSubmit={handleSubmit} className='formulario'>
                        <span>EMAIL</span>
                        <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span>PASSWORD</span>
                        <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='formulario' id='buttons'>
                            <button type='submit' className='btn'>Login</button>
                            <Link to="/Signup" type="button" className='btn'>Sign Up</Link>
                            <Link to="/Forgotpass" className='forgotPass'>Forgot Password?</Link>
                        </div>
                    </form>
                </article>
            </main>
        </>
    );
}
