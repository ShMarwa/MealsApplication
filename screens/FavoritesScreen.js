import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Button, StyleSheet } from "react-native";

import MealList from "../component/MealList";
import { MEALS } from "../data/dummy-data";
import DefaultText from "../component/DefaultText";

const FavoritesScreen = ({ route, navigation, props }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
