import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Topbar from '../../components/Topbar';
import ScreenArea from '../../components/ScreenArea';
import CoverArea from '../../components/CoverArea';
import PlayerArea from '../../components/PlayerArea';
import Background from '../../components/Background';
import ChevronIcon from '../../components/icons/Chevron';
import MoreVertIcon from '../../components/icons/MoreVert';

export default function PlayerScreen() {
  return (
    <Background>
      <Topbar>
        <Topbar.Left>
          <ChevronIcon />
        </Topbar.Left>

        <Topbar.Middle>
          <Topbar.Title>Tocando Nando Reis</Topbar.Title>
          <Topbar.SubTitle>Pra Você Guardei o Amor</Topbar.SubTitle>
        </Topbar.Middle>

        <Topbar.Right>
          <MoreVertIcon />
        </Topbar.Right>
      </Topbar>

      <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            source={{
              uri: 'https://placehold.it/750x750',
            }}
          />
        </CoverArea>
      </ScreenArea>
      <PlayerArea />
    </Background>
  );
}
