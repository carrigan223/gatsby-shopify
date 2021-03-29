import React, { useState } from 'react';
import { Cart, Navlinks } from '../../components/';
import { NavContainer, Navbox, Toggle, Hamburger } from './styles';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <NavContainer>
      <div>
        <Cart />
      </div>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <Navlinks />
        </Navbox>
      ) : (
        <Navbox open>
          <Navlinks />
        </Navbox>
      )}
    </NavContainer>
  );
};

export { Navbar };
