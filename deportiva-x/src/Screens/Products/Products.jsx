import './Products.css';
import Discount from '../../components/Discount/Discount';
import NavBar from '../../components/NavBar/NavBar';
import Product from '../../components/Product/Product';
import { useParams } from 'react-router-dom';
import Whatsapp from '../../components/whatsapp/Whatsapp';

export default function Products() {
    const { idProductos } = useParams();

    return (
        <>
            <NavBar />
            <Discount />
            <Whatsapp />
            <Product productId={idProductos} />
        </>
    );
}
