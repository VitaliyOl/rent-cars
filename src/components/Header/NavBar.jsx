import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

function NavBar() {
  return (
    <>
      <NavLink to="/">
        <img src={logo} alt="" width="100px" />
      </NavLink>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </>
  );
}

export default NavBar;
