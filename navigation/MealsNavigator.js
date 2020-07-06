//import { createAppContainer } from "react-navigation/createAppContainer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../component/HeaderButton";
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
              Platform.OS === "android" ? Colors.primaryColor : "",
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
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: MEALS.find((meal) => meal.id === route.params.mealId)
            .title,
          headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  console.log("Mark as favorite!");
                }}
              />
            </HeaderButtons>
          ),
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
    </Stack.Navigator>
  );
}

const FavStack = createStackNavigator();
function FavNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          title: "Favorite",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: MEALS.find((meal) => meal.id === route.params.mealId)
            .title,
          headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  console.log("Mark as favorite!");
                }}
              />
            </HeaderButtons>
          ),
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Meals"
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarLabel: "Meals",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-restaurant" color={color} size={25} />
          ),
          tabBarColor: Colors.primaryColor,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavNavigator}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-star" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MealsFavTabNavigator;
