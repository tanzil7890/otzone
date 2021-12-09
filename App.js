import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import Router from './src/navigation/Router';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);


const App: () => Node = () => {

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Router />
    </>
  );
};

export default App;
