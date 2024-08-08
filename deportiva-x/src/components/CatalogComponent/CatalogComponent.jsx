import './CatalogComponent.css';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Discount from '../Discount/Discount';
import Footer from '../Footer/Footer';
import Whatsapp from '../whatsapp/Whatsapp';

// eslint-disable-next-line react/prop-types
const CatalogComponent = ({ products }) => {
  const { categoryName } = useParams();
  const filteredProducts = categoryName
    // eslint-disable-next-line react/prop-types
    ? products.filter(product => product.category === categoryName)
    : products;
  return (
    <>
      <NavBar />
      <Discount />
      <Whatsapp />
      <body className='container-catalog-all'>
        <main className='container-catalog-every'>
          <article className='container-products-catalog'>
            <section className='container-title-catalog'>
              {filteredProducts.map((product) => (
                <h1 key={product.id}>{product.title}</h1>
              ))}
            </section>
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </main>
      </body>
      <Footer />
    </>

  );
};

export default CatalogComponent;

