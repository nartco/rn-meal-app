import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";


const FilterScreen = () => {
    return (
        <View style={styles.screen}>
            
        </View>
    )
}

FilterScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Filter Meals',
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FilterScreen 
