import './App.css';
import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp';
import ForgotPass from './Screens/ForgotPassword/ForgotPass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Screens/MainPage/MainPage';
import Orders from './Screens/Orders/Orders';
import Products from './Screens/Products/Products';
import ProtectedRoute from './ProtectedRoute.jsx';
import ShoppingCart from './Screens/ShoppingCart/ShoppingCart.jsx';
import DetailsOrder from './Screens/DetailsOrders/DetailsOrder.jsx';
import ResetPassword from './Screens/ResetPassword/ResetPassword'; // Asegúrate de que la ruta es correcta


import { useEffect } from 'react';
import CatalogComponent from './components/CatalogComponent/CatalogComponent';
import CollageCatalog from './components/CollageCatalog/CollageCatalog';

import product from './components/Product/Product';

// productos para el catálogo
const products = [
  {
    id: 1,
    name: 'Tenis Adidas Amplimove Trainer Red',
    price: 59.99,
    image: '../public/assets/Imagenes Productos PNG/Hombre/Calzado/Gimnasio y Entrenamiento/Tenis Adidas Amplimove Trainer Red.png',
    category: 'Calzado',
    title: 'Calzado'
  },
  {
    id: 2,
    name: 'Balón De Fútbol Adidas Ucl Club',
    price: 29.99,
    image: '../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Balones De Fútbol/Balón De Fútbol Adidas Ucl Club.png',
    category: 'Deportes',
    title: 'Deportes'
  },
  {
    id: 3,
    name: 'Jersey Adidas Tigres Uanl Tercero',
    price: 89.99,
    image: '../public/assets/Imagenes Productos PNG/Hombre/Ropa/Jerseys Equipos De Fútbol/Jersey Adidas Tigres Uanl Tercero.png',
    category: 'Jerseys',
    title: 'Jerseys'
  },
  {
    id: 4,
    name: 'Gorra New Era 9twenty Chivas',
    price: 60.99,
    image: '../public/assets/Imagenes Productos PNG/Hombre/Accesorios/Gorras/Gorra New Era 9twenty Chivas.png',
    category: 'Accesorios',
    title: 'Accesorios'
  },
  // Agrega más productos con las categorías correspondientes
];


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path='/product/:idProductos' element={<Products />} /> {/* Asegúrate de que esta ruta coincide */}
        <Route path='/ShoppingCart' element={<ShoppingCart />} />
        <Route path='/detailsOrder' element={<DetailsOrder />} />

        <Route path='/collage' element={<CollageCatalog />} />
        <Route path="/category/:categoryName" element={<CatalogComponent products={products} />} />
        <Route path='/reset-password' element={<ResetPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
