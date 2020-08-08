import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PlayerScreen from '../screens/Player';

import HomeScreen from '../screens/Home';
import DiscoverScreen from '../screens/Discover';

const { Navigator, Screen } = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Navigator>
      <Screen name="Home Screen" component={HomeScreen} />
      <Screen name="Player Internal" component={DiscoverScreen} />
    </Navigator>
  );
}
