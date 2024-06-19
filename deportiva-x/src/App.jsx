import './App.css'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='Signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
