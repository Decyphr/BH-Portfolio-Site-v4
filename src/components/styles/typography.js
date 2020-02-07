import styled from 'styled-components';

export const HeroText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header};
  font-weight: 800;
  font-size: 8rem;
  color: ${props => props.color || props.theme.colors.black};
  margin: 25px 0;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.paragraph};
  font-size: 1.8rem;
  color: ${props => props.color || props.theme.colors.black};
  line-height: 25px;
  opacity: 0.6;
`;