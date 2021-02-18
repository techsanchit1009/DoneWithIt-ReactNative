import { StatusBar as TopBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  TextInput, Text, Switch, Button, Image
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const Link = () => {
  const navigation = useNavigation();
  return (
  <Button title="Click" onPress={() => navigation.navigate('TweetDetails')}/>
  )
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet" onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}/>
    <Stack.Screen name="TweetDetails" component={TweetDetails}/>
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

