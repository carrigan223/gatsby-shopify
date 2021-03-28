import React from 'react';
import { Link } from 'gatsby';
import { NavContainer, NavLinks } from './styles';

const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <NavLinks to="/all-products">Shop</NavLinks>
      </div>
      <div>
        <NavLinks to="/">About</NavLinks>
      </div>
      <div>
        <NavLinks to="/">Contact</NavLinks>
      </div>
    </NavContainer>
  );
};

export { Navbar };
