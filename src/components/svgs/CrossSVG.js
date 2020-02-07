import React from 'react';

import AnimateSVG, { rotate } from './AnimateSVG';

const CrossSVG = () => {
  return (
    <AnimateSVG bottom="50px" left="50px">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5375 1.46243C50.4874 3.41235 50.4874 6.57378 48.5375 8.52369L8.52369 48.5375C6.57378 50.4874 3.41235 50.4874 1.46243 48.5375C-0.487479 46.5876 -0.487477 43.4261 1.46243 41.4762L41.4762 1.46243C43.4261 -0.487478 46.5876 -0.487478 48.5375 1.46243Z" fill="#6247AA" fill-opacity="0.8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5376 48.5375C46.5877 50.4874 43.4262 50.4874 41.4763 48.5375L1.46252 8.52372C-0.487393 6.57381 -0.487394 3.41237 1.46252 1.46246C3.41243 -0.487452 6.57386 -0.487451 8.52377 1.46246L48.5376 41.4762C50.4875 43.4262 50.4875 46.5876 48.5376 48.5375Z" fill="#6247AA" fill-opacity="0.8" />
      </svg>
    </AnimateSVG>
  );
};

export default CrossSVG;
