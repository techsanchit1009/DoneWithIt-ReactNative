import React from "react";
import { Text } from "react-native";
import { useFonts } from 'expo-font';


import defaultStyles from "../config/styles";

function AppText({ children, style, ...otherProps }) {
  const [loaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Text
      style={[
        defaultStyles.text,
        style,
        !style.fontFamily && { fontFamily: "Roboto-Regular" },
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

export default AppText;
