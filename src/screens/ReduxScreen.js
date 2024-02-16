import {View, Text, Button} from 'react-native';
import React from 'react';
import {addToCart, emptyCart, removeFromCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../components/Header';
import { productList } from '../redux/productAction';

const ReduxScreen = () => {
  const product = useSelector((state)=>state.productData)
  console.log(" product data ", product)
  const dispatch = useDispatch();
  const data = {
    product: 'mobile',
    price: 20000,
  };
  return (
    <View style={{gap: 5}} >
      <Header />
      <Button title="Add to cart" onPress={() => dispatch(addToCart(data))} />
      <Button title="Remove cart" onPress={() => dispatch(removeFromCart(data.product))} />
      <Button title="Empty cart" onPress={() => dispatch(emptyCart())} />
      <Button title='Product list' onPress={()=>productList()}/>
    </View>
  );
};

export default ReduxScreen;
