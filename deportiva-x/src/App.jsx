import './App.css'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import ForgotPass from './components/ForgotPassword/ForgotPass'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Signup' element={<SignUp/>}/>
          <Route path='Forgotpass' element={<ForgotPass/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
