import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

export default function App() {
  const [pressedCount, setPressedCount] = useState(0);
  return (
    <View style={
      { flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff2f1'}}
      >
    <Text style={{ margin: 16}}>
    {pressedCount > 0
    ? `The button was pressed ${pressedCount} times!`
    : 'The button isn\'t pressed yet'
    }
  </Text>
  <Button
  title="Press"
  onPress={() => setPressedCount((prevState) => prevState + 1)}
  disabled={pressedCount > 2}
  />
  {pressedCount >= 3 && 
    <Button
          title='Enable button'
          onPress={()=>setPressedCount(0)}
        />
  }
 </View>
 );
}