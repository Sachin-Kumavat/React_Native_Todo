import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import Login from '../components/Login';
import Cards from '../components/Cards';
import Card from '../components/Card';
import Ionicicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

// const MaterialTopTabNavigation=()=>{
//     return (
//         <Tab.Navigator shifting={true}>
//             <Tab.Screen 
//                 name="Login"
//                 component={Login}
//                 options={{
//                     tabBarIcon: () => {
//                         return <Ionicicons name='home' size={20} />
//                     }
//                 }} 
//             />
//             <Tab.Screen 
//                 name="Cards"
//                 component={Cards}
//                 options={{
//                     tabBarIcon: () => {
//                         return <Ionicicons name='person' size={20} />
//                     }
//                 }}
//             />
//             <Tab.Screen 
//                 name="Card"
//                 component={Card}
//                 options={{
//                     tabBarIcon: () => {
//                         return <Ionicicons name='card' size={20} />
//                     }
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }
// export default MaterialTopTabNavigation;

export const MaterialTopTabNavigatorOne = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Cards" component={Cards} />
        </Tab.Navigator>
    );
};


export const MaterialTopTabNavigatorTwo = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Card" component={Card} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    );
};


export const MaterialTopTabNavigatorThree = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cards" component={Cards} />
            <Tab.Screen name="Card" component={Card} />
        </Tab.Navigator>
    );
};



