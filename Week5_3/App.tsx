import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomComponents from './CustomComponents';

function App() {
  return (
    <View style={styles.view}>
      <CustomComponents />
    </View>

  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    padding: 16,
  },
});

export default App;