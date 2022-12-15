import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function LoginForm({ navigation }) 
{
   const [name, setName] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
   const [errorLogin, setErrorLogin] = React.useState<string>("");
   const [errorPassword, setErrorPassword] = React.useState<string>("");

   const onSubmit = () => {
      if(!name && !password){
           setErrorLogin("Field Login is required!");
           setErrorPassword("Field Password is required!");
           return;
       }
       if (!name) {
           setErrorLogin("Field Login is required!");
           return;
       };
       if (!password) {
           setErrorPassword("Field Password is required!");
           return;
       };
       setIsSubmitting(true);
       navigation.navigate('Welcome', { name })
      };
      return (
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}
             accessible={false}>
             <View style={styles.view}>
                 <Text style={styles.text}>
                     Sign In
                 </Text>
                 <TextInput
                     style={styles.input}
                     onChangeText={text => setName(text)}
                     placeholder="Login"
                 />
                 {!name && <Text style={styles.error}> {errorLogin} </Text>}
                 <TextInput
                     style={styles.input}
                     onChangeText={text => setPass(text)}
                     secureTextEntry={true}
                     placeholder="Password"
                 />
                 {!pass && <Text style={styles.error}> {errorPassword} </Text>}
                 <Button title='Sign In' onPress={onSubmit} />
             </View>
         </TouchableWithoutFeedback >
     );
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
export default LoginScreen;

   



   
