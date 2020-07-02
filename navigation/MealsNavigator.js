//import { createAppContainer } from "react-navigation/createAppContainer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "black",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "white",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
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
