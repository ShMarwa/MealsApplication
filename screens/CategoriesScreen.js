import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const renderGridItem = (itemData) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate("CategoryMeals");
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
