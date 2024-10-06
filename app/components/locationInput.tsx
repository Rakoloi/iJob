import React from 'react'
import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
//import { GOOGLE_MAPS_APIKEY } from '@env'

const locationInput = () => {
    const API_Key = process.env.GOOGLE_MAPS_APIKEY;
   
  return (
    <View>
        <GooglePlacesAutocomplete 
            placeholder='enter location'
            nearbyPlacesAPI = 'GooglePlacesSearch'
            debounce={400}
            onPress={(data, details = null) => {
                console.log("=== pressed ===")
                console.log(details);
                console.log(data)
            }}
            styles={{
                container: {flex: 1},
                textInput: 18,
            }}
            query={{
                // key: API_Key,
                language: 'en',
                key: 'AIzaSyBE-SlDIBpwcpby4KPaRBlyNDpIpAGdcTY'
            }}
        />
    </View>
  )
}

export default locationInput