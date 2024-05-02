import React, {useState} from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Photos from "./Photos/Photos";
import Videos from "./Videos/Videos";


function Gallery() {
  return (
    <div>
      <Navbar />
      <Photos />
      <Videos />
      <Footer />
    </div>
  );
}

export default Gallery;
