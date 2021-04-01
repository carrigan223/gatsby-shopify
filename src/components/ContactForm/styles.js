import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const NameLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-right: 5vw;
  font-family: 'Permanent Marker', 'Courier New', Courier, monospace;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 60vw;
    margin-right: 0;
    padding-bottom: 10px;
    font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
  }
`;

export const EmailLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-left: 5vw;
  font-family: 'Permanent Marker', 'Courier New', Courier, monospace;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 60vw;
    margin-left: 0;
    font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
  }
`;

export const SubjectLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 60vw;
  font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
`;

export const MessageLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 60vw;
  font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
`;

export const ClearFields = styled.input`
  outline: none;
  padding: 0px 12px;
  height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  color: black;
  border: 1px solid #ff5910;
  border-radius: 3px;
  white-space: nowrap;
  margin-top: 5px;
  box-shadow: none;

  &:hover:not(:disabled) {
    color: black;
    background-color: #ff5910;
    color: white;
    box-shadow: 3px 2px 8px 1px black;
  }
`;

export const TextInput = styled.input`
  border-radius: 8px;
  border: 1px solid grey;
  height: 2rem;
  box-shadow: 2px 2px 10px grey;

  :hover {
    box-shadow: 2px 2px 15px #002d72;
  }
`;

export const MessageInput = styled.textarea`
  border-radius: 8px;
  border: 1px solid grey;
  box-shadow: 2px 2px 10px grey;

  :hover {
    box-shadow: 2px 2px 15px #002d72;
  }
`;
