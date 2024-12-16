import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../components/Login';
import Cards from '../components/Cards';
import Ionicicons from "react-native-vector-icons/Ionicons"
import StackNavigatorOne from './StackNavigatorOne';
import StackNavigatorTwo from './StackNavigatorTwo';
import Card from '../components/Card';
import { MaterialTopTabNavigatorOne, MaterialTopTabNavigatorTwo, MaterialTopTabNavigatorThree } from './MaterialTopTabNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'StackOne') {
                      iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'StackTwo') {
                      iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'StackThree') {
                      iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'blue',
                  tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='TopTabOne' component={MaterialTopTabNavigatorOne}
                // options={{headerShown: false}}
                options={{
                    tabBarIcon: () => {
                        return <Ionicicons name='home' size={30} />
                    },
                    headerShown: false
                }} 
            />
            <Tab.Screen name='TopTabTwo' component={MaterialTopTabNavigatorTwo}
                // options={{headerShown: false}}
                options={{
                    tabBarIcon: () => {
                        return <Ionicicons name='person' size={30} />
                    },
                    headerShown: false
                }} 
            />
            <Tab.Screen name='TopTabThree' component={MaterialTopTabNavigatorThree}
                // options={{headerShown: false}}
                options={{
                    tabBarIcon: () => {
                        return <Ionicicons name='person' size={30} />
                    },
                    headerShown: false
                }} 
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation