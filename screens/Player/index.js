import React, { useState } from 'react';
import Topbar from '../../components/Topbar';
import ScreenArea from '../../components/ScreenArea';
import CoverArea from '../../components/CoverArea';
import PlayerArea from '../../components/PlayerArea';
import Background from '../../components/Background';
import Controls from '../../components/Controls';
import ChevronIcon from '../../components/icons/Chevron';
import MoreVertIcon from '../../components/icons/MoreVert';
import PlayIcon from '../../components/icons/Play';
import AudioSlider from '../../components/AudioSlider';

export default function PlayerScreen() {
  const [segundos, setSegundos] = useState(0);

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
            resizeMode="contain"
            // eslint-disable-next-line global-require
            source={require('../../assets/nandoreiscapacdvozeviolao.png')}
          />
        </CoverArea>
        <PlayerArea>
          <PlayerArea.Title>Pra você guardei o amor</PlayerArea.Title>
          <PlayerArea.Author>Nando Reis</PlayerArea.Author>

          <Controls>
            <Controls.Slider>
              <AudioSlider
                thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#1DD65F"
                maximumTrackTintColor="#777777"
                minimumValue={0}
                maximumValue={100}
                value={segundos}
                onValueChange={(value) => setSegundos(value)}
              />
              <Controls.Slider.CurrentTime>
                0:{segundos}
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>52:07</Controls.Slider.TotalTime>
            </Controls.Slider>
            <Controls.Play>
              <PlayIcon style={{ width: 88, height: 88 }} />
            </Controls.Play>
          </Controls>
        </PlayerArea>
      </ScreenArea>
    </Background>
  );
}
