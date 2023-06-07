import React from "react";
import Navigation from '../Components/Navigation';

const Home = () => {
  return (
    <div className="homePage">
    <Navigation />
      <div className="pictureIdeas">
        <div className="titleWrapper">
            <div className="homeContainerBlur">
              <div className="titleContainer">
                <h1>
                  Willkommen in dem Botanischen Garten der Universität Zürich
                </h1>
              </div>
            </div>
      </div>
        <div className="pictureContainer"></div>
        <div className="pictureContainer"></div>
        <div className="pictureContainer"></div>
        <div className="pictureContainer"></div>
      </div>
    </div>
  );
};

export default Home;
