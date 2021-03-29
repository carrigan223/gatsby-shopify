import React from 'react';
import { Navitem } from './styles';

const Navlinks = () => {
  return (
    <>
      <Navitem to="/">Home</Navitem>
      <Navitem to="/all-products">Shop</Navitem>
      <Navitem to="/">About</Navitem>
      <Navitem to="/">Contact</Navitem>
    </>
  );
};

export { Navlinks };
