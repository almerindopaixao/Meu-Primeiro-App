import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>
        Hello, I am your home
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <RectButton>
              <Text>Podcast: 0:{item}</Text>
            </RectButton>
          );
        })}
      </Text>
    </View>
  );
}
