import { Link } from "react-router-dom"
import BurguerMenu from "../BurguerMenu/BurguerMenu"
import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <header>
                <nav id='mainNavbar'>
                    <BurguerMenu />
                    <article className='search'>
                        <form action="" className='forms-input-search'>
                            <section className='input-icon-container'>
                                <img src="../../../public/assets/MainPage/Search-icon.png" alt="search-icon" className='input-icon' />
                            </section>
                            <input type="text" />
                            <section className='input-icon-container'>
                                <button type='reset' className='button-reset'>
                                    <img type="reset" src="../../../public/assets/MainPage/Close-icon.png" alt="close-icon" className='input-icon' />
                                </button>
                            </section>
                        </form>
                    </article>
                    <Link to='/ShoppingCart' className='ShoppingCart-container'>
                        <img src="../../../public/assets/MainPage/ShoppingCar.png" alt="shopping-cart" className='nav-icon' />
                    </Link>
                </nav>
            </header>
        </>
    )
}