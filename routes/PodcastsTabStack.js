import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import PlayerScreen from '../screens/Player';

const { Navigator, Screen } = createStackNavigator();

export default function PodcastsTabStack() {
  return (
    <Navigator>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="PlayerScreen" component={PlayerScreen} />
    </Navigator>
  );
}
