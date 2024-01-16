import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';


const ListItem = ({ item }) => {
  
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Description",{item})} >
      <View style={styles.view} >
        <Image source={{ uri: item.image }} style={{ width: 210, height: 210 }} />
        <Text style={styles.text} >Title : {item.title}</Text>
        <Text style={styles.text}> Descripttion: {item.description}</Text>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 3
  },
  text: {
    fontSize: 20
  }
})

export default ListItem;