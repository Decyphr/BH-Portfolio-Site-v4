import React from 'react';

import AnimateSVG, { slowScaleMove } from './AnimateSVG';

const CircleSVG = () => {
  return (
    <AnimateSVG animation={slowScaleMove} top="25px" left="25px">
      <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="62.5" cy="62.5" r="57.5" stroke="#2DC487" stroke-opacity="0.8" stroke-width="10" />
      </svg>
    </AnimateSVG>
  );
};

export default CircleSVG;
