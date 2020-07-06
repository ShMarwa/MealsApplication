import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Alert } from "react-native";

import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primartColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [islactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: islactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, islactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>AvalibleFilter</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />

      <FilterSwitch
        label="Lactose-Free"
        state={islactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />

      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />

      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: { fontFamily: "open-sans-bold", fontSize: 22, margin: 20 },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    width: "80%",
    marginVertical: 10,
  },
});

export default FiltersScreen;
