import styled from 'styled-components';

export const NavContainer = styled.div`
  height: 10vh;
  display: flex;
  background-color: black;
  position: fixed;
  padding-top: 10px;
  height: 10vh;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  bottom: 10px;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #ff5910;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  /* margin: 0 auto; */
  padding: 10px 5vw;
  z-index: 2;
  align-self: center;
  box-shadow: 0px 8px 12px grey;

  @media (max-width: 768px) {
    position: fixed;
    padding-top: 10px;
    height: 10vh;
    top: 0;
    left: 0;
    right: 0;
    align-items: center;
  }
`;

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Hamburger = styled.div`
  background-color: white;
  color: white;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: white;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;

export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 70%;
    height: 50%;
    border-bottom-right-radius: 33px;
    border-top-right-radius: 33px;

    border: 2px solid #ff5910;
    border-left: none;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: black;
    transition: all 0.4s ease-in;
    top: 18vh;
    bottom: 3vh;
    left: ${props => (props.open ? '-100%' : '0')};
  }
`;
