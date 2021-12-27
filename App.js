import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { combineReducers , createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import loginReducer from './src/reducers/loginReducer';

import LoginScreen from './src/screens/Login';
import HomeScreen from "./src/screens/Home";

const Stack = createNativeStackNavigator();

const rootReducer = combineReducers({ loginReducer });
const store = createStore(rootReducer);

const MyStack = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    
  );
};


const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </Provider>
   
  );
};

export default App;
