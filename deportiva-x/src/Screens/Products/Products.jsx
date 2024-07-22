// import './Products.css';
import Discount from '../../components/Discount/Discount';
import BurguerMenu from '../../components/BurguerMenu/BurguerMenu';
import Product from '../../components/Product/Product';

export default function Products() {
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
                    <img src="../../../public/assets/MainPage/ShoppingCar.png" alt="shopping-car" className='nav-icon' />
                </nav>
            </header>
            <Discount />
            <Product />
        </>
    )
}
