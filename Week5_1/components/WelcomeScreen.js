import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, useRoute  } from '@react-navigation/native';


function WelcomeScreen({navigation, route}) 
{
   
   route = useRoute();
   const name = route.params.name
   return
   (
      <View style={styles.container}>
      <ExpoStatusBar style='light' />

      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Hello, {name}!</Text>
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   text: {
      marginVertical: 16,
      fontSize: 24,
      marginLeft: 12,
  },
   error:{
      color: '#b22222',
      fontSize: 17,
      textAlign: 'center',

   }
   
});

export default WelcomeScreen;
