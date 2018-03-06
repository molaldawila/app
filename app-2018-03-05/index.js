// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import DeviceList from './src/components/DeviceList';

const App = () => (
  <View>
    <Header headerText={'SMART HOME SYSTEM'} />
    <DeviceList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
