import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Slider = ({ img1, img2, width, height, sliderHeight }) => {
  return (
    <div className="slider">
      <div>
        <img className="sliderImg" src={img1} alt="" width={width} height={height} />
        <div>
          <div className="sliderIcons">
            <AiFillCaretLeft />
            <AiFillCaretRight />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0.5 10" height={sliderHeight}>
            <path
              d="M 0 0 V 10 Z"
              stroke="#FFFFFF"
              stroke-width="1"
              fill="none"
            />
          </svg>
        </div>
        <img className="sliderImg" src={img2} alt="" width={width} height={height} />
      </div>
    </div>
  );
};

export default Slider;
