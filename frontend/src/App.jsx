// App.jsx

import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/profile';
import About from './components/Landing/AboutUs/About';
import Activities from './components/Landing/Activities/Activities';
import News from './components/Landing/News/News';
import Gallery from './components/Landing/Gallery/Gallery';
import Posts from './components/Landing/Posts/Posts';
import State from './components/Landing/State/State';
import HomeMain from './components/Landing/Home/Home';
import NewsOpen from './components/Landing/News/NewsOpen/NewsOpen';
import Photos from './components/Landing/Gallery/Photos/Photos';
import Videos from './components/Landing/Gallery/Videos/Videos';
import Forumn from './components/Landing/Forumn/Forumn';
import NewDiscussion from './components/Landing/Forumn/NewDiscussion/NewDiscussion';
import OpenDiscussion from './components/Landing/Forumn/OpenDiscussion/OpenDiscussion';
import Reset from './components/Login/Reset/Reset';
import Error from './components/Error/Error';
import Logout from './components/Logout/Logout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homemain" element={<HomeMain />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsOpen />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/state" element={<State />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/forumn" element={<Forumn />} />
          <Route path="/newDiscussion" element={<NewDiscussion />} />
          <Route path="/discussions/:id" element={<OpenDiscussion />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="*" element={<Error />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
