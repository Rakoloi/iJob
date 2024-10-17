import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import jobHistory from '../../external-functions/myStyles/jobHistory'

const JobHistory = () => {
  const handlePress = () => {

  }
  return (
    <ScrollView>
      <Text style={jobHistory.jobText}>Pending</Text>

      <Pressable style={jobHistory.pendingJob} onPress={handlePress}>
      <View>
        <Text style={{fontWeight: "700", letterSpacing: 2}}>Mopping</Text>
        <Text>Itsoseng</Text>
      </View>

      <View>
        <Text style={{marginTop: 'auto', marginBottom: 'auto', }}>R300</Text>
      </View>
    </Pressable>

    <Text style={jobHistory.jobText}>Completed</Text>

    <Pressable style={jobHistory.completedJob} onPress={handlePress}>
      <View>
        <Text style={{fontWeight: "700", letterSpacing: 2}}>Nanny</Text>
        <Text>Bodibe</Text>
      </View>

      <View>
        <Text style={{marginTop: 'auto', marginBottom: 'auto', }}>R500</Text>
      </View>
    </Pressable>
    </ScrollView>
  )
}

export default JobHistory