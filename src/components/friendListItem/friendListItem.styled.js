import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 11px;
  border: 1px solid;
  color: black;
  padding: 5px;
  width: 148px;
`;

export const StatusItem = styled.span`
  width: 5px;
  height: 5px;
  border: 1px solid black;
  border-radius: 50%;

  background-color: ${props => {
    switch (props.status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'yellow';
    }
  }};
`;
