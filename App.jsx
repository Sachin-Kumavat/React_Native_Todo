import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';
// import TodoScreen from './src/components/TodoScreen';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
// import Images from './src/components/Image';
// import Card from './src/components/Card';
import Login from './src/components/Login';
import Cards from './src/components/Cards';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import StackNavigatorOne from './src/navigation/StackNavigatorOne';
import MaterialTopTabNavigation from './src/navigation/MaterialTopTabNavigation';
// import { NavigationContainer } from '@react-navigation/native';
// import Tabs from './src/navigation/Tabs';

import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import LoginPage from './src/screens/LoginPage';
import SignUp from './src/screens/SignUp';
import Student from './src/screens/Student';
import Course from './src/screens/Course';
import About from './src/screens/About';

const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     // <Provider store={store}>
//     // <SafeAreaView>
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //     <Stack.Screen name="BottomTabVaigator" component={BottomTabNavigation} 
//     //       options={{headerShown:false}}
//     //       // options={{
//     //       //   // headerTitle:()=><Text title="Left" />,
//     //       //   title:"User Login",
//     //       //   headerStyle:{
//     //       //     backgroundColor: "orange"
//     //       //   },
//     //       //   headerTitleStyle:{
//     //       //     fontSize: 24
//     //       //   },
//     //       //   headerTintColor: "red",
//     //       //   headerRight:()=><Button title='right' />
//     //       //   }}
//     //          />
//     //     {/* <Stack.Screen name='Cards' component={Cards} /> */}
//     //   </Stack.Navigator>
//     //   {/* <BottomTabNavigation /> */}

//     // </NavigationContainer>

//     <NavigationContainer>
//       <BottomTabNavigation />
//       {/* <StackNavigatorOne /> */}
//       {/* <MaterialTopTabNavigation /> */}
//     </NavigationContainer>

//     // </SafeAreaView>
//     // </Provider>
//   )
// }

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} ></PersistGate>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPage" >
          <Stack.Screen options={{ headerShown: false }} name="Home">
            {(props) => <Home {...props} centerName="Education App" />}
          </Stack.Screen>
          <Stack.Screen options={{
            headerStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center"

          }} name="Contact" component={Contact} />
          <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />
          <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
          <Stack.Screen options={{
            headerStyle: {
              fontSize: 25,
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center"

          }} name="Student" component={Student} />
          <Stack.Screen options={{
            // headerShown: false,
            headerStyle: {
              fontSize: 25,
            },
            headerTitle: "Courses",
            headerTitleAlign: "center"

          }} name="Course" component={Course} />
          <Stack.Screen options={{
            headerStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center"

          }} name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;

