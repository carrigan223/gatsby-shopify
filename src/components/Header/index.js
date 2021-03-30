import React from 'react';
import { Navbar } from 'components';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        {/* <Link to="/">
          <Logo />
        </Link> */}
        <Navbar />
      </HeaderWrapper>
    </div>
  );
};

export { Header };
