import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
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

        <Text style={styles.longDescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Post;
