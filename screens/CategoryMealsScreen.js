import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { CATEGORIES, MEAL } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { FlatList } from "react-native-gesture-handler";

const CategoryMealScreen = ({ route, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayMeals = Meals.filter(
    (meal) => meal.categoryIds.indexof(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
