import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Crear un objeto FormData para recoger los valores del formulario
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            postalcode: formData.get('postalcode'),
            domicilio: formData.get('domicilio'),
            telefono: formData.get('telefono'),
        };

        // Realizar la solicitud POST a tu API
        try {
            const response = await fetch('http://localhost:5033/api/User/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Origin': 'http://localhost:3000' // Reemplaza con tu puerto de desarrollo de React
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Manejar la respuesta exitosa
                console.log('User registered successfully');
                // Aquí podrías, por ejemplo, redirigir al usuario a otra página o mostrar un mensaje de éxito
            } else {
                // Manejar errores de la respuesta
                console.error('Error registering user');
                // Aquí podrías mostrar un mensaje de error al usuario
            }
        } catch (error) {
            // Manejar errores de la solicitud
            console.error('Error in fetch operation', error);
            // Aquí podrías mostrar un mensaje de error al usuario
        }
    };

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
                        <Link to="/Login" id='signin'>Already Registered? Log in here</Link>
                    </article>
                    <form onSubmit={handleSubmit} className='formulario forms'>
                        <span>NAME</span>
                        <input type="text" name="name" required />
                        <span>EMAIL</span>
                        <input type='email' name="email" required />
                        <span>PASSWORD</span>
                        <input type='password' name="password" required />
                        <span>CODIGO POSTAL</span>
                        <input type="number" name="postalcode" />
                        <span>DOMICILIO</span>
                        <input type="text" name="domicilio" />
                        <span>TELEFONO</span>
                        <input type="number" name="telefono" required />
                        <div className='formulario' id='buttonsSign'>
                            <button type='submit' className='btn' id='signupBtn'>Sign Up</button>
                        </div>
                    </form>
                </article>
            </main>
        </>
    );
}
