import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";


const CategoryMealScreen = props => {

    const renderMealItem = itemData => {
        return (<View><Text>{itemData.item.title}</Text></View>)
    }

  const catId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  
  return (
    <View style={styles.screen}>
      <FlatList data={displayMeals} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
      headerTitle: selectedCategory.title
  }
};

export default CategoryMealScreen;