import React from 'react';
import { Navbar, Logo } from 'components';
import { Link } from 'gatsby';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        {/* <Link to="/">
            <Logo />
          </Link> */}
        <div>
          <h1>The Sharpest Collectibles</h1>
          <p>
            Your One Stop Shop For Trading Cards, Shoes, and Whatever Other
            Memorbelia Your Looking For
          </p>
        </div>
      </HeaderWrapper>
      <Navbar />
    </>
  );
};

export { Header };
