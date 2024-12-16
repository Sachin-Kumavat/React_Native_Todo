import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import Card from '../components/Card';
import BottomTabNavigation from './BottomTabNavigation';
import Cards from '../components/Cards';

const Stack = createNativeStackNavigator();

const StackNavigatorOne = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={BottomTabNavigation} options={{ title: 'Login Screen' }} />
      <Stack.Screen name="Cards" component={Cards} options={{ title: 'Card Screen' }} />
    </Stack.Navigator>
  );
};

export default StackNavigatorOne;
