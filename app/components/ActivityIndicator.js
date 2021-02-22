import React from 'react';
import LottieView from 'lottie-react-native';

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      style={{ width: 300, height: 300, alignSelf: 'center' }}
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
}

export default ActivityIndicator;