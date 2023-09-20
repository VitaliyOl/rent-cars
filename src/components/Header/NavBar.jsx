import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Container, NavWrap, Link } from './NavBar.styled';

function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Container
        style={{
          backgroundColor: scrolling
            ? 'rgba(52, 112, 255, 0.8)'
            : 'transparent',
        }}
      >
        <NavLink to="/">
          <img src={logo} alt="" width="100px" />
        </NavLink>

        <NavWrap>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </NavWrap>
      </Container>
    </>
  );
}

export default NavBar;
