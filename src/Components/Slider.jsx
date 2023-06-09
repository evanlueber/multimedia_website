import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

const Slider = ({ img1, img2 }) => {
  return (
    <div className="slider">
      <div className="imagesForSlider">
        <img src={img1} alt="" />
        <div>
          <div className="sliderIcons">
            <AiOutlineLeft />
            <AiOutlineRight />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0.5 10">
            <path
              d="M 0 0 V 10 Z"
              stroke="#FFFFFF"
              stroke-width="1"
              fill="none"
            />
          </svg>
        </div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Slider;