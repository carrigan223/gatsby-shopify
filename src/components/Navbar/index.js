import React, { useState } from 'react';
import { MiniLogo, Cart, Navlinks } from '../../components/';
import { Link } from 'gatsby';

import {
  NavContainer,
  Navbox,
  Toggle,
  Hamburger,
  NavboxToggle,
} from './styles';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <NavContainer>
      <div>
        <Link to="/">
          <MiniLogo />
        </Link>
      </div>
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
          <NavboxToggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </NavboxToggle>
          <Navlinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavboxToggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </NavboxToggle>
          <Navlinks />
        </Navbox>
      )}
    </NavContainer>
  );
};

export { Navbar };
