import React from 'react';

import AnimateSVG, { rotate } from './AnimateSVG';

const TriangleSVG = () => {
  return (
    <AnimateSVG bottom="0" right="0">
      <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 125L125 75.0978L1.0862e-05 0L0 125Z" fill="#23B5D3" fill-opacity="0.8" />
      </svg>
    </AnimateSVG>
  );
};

export default TriangleSVG;
