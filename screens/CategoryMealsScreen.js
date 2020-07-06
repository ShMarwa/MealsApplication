import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../component/MealList";

const CategoryMealScreen = ({ route, navigation, props }) => {
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default CategoryMealScreen;
