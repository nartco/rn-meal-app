import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Button title="Go To Meal Detail"  onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen
