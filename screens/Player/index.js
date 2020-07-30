import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import t from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';

import Topbar from './styled';
import ChevronIcon from '../../components/icons/Chevron';
import MoreVertIcon from '../../components/icons/MoreVert';

/*
const Background = styled.View`
  flex: 1;
  background-color: grey;
  padding-top: 20px;
`;
*/

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#464769', '#1B1A1F']}
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      {children}
    </LinearGradient>
  );
};

Background.propTypes = {
  children: t.node.isRequired,
};

export default function PlayerScreen() {
  return (
    <Background>
      <Topbar>
        <Topbar.Left>
          <ChevronIcon />
        </Topbar.Left>

        <Topbar.Middle>
          <Topbar.Title>Tocando Podcast</Topbar.Title>
          <Topbar.SubTitle>Hipsters Ponto Tech</Topbar.SubTitle>
        </Topbar.Middle>

        <Topbar.Right>
          <MoreVertIcon />
        </Topbar.Right>
      </Topbar>
    </Background>
  );
}

/*
export default function PlayerScreen() {
  return (
    <View style={styles.container}>
      <Text>Meu primeiro App React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
