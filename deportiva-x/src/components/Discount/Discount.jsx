import { Link } from 'react-router-dom'
import './Discount.css'




export default function Discount() {
    return (
        <>
            <nav className="navbarDiscount">
                <Link to='/Signup' className='Discount-container'>
                    <img src="../../../public/assets/MainPage/cut-25-Discount.png" alt="Discount" className='first-image'/>
                    <img src="../../../public/assets/MainPage/full-25-Discount.png" alt="" className='second-image'/>
                </Link>
            </nav>
        </>
    )
}