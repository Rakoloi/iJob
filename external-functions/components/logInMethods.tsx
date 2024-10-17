import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const LogInMethods = () => {

    const Execute = (method: string) => {
        if(method === "google"){
            console.log("you pressed google")
        }
        else if(method === "facebook"){
            console.log("you pressed facebook");
        }
        else{
            console.log("you pressed apple")
        }
    }
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconWrap} onPress={() => Execute("google")}>
        <Ionicons name="logo-google" size={24} color="white"></Ionicons>
      </Pressable>

      <Pressable style={styles.iconWrap} onPress={() => Execute("facebook")}>
        <Ionicons name="logo-facebook" size={24} color="white"></Ionicons>
      </Pressable>

      <Pressable style={styles.iconWrap} onPress={() => Execute("apple")}>
        <Ionicons name="logo-apple" size={24} color="white"></Ionicons>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:"5%"
    },
    iconWrap: {
        backgroundColor: '#484848',
        width: "30%",
        alignItems: 'center',
        borderRadius: 5,
        padding: "4%"
    }
})

export default LogInMethods