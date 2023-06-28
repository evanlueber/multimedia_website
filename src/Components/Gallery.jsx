import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Gallery = ({ images, boxstyle }) => {
  return (
    <div>
      <div style={boxstyle}>
        <Carousel useKeyboardArrows={true} showThumbs={false} showStatus={false}>
          {images.map((URL, index) => (
            <div className="slide">
              <img alt="sample_file" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
