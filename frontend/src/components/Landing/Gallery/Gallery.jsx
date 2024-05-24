import React, {useEffect} from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Photos from "./Photos/Photos";
import Videos from "./Videos/Videos";
import { useLocation } from "react-router-dom";



function Gallery() {
  const location = useLocation()
  const gallery = location.state?.gallery || '';
  console.log(gallery);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      {gallery === 'photos' && <Photos />}
      {gallery === 'videos' && <Videos />}
      {(gallery === 'all' || gallery === '') && (
        <>
          <Photos />
          <Videos />
        </>
      )}
    </div>
  );
}

export default Gallery;
