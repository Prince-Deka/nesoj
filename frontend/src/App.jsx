import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/profile'
import Landing from './components/Landing/Landing'
import About from './components/About'
import Activities from './components/Landing/Activities/Activities'
import News from './components/Landing/News/News'
import Gallery from './components/Landing/Gallery/Gallery'
import Posts from './components/Landing/Posts/Posts'
import State from './components/Landing/State/State'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/state" element={<State />} />
      </Routes>

    </BrowserRouter>


  )
}

export default App
