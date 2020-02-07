import React from 'react';

import AnimateSVG, { rotate } from './AnimateSVG';

const RectSVG = () => {
  return (
    <AnimateSVG animation={rotate} top="50px" right="50px" behind>
      <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="85" height="85" fill="#F2FD78" fill-opacity="0.8" />
      </svg>
    </AnimateSVG>
  );
};

export default RectSVG;
