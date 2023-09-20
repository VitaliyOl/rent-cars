import styled from 'styled-components';

export const ItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  row-gap: 50px;
`;

export const Button = styled.button`
  width: 100%;

  color: rgb(52, 112, 255);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  padding: 0px 20px;
  border: none;
  background-color: transparent;
  margin: auto 0;

  &:hover,
  &:focus {
    color: rgb(11, 68, 205);
  }
`;
