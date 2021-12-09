import React from 'react';
import {View, Text, Pressable} from 'react-native';

const ProfileScreen = () => {


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25}}>Account Setting</Text>
      <Pressable
        style={{backgroundColor: 'blue', borderRadius: 10, padding: 10, width: '100%'}}>
        <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>Sign Out</Text>
      </Pressable>
    </View>
  );
};
 
export default ProfileScreen;
