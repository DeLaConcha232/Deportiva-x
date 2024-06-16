import './SignUp.css'


export default function SignUp() {
    return (
        <>
            <header>
                <nav>
                    <img src="../../../public/assets/Login/burguer-menu.png" alt="burguerMenu" className='burguer-Menu' />
                </nav>
            </header>
            <main>
                <img src="../../../public/assets/Brand-logo.png" alt="Brand-logo" className='logo' />
                <article className='container cont'>
                    <article className='title titleSign'>
                        <h1 className="newA">Create New Account</h1>
                        <p id='signin'>Already Registered? Log in here</p>
                    </article>
                    <form action="" className='formulario forms'>
                        <span>NAME</span>
                        <input type="text" />
                        <span>EMAIL</span>
                        <input type='email' />
                        <span>PASSWORD</span>
                        <input type='password' />
                        <span>CODIGO POSTAL</span>
                        <input type="number" />
                        <span>DOMICILIO</span>
                        <input type="text" />
                        <span>TELEFONO</span>
                        <input type="number" />
                        <div className='formulario' id='buttonsSign'>
                            <button type='submit' className='btn' id='signup'>Sign Up</button>
                        </div>
                    </form>
                </article>
            </main>


        </>
    )
}