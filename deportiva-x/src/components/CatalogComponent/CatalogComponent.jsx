import './CatalogComponent.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Discount from '../Discount/Discount';
import Footer from '../Footer/Footer';
import Whatsapp from '../whatsapp/Whatsapp';
import axios from 'axios';

const API_URL = 'https://api-deportiva-x.ngrok.io/api/user';

const fetchProducts = async (category) => {
  try {
    console.log(`Fetching products for category: ${category}`);
    const response = await axios.get(`${API_URL}/productscatalog`, { params: { category } });
    console.log(response.data);
    // Extraer los valores desde $values si existen
    const products = response.data.$values ? response.data.$values : response.data;
    return products;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return [];
  }
};

const CatalogComponent = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      setLoading(true);
      const fetchedProducts = await fetchProducts(categoryName);
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchAndSetProducts();
  }, [categoryName]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <NavBar />
      <Discount />
      <Whatsapp />
      <div className='container-catalog-all'>
        <main className='container-catalog-every'>
          <article className='container-products-catalog'>
            <section className='container-title-catalog'>
              <h1>{categoryName ? `Productos en la categoría ${categoryName}` : "Todos los productos"}</h1>
            </section>
            <div className="product-grid">
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <div key={product.idProductos} className="product-card" onClick={() => handleProductClick(product.idProductos)}>
                    <img src={product.imagen} alt={product.nombre} className="product-image" />
                    <div className="product-info">
                      <h2 className="product-name">{product.nombre}</h2>
                      <p className="product-price">${product.precio}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div>No se encontraron productos.</div>
              )}
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CatalogComponent;
