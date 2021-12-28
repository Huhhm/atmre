import 'react-native-gesture-handler';
import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,DrawerItems } from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';

import { Provider } from 'react-redux';
import { combineReducers , createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import loginReducer from './src/reducers/loginReducer';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import HomeScreen from "./src/screens/Home";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const rootReducer = combineReducers({ loginReducer });
const store = createStore(rootReducer);

const MyStack = () => {
  return (
      
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Register"  component={RegisterScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    
  );
};

function CustomDrawerContent(props) {
  const width = windowWidth * 0.3;

  return (
    <DrawerContentScrollView {...props}>
      <View>
      <Text>I Stashed my code</Text>
          
      </View>
    </DrawerContentScrollView>
  );
}

function MyDrawer({ navigation }) {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Screen1" component={MyStack} />
      </Drawer.Navigator>
    </>
  );
}



const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </Provider>
   
  );
};

export default App;
