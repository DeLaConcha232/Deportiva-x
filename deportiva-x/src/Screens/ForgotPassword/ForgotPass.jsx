import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Asegúrate de importar Link y useNavigate
import './Forgot.css';

export default function ForgotPass() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api-deportiva-x.ngrok.io/api/user/resetpassword', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, phone, newPassword })
            });

            if (response.ok) {
                setMessage('Password reset successful!');
                navigate('/login'); // Redirigir al login después de restablecer la contraseña
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
                            <h3 >Back to top </h3>
                        </Link>
                        <p className='signin'>Enter your email, phone number, and new password</p>
                    </article>
                    <form onSubmit={handleResetPassword} className='formulario'>
                        <span>EMAIL</span>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span>PHONE</span>
                        <input
                            type='text'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <span>NEW PASSWORD</span>
                        <input
                            type='password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <div className='formulario' id='buttons'>
                            <button type="submit" className='btn'>Reset Password</button>
                        </div>
                    </form>
                    {message && <p>{message}</p>}
                </article>
            </main>
        </>
    );
}
