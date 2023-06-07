import React from "react";
import Navigation from '../Components/Navigation';
import ImageMagnifier from "../Components/ImageMagnifier";

const Home = () => {
  return (
    <div className="homePage">
    <Navigation />
      <div className="pictureIdeas">
        <div className="titleWrapper">
            <div className="homeContainerBlur">
              <div className="titleContainer">
                <h1>
                  Willkommen auf der Multimedia Website des Botanischen Gartens der Universität Zürich
                </h1>
              </div>
            </div>
      </div>
        <div className="pictureContainer">
            <h2>Contrast slider</h2>
        </div>
        <div className="pictureContainer">
            <h2>Vanishing slider</h2>
        </div>
        <div className="pictureContainer">
            <h2>Image magnifier</h2>
            <ImageMagnifier
              width={"200px"}
              src="/img/weg.jpg"
            />
        </div>
        <div className="pictureContainer">
            <h2>Gallery</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
