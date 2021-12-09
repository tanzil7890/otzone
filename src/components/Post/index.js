import React from 'react';
import { View, ImageBackground, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Post = props => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goToPostPage}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />

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
        <Text style={styles.totalPrice}>${post.totalPrice} Total</Text>
      </Pressable>
    </View>
  );
};

export default Post;
