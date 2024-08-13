// src/Screens/ResetPassword/ResetPassword.js

import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const email = searchParams.get('email');
    const token = searchParams.get('token');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('https://api-deportiva-x.ngrok.io/api/user/resetpassword', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newPassword, token })
            });

            if (response.ok) {
                setMessage('Password reset successfully!');
                Swal3();
                // navigate('/login'); // Redirige al login después de restablecer la contraseña
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    const Swal3 = () => {
        Swal.fire({
            title: "Password reset successfully!",
            text: "You will be redirected to the login page",
            icon: "success",
            confirmButtonText: "si",
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login'); // Redirige al login después de confirmar
            }
        });
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
                        <h1>Reset Password</h1>
                        <Link to='/Login'>
                            <h3>Back to top</h3>
                        </Link>
                        <p className='signin'>Enter your email to receive a password reset link</p>
                    </article>
                    <form onSubmit={handleResetPassword} className='formulario'>
                        <span>New Password:</span>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <span>Confirm Password:</span>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <section className='formulario' id='buttons'>
                            <button type="submit" className='btn' onSubmit={() => Swal3()}>Reset Password</button>
                        </section>
                    </form>
                    {message && <p>{message}</p>}
                </article>
            </main>

        </>
    );
}
