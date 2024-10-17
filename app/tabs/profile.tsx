import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'

import profileStyle from '../../external-functions/myStyles/profileStyle';

const Profile = () => {

  const router = useRouter();
  const ExecuteEdit = (name: string, keyBoard: string) => {
    console.log(name)
    router.push({
      pathname: '/screens/detailUpdate',
      params: {name: name, keyBoard: keyBoard}
    })}
  

  return (
    <ScrollView>
    <View style={{ height: '100%'}}>
      <View style={profileStyle.container}>
        <Image style={profileStyle.profile} source={require('../../assets/images/mosa.jpg')} />
      </View>

      <View style={profileStyle.itemUnique}>
        <Text style={{fontSize: 17}}>Rakoloi Mosa</Text>
        <Pressable onPress={() => ExecuteEdit("Name", "default")}>
          <Ionicons name='pencil-outline' size={25} color='black'/>
        </Pressable>
      </View>

      <View style={profileStyle.item}>
        <Text style={{fontSize: 17}}>rakoloimosa@gmail.com</Text>
        <Pressable onPress={() => ExecuteEdit("email", "email-address")}>
          <Ionicons name='pencil-outline' size={25} color='black'/>
        </Pressable>
      </View>

      <View style={profileStyle.item}>
        <Text style={{fontSize: 17}}>0670274424</Text>
        <Pressable onPress={() => ExecuteEdit("contact", "numeric")}>
          <Ionicons name='pencil-outline' size={25} color='black'/>
        </Pressable>
      </View>

      <View style={profileStyle.item}>
        <Text style={{fontSize: 17}}>869 zone 1 Itsoseng</Text>
        <Pressable onPress={() => ExecuteEdit("location", "default")}>
          <Ionicons name='pencil-outline' size={25} color='black'/>
        </Pressable>
      </View>

      <View style={profileStyle.item}>
        <Text style={{fontSize: 17}}>Skills</Text>
        <Pressable onPress={() => ExecuteEdit("skills", "default")}>
          <Ionicons name='pencil-outline' size={25} color='black'/>
        </Pressable>
      </View>
    </View>

    </ScrollView>
  )
}

export default Profile