import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';
import TodoScreen from './src/components/TodoScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View >
          <TodoScreen />
        </View>
      </SafeAreaView>
    </Provider>
  )
}

export default App