/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';
import Fontinas from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import events from '../../../assets/data/events';
import SlideImage from '../../screens/Test/MainScreen/components/slide';
import EventSlider from '../../components/EventSlider';

const HomeScreen = props => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar hidden />
      <View>
        {/* Header component has been called here */}
        <Header />

        <View style={{margin: 10}}>
          {/* <View style={{ flexDirection: 'row',  padding: 10 }}>
            <Text
              style={{
                fontSize: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 3,
                fontWeight: '700'
              }}>
              Events
            </Text>
            </View> */}
          <FlatList
            data={events}
            style={{marginTop: 5}}
            renderItem={({item}) => <EventSlider post={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - 60}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
