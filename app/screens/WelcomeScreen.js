import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { useFonts } from 'expo-font';
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  const [loaded] = useFonts({
    'Lobster': require('../assets/fonts/Lobster-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/appLogo.png")} />
        <AppText style={styles.tagline}>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 130,
    height: 120,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.black,
    fontFamily: 'Lobster'
  },
});

export default WelcomeScreen;
