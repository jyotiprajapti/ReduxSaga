import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Routes from './src/routes/Routes'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <Provider store={store} ><Routes/></Provider>//created separate file for routes to maintain code better
  )
}

export default App