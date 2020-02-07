import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
  align-items: ${({ align }) => align || 'center'};
`;