import styled from 'styled-components';

const Topbar = styled.View`
  flex-direction: row;
`;
Topbar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;

Topbar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;

Topbar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;
Topbar.Title = styled.Text`
  color: #ffffff;
  text-transform: uppercase;
`;

Topbar.SubTitle = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export default Topbar;
