import React from "react";
import { useSelector } from 'react-redux'

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";


const FavoritesScreen = props => {

  const favMeals = useSelector(state => state.meals.favoriteMeals)

  
  return <MealList listData={favoriteMeal} navigation={props.navigation} />;
};

export default FavoritesScreen;

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites!',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
