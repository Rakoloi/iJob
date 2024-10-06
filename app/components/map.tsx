import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const MapComponent = () => {
  return (

      <MapView
         // remove if not using Google Maps
        style={{height: '100%', width: '100%'}}
        mapType = 'mutedStandard'
        region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
        >
            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
            />
      </MapView>

  )
}

export default MapComponent;

const styles = StyleSheet.create({})