import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DrawerNav from './navigation/DrawerNav'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <DrawerNav />
    )
  }
}