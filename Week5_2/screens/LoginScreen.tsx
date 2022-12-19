import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './RootStackPrams';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const userName = 'Alsouu';
const password = 'qwerty';

function LoginScreen() {
    const navigation = useNavigation<NavigationProp>();

    const [inputUserName, setInputUserName] = React.useState('');
    const [inputPassword, setInputPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const clearErrorMessage = () => {
        setErrorMessage('');
    }

    const isInputDataValid = () => {
        return inputUserName === userName && inputPassword === password;
    }

    const onSignInButtonPress = () => {
        if (isInputDataValid()) {
            clearErrorMessage();
            navigation.navigate('Welcome', { userName: inputUserName });
        }
        else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ExpoStatusBar style='light' />

            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.loginForm}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Sign in</Text>
                    </View>

                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        textContentType='username'
                        placeholderTextColor='#66686d'
                        onChangeText={text => { clearErrorMessage(); setInputUserName(text) }} />

                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        textContentType='password'
                        secureTextEntry={true}
                        placeholderTextColor='#66686d'
                        onChangeText={text => { clearErrorMessage(); setInputPassword(text) }} />
                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSignInButtonPress}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8c9f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    title: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    input: {
        color: '#ffffff',
        fontSize: 17,
        width: 250,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#ffffff',
        padding: 10,
        margin: 10,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    button: {
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#7e44bd",

    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        textAlign: 'center',
        textTransform: 'uppercase',
    },


    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    errorText: {
        color: '#b22222',
        fontSize: 17,
        textAlign: 'center',
    },
});