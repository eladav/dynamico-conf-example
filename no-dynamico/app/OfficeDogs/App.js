/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState} from 'react';
import {View, Button, TextInput, StyleSheet, AsyncStorage} from 'react-native';
import MainView from './components/MainView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
      return (
        <View style={styles.container}>
          <MainView />
        </View>);     
    }
}