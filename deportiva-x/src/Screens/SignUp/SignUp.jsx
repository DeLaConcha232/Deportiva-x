import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'; // Importar SweetAlert
import './SignUp.css';

export default function SignUp() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            Nombre: formData.get('name'),
            Email: formData.get('email'),
            Contrasena: formData.get('password'),
            Postalcode: formData.get('postalcode'),
            Domicilio: formData.get('domicilio'),
            Telefono: formData.get('telefono'),
        };

        try {
            const response = await fetch('http://localhost:5033/api/User/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                swal("Good job!", "You clicked the button!", "success"); // Ejemplo de mensaje de éxito
                // Manejar la respuesta exitosa, como redirigir al usuario
            } else {
                const errorText = await response.text();
                swal("Oops!", errorText, "error"); // Mostrar el mensaje de error usando SweetAlert
            }
        } catch (error) {
            swal("Oops!", "An error occurred. Please try again.", "error"); // Mensaje de error genérico
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
                <Link to='/'>
                    <img src="../../../public/assets/Brand-logo.png" alt="Brand-logo" className='logo' />
                </Link>
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
