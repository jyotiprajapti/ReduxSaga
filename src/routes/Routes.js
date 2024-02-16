import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReduxScreen from '../screens/ReduxScreen';
import ReducerScreen from '../screens/ReducerScreen';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reducer" component={ReducerScreen} />
        <Stack.Screen name="Redux" component={ReduxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
