import styled from 'styled-components/native';

export const IssueComponent = styled.View`
  padding: 10px;
  margin: 10px;
  border-width: 1px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-size:18px;
  padding-top:5px;
  padding-bottom:5px;
`;

export const RowBetween = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`;

export const TagView = styled.View`
background-color: ${(props:any)=>props.color};
padding:7px;
border-radius:20px;
margin-right:5px;
`;


export const TagText = styled.Text`
color:white;
`;
