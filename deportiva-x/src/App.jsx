import './App.css'
import Login from './Screens/Login/Login'
import SignUp from './Screens/SignUp/SignUp'
import ForgotPass from './Screens/ForgotPassword/ForgotPass'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Screens/MainPage/MainPage'
import Orders from './Screens/Orders/Orders'
import Products from './Screens/Products/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Signup' element={<SignUp/>}/>
          <Route path='Forgotpass' element={<ForgotPass/>}/>
          <Route path='Orders' element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
