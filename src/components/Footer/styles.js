import styled from 'styled-components';
import { Link } from 'gatsby';

export const Navitem = styled(Link)`
  text-decoration: none;
  color: black;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: #ff5910;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #ff5910;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

export const FooterWrapper = styled.div`
  margin: 15px 23px;
  padding-bottom: 15px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 3px solid grey;
  padding-top: 15px;
  text-shadow: 0px 2px 5px grey;
  font-weight: bold;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 450px) {
    /* grid-template-columns: 1fr 40px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > div {
      padding: 10px;
    }
  }
`;
