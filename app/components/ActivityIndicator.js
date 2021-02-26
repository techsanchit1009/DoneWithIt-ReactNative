import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const ActivityIndicator = ({ visible = false, source = require("../assets/animations/loader_main.json") }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        style={styles.loader}
        source={source}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: colors.white,
    zIndex: 1,
    opacity: 0.7,
  },
  loader: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});

export default ActivityIndicator;