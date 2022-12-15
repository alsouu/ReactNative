import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Главная</Text>
    <Button title="UsersList" onPress={() => navigation.navigate('UsersList')} />
    <Button title="About" onPress={() => navigation.navigate('AboutApp')} />
  </View>
);

const UsersList = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Users List</Text>
    <Button title="Home" onPress={() => navigation.popToTop()} />
    <Button title="About" onPress={() => navigation.navigate('AboutApp')} />
    <Button title="User" onPress={() => navigation.navigate('UserProfile')} />
  </View>
);

const AboutApp = ({ navigation }) => (
  <View style={styles.container}>
    <Text>About</Text>
    <Button title="Home" onPress={() => navigation.goBack()} />
  </View>
);

const UserProfile = ({ navigation }) => (
  <View style={styles.container}>
    <Text>User Profile</Text>
    <Button title="Home" onPress={() => navigation.popToTop()} />
    <Button title="About" onPress={() => navigation.navigate('AboutApp')} />
    <Button title="UsersList" onPress={() => navigation.navigate('UsersList')} />
  </View>
);

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});