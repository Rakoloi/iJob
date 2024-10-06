import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Input from '../components/input';
import CustomButton from '../components/customButton';
import createJob from '../myStyles/createJob'
import locationInput from '../components/locationInput';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const CreateJob = () => {
  //for creating the accound:
  const [userName, setUserName] = useState('');
  const [userNameErr, setUserNameErr] = useState('');

  const API_Key = process.env.GOOGLE_MAPS_APIKEY;

  const [userEmail, setUserEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const [contactNum, setContactNum] = useState('');
  const [contactNumErr ,setContactNumErr] = useState('');

  const [pay, setPay] = useState('');
  const [payErr, setPayErr] = useState('');

  //update text changes and clear error messages: 
  const onUserNameChange = (text: string) => {
    setUserName(text);
    setUserNameErr('');
  }

  const onEmailChange = (text: string) => {
    setUserEmail(text);
    setEmailErr('');
  }

  const onContactNumChange = (text: string ) => {
    setContactNum(text);
    setContactNumErr('');
  }

  const onPayChange = (text: string) => {
    setPay(text);
    setPayErr('');
  }

  //onclick button function:
  const SumnitForm = () => {
    console.log("button clicked");
    if(userName == ''){
      setUserNameErr("enter name");
    }
  }

  return (
    <View style={createJob.container}>
      <Text style={createJob.header}>Create Job</Text>

      <ScrollView style={createJob.form}>
        <Text>Name</Text>
        {userNameErr ? (
          <Text style={{ color: "red" }}>{userNameErr}</Text>
        ) : null}
        <Input
          placeholder={!userNameErr ? "name" : userNameErr}
          value={userName}
          setValue={onUserNameChange}
          error={userNameErr}
          secureTextEntry={false}
          typeOfKeyboard="default"
        />

        <Text>Email</Text>
        {emailErr ? <Text style={{ color: "red" }}>{emailErr}</Text> : null}
        <Input
          placeholder={!emailErr ? "name" : emailErr}
          value={userEmail}
          setValue={onEmailChange}
          error={emailErr}
          secureTextEntry={false}
          typeOfKeyboard="email-address"
        />

        <Text>phone number</Text>
        {contactNumErr ? (
          <Text style={{ color: "red" }}>{contactNumErr}</Text>
        ) : null}
        <Input
          placeholder={!contactNumErr ? "name" : contactNumErr}
          value={contactNum}
          setValue={onContactNumChange}
          error={contactNumErr}
          secureTextEntry={false}
          typeOfKeyboard="numeric"
        />

        <Text>pay</Text>
        {payErr ? (
          <Text style={{ color: "red" }}>{payErr}</Text>
        ) : null}
        <Input
          placeholder={!payErr ? "name" : payErr}
          value={pay}
          setValue={onPayChange}
          error={payErr}
          secureTextEntry={false}
          typeOfKeyboard="numeric"
        />

        <Text>job Location</Text>
        {/* <GooglePlacesAutocomplete 
            placeholder='enter location'
            nearbyPlacesAPI = 'GooglePlacesSearch'

            onFail={error => console.error(error)}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              console.log("data is " + data, "details is " + details);
            }}
            debounce={200}
            styles={{
                container: {flex: 1},
                textInput: {fontSize: 18},
                
            }}
            query={{
                key: API_Key,
                //key: 'AIzaSyBE-SlDIBpwcpby4KPaRBlyNDpIpAGdcTY',
                language: 'en'
            }}
            listViewDisplayed = {true}
        /> */}
       

        <CustomButton text="post job" onPress={SumnitForm} />
      </ScrollView>
    </View>
  );
}

export default CreateJob