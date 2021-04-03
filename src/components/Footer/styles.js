import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaRegEnvelope } from 'react-icons/fa';
import { GiPhone } from 'react-icons/gi';

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
    content: '';
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
  flex: 1;
  flex-direction: column;

  border-top: 3px solid grey;
  padding-top: 15px;
  text-shadow: 0px 2px 5px grey;
  font-weight: bold;

  > div:last-child {
    > p {
      color: grey;
      font-weight: normal;
    }
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

export const RowWrapperTop = styled.div`
  display: flex;
  justify-content: space-evenly;

  > div {
    text-align: center;
    flex-grow: 1;
    > p {
      color: grey;
      font-weight: normal;
    }
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

export const Terms = styled.div`
  font-size: 0.25rem;
  color: grey;
  color: #002d72;

  :hover {
    color: #ff5910;
  }
`;

export const RowWrapperBottom = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-evenly;
  align-items: center;

  > div {
    font-size: 0.25rem;
    color: grey;

    > a {
      color: #002d72;
    }
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

export const FooterTitle = styled.text`
  color: black;
`;

export const PhoneIcon = styled(GiPhone)`
  margin: 0.5rem;
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
`;

export const MailIcon = styled(FaRegEnvelope)`
  margin: 0.5rem;
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
`;

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;

  > div {
    background: #002d72;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 5px;
    margin-top: 10px;
    border-radius: 8px;
    color: white;
  }
`;

export const FooterP = styled.div`
  margin-top: 5px;
  font-size: 0.85rem;
  color: grey;
  font-weight: normal;
`;
