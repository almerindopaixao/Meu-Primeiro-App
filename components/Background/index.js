import React from 'react';
import t from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#464769', '#1B1A1F']}
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
      }}
    >
      {children}
    </LinearGradient>
  );
};

Background.propTypes = {
  children: t.node.isRequired,
};

export default Background;
