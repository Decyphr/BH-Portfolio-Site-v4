import styled from 'styled-components';


export const Section = styled.div`
  width: 100%;
  background-color: ${({ bg }) => bg || 'transparent'};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
  align-items: ${({ align }) => align || 'center'};
`;