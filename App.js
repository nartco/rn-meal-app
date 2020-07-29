import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { appLoading, AppLoading } from "expo";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
 
import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/meals'
import { composeWithDevTools } from 'redux-devtools-extension'

enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer, composeWithDevTools())


export default function App() {
  
  const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
    })
  }
  
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }


  return (
   <Provider store={store}><MealsNavigator /></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
