import { Link } from "react-router-dom";
import BurguerMenu from "../BurguerMenu/BurguerMenu";
import './NavBar.css';
import { useState } from 'react';

export default function NavBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Limpia los resultados si el campo de búsqueda está vacío
        if (value === '') {
            setSearchResults([]);
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!searchTerm) {
            return;
        }
        try {
            const response = await fetch(`https://api-deportiva-x.ngrok.io/api/user/products/search?query=${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.$values) {
                    setSearchResults(data.$values);
                } else {
                    setSearchResults([]);
                }
            } else {
                console.error('Failed to fetch search results:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleReset = () => {
        setSearchTerm('');
        setSearchResults([]);
    };

    return (
        <>
            <header>
                <nav id='mainNavbar'>
                    <BurguerMenu />
                    <article className='search'>
                        <form onSubmit={handleSearch} className='forms-input-search'>
                            <section className='input-icon-container'>
                                <img src="../../../public/assets/MainPage/Search-icon.png" alt="search-icon" className='input-icon' />
                            </section>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder="Buscar productos..."
                                className="input-search-navbar"
                            />
                            <section className='input-icon-container'>
                                <button type='reset' className='button-reset' onClick={handleReset}>
                                    <img src="../../../public/assets/MainPage/Close-icon.png" alt="close-icon" className='input-icon' />
                                </button>
                            </section>
                        </form>
                    </article>
                    <Link to='/ShoppingCart' className='ShoppingCart-container'>
                        <img src="../../../public/assets/MainPage/ShoppingCar.png" alt="shopping-cart" className='nav-icon' />
                    </Link>
                </nav>
            </header>
            {searchResults.length > 0 && (
                <section className='search-results'>
                    <h2>Resultados de la búsqueda:</h2>
                    <ul>
                        {searchResults.map((product) => (
                            <li key={product.idProductos} className='search-result-item'>
                                <Link to={`/product/${product.idProductos}`}>
                                    <div className='product-info'>
                                        <h3>{product.nombre}</h3>
                                        <p>${product.precio.toFixed(2)}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
}
