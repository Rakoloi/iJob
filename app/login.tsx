import { View, Text, ImageBackground, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter,  } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

//firebase imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../config/firebase'

import Input from '../external-functions/components/input';
import CustomButton from '../external-functions/components/customButton';
import LogInMethods from '../external-functions/components/logInMethods';
import { useRoute } from '@react-navigation/native';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const Login = () => {
    const [userEmail, setUseremail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    //const auth = getAuth();

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
        if(userEmail == "" && userPassword == ""){
            setEmailError("email is required");
            setPasswordError("password is required");
        }
        else if(userEmail == ""){
            alert("email its empty");
            setEmailError("email is required");
        }
        else if(userPassword == ""){
            alert("password its empty");
            setPasswordError("password is required");
        }
        else{
            signInWithEmailAndPassword(auth, userEmail, userPassword)
                .then((userCredentials) => {
                    //const user = userCredentials.user;
                    router.push('/tabs');
                    console.log("welcome...");
                })
                .catch((error) => {
                    if(error.message.includes("auth/invalid-email")){
                        alert("invalid credentials");
                        setUseremail("");
                        setUserPassword("");                       
                    }
                    else{
                        console.log(error.message);
                    }
                })
            }
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
            {passwordError ? <Text style={{color: "red"}}>{passwordError}</Text> : null}
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