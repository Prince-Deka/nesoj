import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup/Register'
import Login from './components/Login/Login'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/register" element={<Signup/>}/>
        <Route path='/login' element={<Login />} />
          
      </Routes>

    </BrowserRouter>


  )
}

export default App
