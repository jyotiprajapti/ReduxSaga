import {View, Text, Button} from 'react-native';
import React, {useReducer} from 'react';
import { useNavigation } from '@react-navigation/native';
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}
const reducer = (h, action) => {
  switch (action.type) {
    case 'increment':
      return {count: h.count + 1};
    case 'decrement':
      return {count: h.count - 1};
    default:
      return h.count;
  }
};
const ReducerScreen = () => {
    const navigation = useNavigation();
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const handleIncrement = () => {
    dispatch({type: ACTIONS.INCREMENT});
  };
  const handleDecrement = () => {
    dispatch({type: ACTIONS.DECREMENT});
  };
  return (
    <View style={{gap: 20}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{state.count}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
      <Button title='Go to next page' onPress={()=>navigation.navigate('Redux')} />
    </View>
  );
};

export default ReducerScreen;
