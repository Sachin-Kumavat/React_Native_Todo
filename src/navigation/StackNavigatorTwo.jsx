import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cards from '../components/Cards';
import TodoScreen from '../components/TodoScreen';

const Stack = createNativeStackNavigator();

const StackNavigatorTwo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cards" component={Cards} options={{ title: 'Cards Screen' }} />
      <Stack.Screen name="TodoScreen" component={TodoScreen} options={{ title: 'TodoScreen Screen' }} />
    </Stack.Navigator>
  );
};

export default StackNavigatorTwo;
