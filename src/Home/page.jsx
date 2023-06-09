import React from "react";
import Navigation from "../Components/Navigation";
import ImageMagnifier from "../Components/ImageMagnifier";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div className="homePage">
      <Navigation />
      <div className="pictureIdeas">
        <div className="titleWrapper">
          <div className="homeContainerBlur">
            <div className="titleContainer">
              <h1>
                Willkommen auf der Multimedia Website des Botanischen Gartens
                der Universität Zürich
              </h1>
            </div>
          </div>
        </div>
        <div className="pictureContainer">
          <h2>HORIZONTAL SLIDER</h2>
          <div className="images">
            <div className="imageContainer">
              <Slider
                img1="/img/weissGruene_blaetter.jpg"
                img2="/img/weissGruene_blaetter_edited.png"
                width={""}
                height={"325px"}
                sliderHeight={"325px"}
              />
            </div>
          </div>
        </div>
        <div className="pictureContainer">
          <h2>VERTICAL SLIDER</h2>
        </div>
        <div className="pictureContainer">
          <h2 className="ideaTitle">IMAGE MAGNIFIER</h2>
          <div className="images">
            <div className="imageContainer">
              <ImageMagnifier width={"325px"} src="/img/weg.jpg" />
            </div>
            <div className="imageContainer">
              <ImageMagnifier width={"325px"} src="/img/glaskuppel.jpg" />
            </div>
            <div className="imageContainer">
              <ImageMagnifier
                width={"325px"}
                src="/img/glaskuppe_orangePflanze.jpg"
              />
            </div>
          </div>
          <p className="explanation">
            Bewegen Sie den Mauszeiger auf eines der Bilder
          </p>
        </div>
        <div className="pictureContainer">
          <h2>GALLERY</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
