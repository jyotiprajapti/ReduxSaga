import React from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import RNFS from 'react-native-fs';
import { horizontalScale, moderateScale, verticalScale } from '../utilities/styles';

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const users = useSelector((state) => state.users);
  console.log("users ",users)

  const selectedUser = users.find((u) => u.login.uuid === user.login.uuid);

  const generatePDF = async () => {
    const pdfContent = `
      User Profile:
      Name: ${selectedUser.name.first} ${selectedUser.name.last}
      Email: ${selectedUser.email}
      Country: ${selectedUser.location.country}
      Registration Date: ${new Date(selectedUser.registered.date).toDateString()}
    `;

    const path = `${RNFS.DocumentDirectoryPath}/UserProfile.pdf`;

    try {
      await RNFS.writeFile(path, pdfContent, 'utf8');
      console.log('PDF file saved:', path);
    } catch (error) {
      console.error('Error saving PDF:', error);
    }
  };

  return (
    <View style={{ flex: 1 , backgroundColor: 'white'}}>
      <View>
        <ImageBackground style={styles.image} source={{
          uri:  selectedUser.picture.large,
        }}><Text style={styles.age} >{selectedUser.registered.age}</Text></ImageBackground>
      </View>
      <View style={styles.view}>
        <Text style={styles.text} >{`${selectedUser.name.first} ${selectedUser.name.last}`}</Text>
        <Text style={styles.text} >{`Email: ${selectedUser.email}`}</Text>
        <Text style={styles.text} >{`Email: ${selectedUser.email}`}</Text>
        <Text style={styles.text}>{`Country: ${selectedUser.location.country}`}</Text>
        <Text style={styles.text}>{`Registration Date: ${new Date(selectedUser.registered.date).toDateString()}`}</Text>

        <Button title="Download PDF" onPress={generatePDF} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image:{
    marginTop: horizontalScale(20),
    height: horizontalScale(150),
    width: verticalScale(150),
    alignSelf: 'center',
   
  },
  view:{
margin: moderateScale(20),

  },
  text:{
    fontSize: moderateScale(20),
    fontWeight: 'bold'
  },
  age:{
    height: horizontalScale(40),
    width: verticalScale(40),
    backgroundColor: 'pink',
    textAlign: 'center',
    textAlignVertical: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
   }
})

export default ProfileScreen;
