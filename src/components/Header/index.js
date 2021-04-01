import React from 'react';
import { Logo } from 'components';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div>
          <div>
            <Logo />
          </div>
          <div>
            <h3>Your One Stop Shop For Exceptional Quality Collectibles</h3>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export { Header };
