import './Login.css'
// import SignUp from '../SignUp/SignUp'


export default function Login() {
    return (
        <>
            <header>
                <nav>
                    <img src="../../../public/assets/Login/burguer-menu.png" alt="burguerMenu" className='burguer-Menu'/>
                </nav>
            </header>
            <main>
                <img src="../../../public/assets/Brand-logo.png" alt="Brand-logo" className='logo' />
                <article className='container'>
                    <article className='title'>
                        <img src="../../../public/assets/Login/User-icon.png" alt="user-icon" />
                        <h1 className="">LOGIN</h1>
                        <p className='signin'>Sign in to continue</p>
                    </article>
                    <form action="" className='formulario'>
                        <span>EMAIL</span>
                        <input type='email' />
                        <span>PASSWORD</span>
                        <input type='password' />
                        <div className='formulario' id='buttons'>
                            <button type='submit' className='btn'>Login</button>
                            <button type="button" className='btn'>Sign Up</button>
                        </div>
                    </form>
                </article>
            </main>
        </>
    )
}