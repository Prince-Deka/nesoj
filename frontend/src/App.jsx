import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup/Register'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/register" element={<Signup/>}/>
          
      </Routes>

    </BrowserRouter>


  )
}

export default App
