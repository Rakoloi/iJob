import { View, Text, FlatList, Alert, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { useRouter } from 'expo-router'

import availJobsStyle from '../../external-functions/myStyles/availJobsStyle'
// create a custom search input

//temporary code for the UI
const jobSample = [
  {id: 1, jobName: "painter", pay: 25, location: "Itsoseng", userName: "sello", phone: "0862654789"},
  {id: 2, jobName: "cleaner", pay: 525, location: "Bodibe", userName: "Thato", phone: "0256589875"},
  {id: 3, jobName: "plumber", pay: 820, location: "Itsoseng", userName: "Mane", phone: "0753691452"},
  {id: 4, jobName: "Nanny", pay: 150, location: "Itsoseng", userName: "Bino", phone: "0320456987"},
]

type JobItem = {
  jobName: string,
  pay: number,
  location: string,
  userName: string,
  phone: string
}

const AvailableJobs: React.FC<JobItem> = ({jobName, pay, location, userName, phone}) => {
  const navigation = useNavigation();
  const router = useRouter();
  
  const renderItem = ({item} : { item : JobItem }) => (
    <Pressable style={availJobsStyle.EachItem} onPress={() => handlePress(item)}>
      <View>
        <Text style={{fontWeight: "700", letterSpacing: 2}}>{item.jobName}</Text>
        <Text>{item.location}</Text>
      </View>

      <View>
        <Text style={availJobsStyle.payText}>R {item.pay}</Text>
      </View>
    </Pressable>
  )

  const handlePress = (item: JobItem) => {
    //console.log(item);
    //navigation.navigate('/screens/viewJob');
    router.push({
      pathname: '/screens/viewJob',
      params: item
    })
  }
  return (
    <View style={availJobsStyle.Container}>
      <FlatList 
        data={jobSample}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default AvailableJobs