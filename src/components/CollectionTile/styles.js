import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

export const CollectionTileGrid = styled.div`
  height: 300px;
  max-height: 100vh;
  display: flex;
  position: relative;
  margin-bottom: 2px;
  > div {
    flex-grow: 1;
  }
`;


export const CollectionTileContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  color: white;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.55);
  text-align: center;
  > div {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  padding: 5px 10px;
  margin-bottom: 14px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 35px;
  font-weight: bold;
  border-radius: 10px;
  text-shadow: 2px 2px 2px rgba(252, 89, 16, 0.75);
  border: 1px solid #ff5910;
  /* background-color: #FF5910; */
  box-shadow: 1px 2px 12px 3px white;
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 10px;
  border-radius: 10px;
`;
