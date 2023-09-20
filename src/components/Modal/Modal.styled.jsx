import styled from 'styled-components';

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  & .icon {
    width: 24px;
    height: 24px;
    stroke: #121417;

    &:hover,
    &:focus {
      stroke: #3470ff;
    }
  }
`;
