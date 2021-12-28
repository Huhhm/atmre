import 'react-native-gesture-handler';
import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { combineReducers , createStore , applyMiddleware} from 'redux';
import loginReducer from './src/reducers/loginReducer';
import Navigation from './src/Navigator'
const rootReducer = combineReducers({ loginReducer });
const store = createStore(rootReducer);






const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
   
  );
};

export default App;
