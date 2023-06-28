import React from "react";
import Navigation from "../Components/Navigation";
import ImageMagnifier from "../Components/ImageMagnifier";
import ImageCompareSlider from "../Components/Slider";
import Gallery from "../Components/Gallery";

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
              <ImageCompareSlider
                img1="/img/weissGruene_blaetter_edited.png"
                img2="/img/weissGruene_blaetter.jpg"
                size={{
                  height: "auto",
                  width: "450px",
                }}
                portrait={false}
              />
            </div>
            <div className="imageContainer">
              <ImageCompareSlider
                img1="/img/lange_stachelblaetter_edited.png"
                img2="/img/lange_stachelblaetter.jpg"
                size={{
                  height: "auto",
                  width: "450px",
                }}
                portrait={false}
              />
            </div>
          </div>
          <p className="explanation">
            Ziehen Sie den Slider nach links oder rechts
          </p>
        </div>
        <div className="pictureContainer">
          <h2>VERTICAL SLIDER</h2>
          <div className="images">
            <div className="imageContainer">
              <ImageCompareSlider
                img1="/img/runder_kaktus.jpg"
                img2="/img/runder_kaktus_edited.png"
                size={{
                  height: "auto",
                  width: "325px",
                }}
                portrait={true}
              />
            </div>
            <div className="imageContainer">
              <ImageCompareSlider
                img1="/img/aloevera_edited.png"
                img2="/img/aloevera.jpg"
                size={{
                  height: "auto",
                  width: "325px",
                }}
                portrait={true}
              />
            </div>
            <div className="imageContainer">
              <ImageCompareSlider
                img1="/img/lianenbaum.jpg"
                img2="/img/lianenbaum_edited.png"
                size={{
                  height: "auto",
                  width: "325px",
                }}
                portrait={true}
              />
            </div>
          </div>
          <p className="explanation">
            Ziehen Sie den Slider nach oben oder unten
          </p>
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
          <h2 className="ideaTitle">GALLERY</h2>
          <div className="images">
            <div className="imageContainer">
              <Gallery
                boxstyle={{
                  width: "325px",
                  margin: "auto",
                }}
                images={[
                  "/img/weisse_blume.jpg",
                  "/img/rote_blume.jpg",
                  "/img/orange_blumen.jpg",
                  "/img/knallrote_blume.jpg",
                ]}
              />
            </div>
            <div className="imageContainer">
              <Gallery
                boxstyle={{ width: "325px", margin: "auto" }}
                images={[
                  "/img/komischer_kaktus.jpg",
                  "/img/kaktus.jpg",
                  "img/palmenpflanze.jpg",
                  "/img/gross_blaetter.jpg",
                ]}
              />
            </div>
            <div className="imageContainer">
              <Gallery
                boxstyle={{ width: "325px", margin: "auto" }}
                images={[
                  "img/tannenbaum.jpg",
                  "img/pinke_baumblumen.jpg",
                  "/img/blaetterAmStamm.jpg",
                ]}
              />
            </div>
          </div>
          <p className="explanation">
            Schauen Sie sich die Galerie mit Hilfe der Pfeile auf den Slideshows
            oder der Pfeiltasten auf ihrer Tastatur an
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
