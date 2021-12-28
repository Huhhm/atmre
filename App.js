import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import loginReducer from './src/reducers/loginReducer';
import atmReducer from './src/reducers/atmReducer'
import Navigation from './src/Navigator';
import mySaga from './src/sagas/sagas';

const rootReducer = combineReducers({ loginReducer, atmReducer });

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);



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
