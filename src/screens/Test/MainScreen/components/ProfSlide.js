/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';

const Profslide = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <Pressable style={{ flex: 1,}}>
      <View style={{flex: 1, }}>
        <Image
          style={[styles.image]}
          source={{
            uri: post.image,
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 210,
    marginTop: 10,
    marginLeft: 12,
    borderRadius: 10,
    overlayColor: 'white',
    flex: 1
  },
});

export default Profslide;
