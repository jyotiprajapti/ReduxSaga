
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListOfItems from '../screens/HomeScreen.js'
import ProfileScreen from '../screens/ProfileScreen.js'


const Stack = createNativeStackNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ListOfItems' component={ListOfItems} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />

     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;