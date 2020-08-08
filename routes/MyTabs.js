import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DiscoverScreen from '../screens/Discover';
import PodcastsTabStack from './PodcastsTabStack';

const { Navigator, Screen } = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Navigator>
      <Screen name="HomeScreen" component={PodcastsTabStack} />
      <Screen name="DiscoverScreen" component={DiscoverScreen} />
    </Navigator>
  );
}
