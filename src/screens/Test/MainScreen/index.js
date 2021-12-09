/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Dimension
} from 'react-native';
import styles from './style';
import feed from '../../../../assets/data/feed';
import courses from '../../../../assets/data/course'
import SlideImage from './components/slide';
import Header from './components/header';
import Profslide from './components/ProfSlide';
import SubSlide from './components/SubSlide'

const welcomeName = 'Tanzil';

const MainScreen = props => {
  const width = useWindowDimensions().width;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'white', }}
          >
      <View>
        {/* Header component has been called here */}
        <Header />

        <View style={{margin: 10}}>
          <FlatList
            data={feed}
            style={{marginTop: 5}}
            renderItem={({item}) => <SlideImage post={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - 60}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
          />
        </View>

        {/* Subscription courses */}
        <View style={{ margin: 10, marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 3,
              }}>
              Subscription Courses
            </Text>
            <View
              style={{ backgroundColor: 'blue', padding: 5, borderRadius: 5 }}>
              <Text style={{ color: 'white' }}>view all</Text>
            </View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <FlatList
              data={feed}
              style={{ marginTop: 10 }}
              renderItem={({ item }) => <SubSlide post={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={width - 60}
              snapToAlignment={'center'}
              decelerationRate={'fast'}
            />
          </View>
        </View>

        {/* Professional courses */}
        <View style={{ margin: 10, marginBottom: 10}}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 3,
              }}>
              Professional Courses
            </Text>
            <View
              style={{backgroundColor: 'blue', padding: 5, borderRadius: 5}}>
              <Text style={{color: 'white'}}>view all</Text>
            </View>
          </View>
          <View style={{marginBottom: 5}}>
            <FlatList
              data={feed}
              style={{marginTop: 10}}
              renderItem={({item}) => <Profslide post={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={width - 60}
              snapToAlignment={'center'}
              decelerationRate={'fast'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainScreen;
