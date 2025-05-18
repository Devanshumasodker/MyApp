import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/dashboard/Search'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />

   </Tab.Navigator>
  )
}

export default BottomNavigation