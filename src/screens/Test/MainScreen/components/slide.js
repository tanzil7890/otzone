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

const slide = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <Pressable>
      <View>
        <Image
          style={[styles.image, {width: width - 60}]}
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
    height: 180,
    width: '100%',
    resizeMode: 'cover',
    marginLeft: 10,
    borderRadius: 10,
  },
});

export default slide;
