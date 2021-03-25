import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const StyledBackgroundImage = styled(BackgroundImage)`
  border-radius: 10px;
  overflow: hidden;
`;

export const CollectionTileGrid = styled.div`
  height: 300px;
  max-height: 100vh;
  display: flex;
  position: relative;
  border-radius: 10px;
  margin-bottom: 12px;
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
  border-radius: 10px;
  box-shadow: 5px 6px 25px black;
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
  text-shadow: 2px 2px 2px rgba(252, 89, 16, 0.75);
  //if the sale prop is present different styling
  border: ${props => (props.sale ? '2px solid white' : '3px solid #002d72')};
  background: ${props => (props.sale ? 'red' : 'rgba(0, 0, 0, 0.3)')};
  box-shadow: ${props =>
    props.sale
      ? '1px 3px 8px 0.8px white'
      : '3px 3px 8px 0.5px rgba(252, 89, 16, 0.55)'};

  @media (max-width: 290px) {
    display: flex;
    font-size: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 10px;
  padding: 5px;
  background: ${props => (props.sale ? 'red' : 'rgba(0, 0, 0, 0.3)')};
  border: ${props => (props.sale ? '2px solid white' : 'none')};
  box-shadow: ${props => (props.sale ? '1px 3px 8px 0.8px white' : 'none')};
`;
