import { View, Text, StyleSheet, ImageBackground, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router';

// componets import
import Input from '../external-functions/components/input';
import CustomButton from '../external-functions/components/customButton';
import LogInMethods from '../external-functions/components/logInMethods';

// firebase imports
import { auth } from '@/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<string>('');//for empty fields
  const [userName, setUserName] = useState<string>('');
  const [userNameErr, setUserNameErr] = useState<string>('');//for empty fields
  const [password, setPassword] = useState<string>('');
  const [passwordErr, setPasswordErr] = useState<string>('');//for empty fields
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [confirmPassErr, setConfirmPassErr] = useState<string>('');//for empty fields
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [phoneNumErr, setPhoneNumErr] = useState<string>('');

  const router = useRouter();

  //on value changes:
  const onEmailChange = (text: string) => {
    setEmail(text);
    setEmailErr(""); // Clear email error when the user starts typing
  };

  const onUserName = (text: string) => {
    setUserName(text);
    setUserNameErr("");
  }

  const onPasswordChange = (text: string) => {
    setPassword(text);
    setPasswordErr("");
  }

  const onConfirmPassChange = (text: string) => {
    setConfirmPass(text);
    setConfirmPassErr("");
  }

  const onChangePhoneNumChange = (text: string) => {
    setPhoneNum(text);
    setPhoneNumErr("");
  }

  //Register Button:
  const onRegister = async () => {
    //check the passwods match
    if(password != confirmPass){
      setConfirmPassErr("password do not match")
    }
    else if(password == ""){
      setPasswordErr("password is required");
    }
    else if(confirmPass == ""){
      setConfirmPassErr("field is required");
    }
    else{
      try{
        await createUserWithEmailAndPassword(auth, email, password);
        router.push('/tabs');
      }
      catch(err){
        console.error(err);
      }
    }
  }

  return (
    <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.backImage}
    >
      <ScrollView style={styles.logInBox}>
        <Text style={styles.heading}>Register</Text>

            <Text style={styles.inputText}>user name</Text>
            {userNameErr ? <Text style={{color: "red"}}>{userNameErr}</Text> : null}
            <Input 
                placeholder="enter name or surname"
                value={userName}
                setValue={onUserName}
                error={userNameErr}
                secureTextEntry={false}
                typeOfKeyboard='default'
            />

            <Text style={styles.inputText}>Email</Text>
            {emailErr ? <Text style={{color: "red"}}>{emailErr}</Text> : null}
            <Input 
                placeholder="Email"
                value={email}
                setValue={onEmailChange}
                error={emailErr}
                secureTextEntry={false}
                typeOfKeyboard='email-address'
            />

            <Text style={styles.inputText}>phone number</Text>
            {phoneNumErr ? <Text style={{color: "red"}}>{phoneNumErr}</Text> : null}
            <Input 
                placeholder="phone number"
                value={phoneNum}
                setValue={onChangePhoneNumChange}
                error={phoneNumErr}
                secureTextEntry={false}
                typeOfKeyboard='numeric'
            />

            <Text style={styles.inputText}>password</Text>
            {passwordErr ? <Text style={{color: "red"}}>{passwordErr}</Text> : null}
            <Input 
                placeholder="password"
                value={password}
                setValue={onPasswordChange}
                error={passwordErr}
                secureTextEntry={true}
                typeOfKeyboard='default'
            />

            <Text style={styles.inputText}>confirm password</Text>
            {confirmPassErr ? <Text style={{color: "red"}}>{confirmPassErr}</Text> : null}
            <Input 
                placeholder="confirm password"
                value={confirmPass}
                setValue={onConfirmPassChange}
                error={confirmPassErr}
                secureTextEntry={true}
                typeOfKeyboard='default'
            />

            <CustomButton text="Sign Up" onPress={onRegister}  />
            <LogInMethods />

            <Text style={styles.bottomTextContainer}>already have an account? {' '}
              <Link style={styles.signUpLink} href="/login">Sign In</Link>
            </Text>
      </ScrollView>

    </ImageBackground>
  )
}

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
    marginTop: "15%"
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
  marginTop: "10%", // Pushes the text to the bottom
  alignItems: 'center', // Centers the text horizontally
  paddingBottom: 10, // Add some space from the bottom
  color: 'white',
  marginLeft: 'auto',
  marginRight: 'auto'
},
signUpLink: {
  color: '#0acf83',
  fontWeight: 'bold',
},
})

export default Register