import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EditProfile from './EditProfile';
import UsersReview from './UsersReview';
import AddCourse from './AddCourse';

const Tab = createMaterialTopTabNavigator();

const UserProfile = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: 2
        },
        // tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 15 },
        // tabBarItemStyle: { width: 170, },
        tabBarStyle: {
          height: 50,
          backgroundColor: '#4488c1',
        },
      }}
    >

      <Tab.Screen name="Edit Profile" component={EditProfile} />
      <Tab.Screen name="User Reviews" component={UsersReview} />
      <Tab.Screen name="Add Course" component={AddCourse} />
    </Tab.Navigator>
  )
}

export default UserProfile