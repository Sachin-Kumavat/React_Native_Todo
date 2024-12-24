import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigation from './src/navigation/AppNavigation';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor} > */}
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App;

