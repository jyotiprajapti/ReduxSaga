import {View, Text, Button} from 'react-native';
import React, {useReducer} from 'react';
import Routes from './src/routes/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store} ><Routes/></Provider>  
  );
};
export default App;
