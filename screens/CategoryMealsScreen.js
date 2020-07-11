import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import DefaulText from "../component/DefaultText";
import MealList from "../component/MealList";

const CategoryMealScreen = ({ route, navigation, props }) => {
  const { categoryId } = route.params;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaulText>No meals found, maybe check your filters?</DefaulText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default CategoryMealScreen;
