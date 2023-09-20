import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(52, 112, 255, 0.8);
  z-index: 1000;
  transition: background-color 0.3s ease;
  padding: 0 200px;
`;

export const NavWrap = styled.div``;

export const Link = styled(NavLink)`
  padding: 14px 44px;

  border-radius: 12px;
  border-color: transparent;
  background: #3470ff;
  margin-right: 20px;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
