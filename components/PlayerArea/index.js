import styled from 'styled-components';

const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
  color: white;
  font-size: 24px;
`;

PlayerArea.Author = styled.Text`
  color: #bbbbbb;
  font-size: 16px;
`;

export default PlayerArea;
