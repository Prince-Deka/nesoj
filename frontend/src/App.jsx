import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/profile'
import Landing from './components/Landing/Landing'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>

    </BrowserRouter>


  )
}

export default App
