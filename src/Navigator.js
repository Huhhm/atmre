
import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,DrawerItems } from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';


import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import HomeScreen from "./screens/Home";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


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

  
function Navigation({ navigation }) {
    return (
      <>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Screen1" component={MyStack} />
        </Drawer.Navigator>
      </>
    );
  }

  export default Navigation;