import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter,  } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import Input from './components/input';
import CustomButton from './components/customButton';
import LogInMethods from './components/logInMethods';
import { useRoute } from '@react-navigation/native';

const Login = () => {
    const [userEmail, setUseremail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');

    const [userPassword, setUserPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const onEmailChange = (text: string) => {
        setUseremail(text);
        setEmailError(""); // Clear email error when the user starts typing
      };

    const onPasswordChange = (text: string) => {
        setUserPassword(text);
        setPasswordError("");
    }
    const router = useRouter();
    //sign in button function:
    const onSignInPressed = () =>{
        console.log("user name is: " + userEmail);
        router.push('/tabs');
    }
    
  return (
    <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.backImage}
    >
        <ScrollView style={styles.logInBox}>
            <Text style={styles.heading}>Sign In</Text>

            <Text style={styles.inputText}>Email</Text>
            {emailError ? <Text style={{color: "red"}}>{emailError}</Text> : null}
            <Input 
                placeholder="Email"
                value={userEmail}
                setValue={onEmailChange}
                error={passwordError}
                secureTextEntry={false}
                typeOfKeyboard='email-address'
            />

            <Text style={styles.inputText}>Password</Text>
            <Input 
                placeholder="password"
                value={userPassword}
                setValue={onPasswordChange}
                error={passwordError}
                secureTextEntry={true}
                typeOfKeyboard='default'
            />

            <CustomButton text="Sign In" onPress={onSignInPressed}  />
            <LogInMethods />
            <Text style={styles.bottomTextContainer}>dont have account? {' '}
                <Link style={styles.signUpLink} href="/register">Sign Up</Link>
            </Text>
        </ScrollView>

        
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
    backImage: {
        flex: 1,
        resizeMode: 'cover',
        //alignItems:'center'
    },
    heading:{
        color: "#ffffff",
        fontSize: 25,
        fontWeight: 'bold',
        //alignItems:'center',
        marginBottom: "10%",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "30%"
    },
    logInBox:{
        flex: 1,
        //justifyContent:'center',
        //alignItems:'center',
        width: "94%",
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    inputText: {
        color: 'white',
        //textAlign: 'right'
        marginTop: "2%"
    },
    bottomTextContainer: {
        marginTop: '30%', // Pushes the text to the bottom
        alignItems: 'center', // Centers the text horizontally
        paddingBottom: 20, // Add some space from the bottom
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    signUpLink: {
        color: '#0acf83',
        fontWeight: 'bold',
    },
})

export default Login;