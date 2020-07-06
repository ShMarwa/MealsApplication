import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import DefaulText from "../component/DefaultText";

import { MEALS } from "../data/dummy-data";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaulText>{props.children}</DefaulText>
    </View>
  );
};

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaulText>{selectedMeal.duration}m</DefaulText>
        <DefaulText>{selectedMeal.complexity.toUpperCase()}</DefaulText>
        <DefaulText>{selectedMeal.affordability.toUpperCase()}</DefaulText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}> {ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}> {step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontFamily: "open-sans-bold", fontSize: 22, textAlign: "center" },
  image: { width: "100%", height: 200 },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  listItem: {
    margin: 10,
    marginHorizontal: 10,
    borderColor: "#ccc",
  },
});

export default MealDetailScreen;
