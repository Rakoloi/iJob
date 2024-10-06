import { Alert, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '../components/customButton';
import ViewJobsStyle from '../myStyles/viewJob';
import MapComponent from '../components/map';
import { Ionicons } from '@expo/vector-icons';

const viewJob = () => {
    const { jobName, pay, location, userName, phone } = useLocalSearchParams();
    //console.log(jobName);
    const requestJob = () => {
        //Alert.alert("job requested");
        router.back();
    }
  return (
    <View>
      <View style={ViewJobsStyle.map}>
        <MapComponent />
      </View>

      <View style={ViewJobsStyle.jobDetails}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons style={{marginRight: 10}} name='code-working-outline' size={30} color='black'/>
          <Text style={{fontWeight: "700", letterSpacing: 2, fontSize: 18}}>{jobName}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <Ionicons style={{marginRight: 10}} name='cash-outline' size={30} color='black'/>
          <Text>R {pay}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <Ionicons style={{marginRight: 10}} name='location-outline' size={30} color='black'/>
          <Text>{location}</Text>
        </View>

        <CustomButton text="Request Job" onPress={requestJob} />
      </View>
    </View>
  )
}

export default viewJob