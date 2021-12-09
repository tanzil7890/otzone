import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import searchResult from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';
import {types} from 'joi';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input components */}

      

      <TextInput
        style={styles.textInput}
        placeholder="Where you want to go?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* Place of destination */}
      <FlatList
        data={searchResult}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guest')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
