/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';

const welcomeName = 'Tanzil';

const header = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: 'blue',
        height: 220,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      }}>
      <View
        style={{
          padding: 25,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            width: '60%',
            flex: 1,
          }}>
          <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
            Hello, {welcomeName}
          </Text>
          <Text style={{color: '#fff', fontSize: 16, marginTop: 10}}>
            Let's start exploring the future.
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
            backgroundColor: '#fff399',
            width: '30%',
            height: '115%',
            borderRadius: 20,
          }}
        />
      </View>
      <TextInput
        style={{
          backgroundColor: '#e7e7e7',
          marginTop: 20,
          padding: 10,
          borderRadius: 10,
          margin: 20,
        }}
        placeholder="Search what you want to learn?"
      />
    </View>
  );
};

export default header;
