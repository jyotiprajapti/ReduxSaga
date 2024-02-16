import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const Header = () => {
    const result = useSelector((state)=>state.cartData);
    console.log("results ",result)
  return (
    <View style={{height: 40, width: 300, margin: 20}} >
      <Text style={{alignSelf: 'flex-end', fontSize: 20}} >{result.length}</Text>
      <Image
        style={{height: 30, width: 30, alignSelf: 'flex-end'}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})