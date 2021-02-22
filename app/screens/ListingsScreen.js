import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import listingsApi from '../api/listings';
import colors from "../config/colors";
import routes from '../navigation/routes';
import Button from '../components/AppButton';
import AppText from "../components/AppText";
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from "../hooks/useApi";


function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings);
  
  useEffect(() => {
    loadListings();
  }, []);


  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Unable to retrieve the listings</AppText>
        <Button title="Retry" onPress={loadListings} />
      </>}
      <ActivityIndicator visible={loading} />
      {!loading && (
        <FlatList
          data={listings}
          onRefresh={loadListings}
          refreshing={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={'₹' + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
