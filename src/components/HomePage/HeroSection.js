import React from 'react';

import Image from "../image";
import { FlexBox } from "../styles/containers";
import RectSVG from "../svgs/RectSVG";
import CircleSVG from "../svgs/CircleSVG";
import TriangleSVG from "../svgs/TriangleSVG";
import CrossSVG from "../svgs/CrossSVG";
import { HeroText, Paragraph } from "../styles/typography";
import { theme } from "../styles/theme";

const HeroSection = () => {
  return (
    <FlexBox>
      <div style={{ position: "relative", top: 0, left: 0 }}>
        <Image />
        <CircleSVG />
        <RectSVG />
        <CrossSVG />
        <TriangleSVG />
      </div>
      <div style={{ maxWidth: 400 }}>
        <HeroText>Design.</HeroText>
        <HeroText>Develop.</HeroText>
        <HeroText color={theme.colors.purple}>Enhance.</HeroText>
        <hr />
        <Paragraph>I design and build experiences that are simple, gorgeous, and impactful.</Paragraph>
      </div>
    </FlexBox>
  );
};

export default HeroSection;
