import React from 'react'

import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = props => {
    const favoriteMeal = MEALS.filter(MEAL => MEAL.id === 'm1' || MEAL.id === 'm2')
    return <MealList listData={favoriteMeal} navigation={props.navigation} />
}


export default FavoritesScreen
