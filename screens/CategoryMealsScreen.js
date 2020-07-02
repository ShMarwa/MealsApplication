import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = ({ route, navigation }) => {
  // const catId = props.navigation.getParam("categoryId");
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  CategoryMealScreen.navigationOptions = {
    title: "Marwa",
  };
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title} </Text>
      <Button
        title={"Go to Details"}
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
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

// {
//   //const { routeName } = navigation.state.routes[navigation.state.index];

//   // You can do whatever you like here to pick the title based on the route name

export default CategoryMealScreen;
