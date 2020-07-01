//import { createAppContainer } from "react-navigation/createAppContainer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

// const MealsNavigator = createStackNavigator({
//   Categories: CategoriesScreen,
//   CategoryMeals: {
//     screen: CategoryMealsScreen,
//   },
//   MealDetail: MealDetailScreen,
// });

export default MealsNavigator;
