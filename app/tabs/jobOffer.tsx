import { View, Text } from 'react-native'
import React from 'react'

import offerStyle from '../../external-functions/myStyles/offerStyle';

const jobOffer = () => {
  return (
    <View style={offerStyle.jobContainer}>
      <View>
        <Text style={{fontSize: 17, fontWeight: "500", letterSpacing: 3}}>plumber</Text>
        <Text>Maretsane</Text>
        <Text>25/04/2024</Text>
      </View>

      <View style={offerStyle.moneyTxt}>
        <Text style={{textShadowColor: 'black', fontSize: 18, fontWeight: "500",}}>R524</Text>
      </View>
    </View>
  )
}

export default jobOffer