import './Login.css'



export default function Login() {
    return (
        <>
            <section className="container">
                <article className='title'>
                    <img src="../../../public/assets/User-icon.png" alt="user-icon" />
                    <h1 className="">LOGIN</h1>
                </article>
                <form action="" className='formulario'>
                    <span>Email</span>
                    <input type='email' />
                    <span>Password</span>
                    <input type='password' />
                    <button type='submit'>Login</button>
                    <button type="button">Sign Up</button>
                </form>
            </section>
        </>
    )
}