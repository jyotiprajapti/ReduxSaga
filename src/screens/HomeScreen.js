import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import { horizontalScale, moderateScale, verticalScale } from '../utilities/styles';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchUsers(1));
    setPage(1);
    setRefreshing(false);
  };

  const loadMore = () => {
    if (users.length >= page * 10) {
      setPage(page + 1);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProfileScreen', { user: item })}
      style={styles.button}
    >
      <Image  style = {styles.image}  source={{
          uri:  item.picture.large,
        }} />
      <View><Text style= {styles.text}>{`${item.name.first} ${item.name.last}`}</Text>
      <Text style= {styles.text} >{`Email: ${item.email}`}</Text>
      <Text style= {styles.text}>{`Country: ${item.location.country}`}</Text>
      <Text style= {styles.text}>{`Registration Date: ${new Date(item.registered.date).toDateString()}`}</Text></View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.login.uuid}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image:{
    height: horizontalScale(50),
    width: verticalScale(50),
    margin: moderateScale(10),
    alignSelf: 'center'
  },
  text:{
    fontSize: moderateScale(17), 
    color: 'maroon'
  },
  button:{ padding: 10, 
    backgroundColor: 'white',
    borderBottomWidth: 1,
     borderBottomColor: '#ccc',
      flexDirection:'row'}
})

export default HomeScreen;
