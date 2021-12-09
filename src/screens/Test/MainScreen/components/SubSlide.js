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

const SubSlide = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <Pressable style={{flex: 1}}>

      <View style={{flex: 1}}>
        
        <Image
          style={[styles.image]}
          source={{
            uri: post.image,
          }}
        />
              <View style={{ position: 'absolute', bottom: 100, left:30, backgroundColor: 'blue', padding: 2, borderRadius: 3 }}>

                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>4.8</Text>
              </View>
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
    flex: 1,
  },
});

export default SubSlide;
