import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

import * as Progress from 'react-native-progress';

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.primary} progress={progress} width={200} />
        ) : (
          <LottieView
            autoPlay
            // autoSize
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animation: {
    width: 500,
  }
});

export default UploadScreen;