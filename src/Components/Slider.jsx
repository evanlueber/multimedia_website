import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Slider = ({ size, portrait, img1, img2 }) => {
  return (
    <div style={size}>
      <ReactCompareSlider portrait={portrait}
        itemOne={
          <ReactCompareSliderImage src={img1}/>
        }
        itemTwo={
          <ReactCompareSliderImage src={img2}/>
        }
      />
    </div>
  );
};

export default Slider;
