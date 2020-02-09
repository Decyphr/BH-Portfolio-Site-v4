import React from 'react';
import { Content, Section } from '../styles/containers';
import { theme } from '../styles/theme';


const AboutSection = () => {
  return (
    <Section bg={theme.colors.black} padding="100px 0">
      <Content>
        <div>About Myself.</div>
      </Content>
    </Section>
  );
};

export default AboutSection;
