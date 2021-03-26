import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  height: 20px;
  width: 20px;
  border: 2px solid #002d72;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  background: white;
  box-shadow: 2px 2px 5px grey;
  margin: 0 5px 0 0;

  > div {
    line-height: 1;
    margin: auto;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
