//import { createAppContainer } from "react-navigation/createAppContainer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../component/HeaderButton";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: { fontFamily: "open-sans" },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={(navData) => ({
          headerTitle: "Meals Categories",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName={route.params.isFav ? "ios-star" : "ios-star-outline"}
                onPress={route.params.toggleFav}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const FavStack = createStackNavigator();
function FavNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={(navData) => ({
          headerTitle: "Your Favorites",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: MEALS.find((meal) => meal.id === route.params.mealId)
            .title,
          headerRight: (navData) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName={route.params.isFav ? "ios-star" : "ios-star-outline"}
                onPress={route.params.toggleFav}
              />
            </HeaderButtons>
          ),
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
        labelStyle: { fontFamily: "open-sans" },
        tabBarColor: Colors.primaryColor,
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

const FilterStack = createStackNavigator();

function FilterNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={(navData, route) => ({
          headerTitle: "Your Favorites",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),

          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName="ios-save"
                onPress={
                  navData.route.params ? navData.route.params.save : null
                }
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
const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        itemStyle: { marginVertical: 10 },
        labelStyle: { fontFamily: "open-sans-bold" },
      }}
    >
      <Drawer.Screen name="Meals" component={MealsFavTabNavigator} />
      <Drawer.Screen name="Filter" component={FilterNavigator} />
    </Drawer.Navigator>
  );
}
export default MainNavigator;
