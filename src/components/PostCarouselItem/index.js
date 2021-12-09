import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const Post = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />

        <View style={{marginHorizontal: 10, flex: 1}}>
          {/* Bed & Bedroom */}
          <Text style={styles.bedroom}>
            {post.bed} Bed {post.bedroom} Bedroom
          </Text>

          {/* Types & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}: {post.title}
          </Text>

          {/* Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice}</Text>
            <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
          </Text>

          {/* Total Price */}
          {/* <Text style={styles.totalPrice}>${post.totalPrice} Total</Text> */}
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
