import 'react-native-gesture-handler';
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

import styles from '../../external-functions/myStyles/tabStyle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomDrawerContent = (props: any) => {
  const router = useRouter();
  const {top, bottom} = useSafeAreaInsets();
  return(
  <View style={{flex: 1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={styles.profileHeader}>
      <View style={{padding: 20}}>
        <Image source={require('../../assets/images/mosa.jpg')} style={styles.profileImage} />
        <Text style={styles.profileName}>Rakoloi Mosa</Text>
      </View>

      <View style={styles.tabList}>
        <DrawerItemList {...props}/>        
      </View>

    </DrawerContentScrollView>

    <Pressable style={styles.logOutButton} onPress={() => router.replace('/')}>
      <Text style={{color: 'white'}}>Log Out</Text>
    </Pressable>

  </View>)
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer drawerContent={CustomDrawerContent} screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: '#0acf83',
        drawerActiveTintColor: '#e7e7e8',
        
        headerStyle: {backgroundColor: ''},
        drawerIcon: ({size, color}) => (<Ionicons name="home-outline" size={size} color={color} />)
      }}>
        <Drawer.Screen name='availableJobs' options={{
          drawerLabel: 'Available Jobs',
          headerTitle: '',         
          drawerIcon: ({size, color}) => (
            <Ionicons name='business-outline' size={size} color={color} />
          )
        }}/>

        <Drawer.Screen name='createJob' options={{
          drawerLabel: 'Create Job',
          headerTitle: '',   
          drawerIcon: ({size, color}) => (
            <Ionicons name='create-outline' size={size} color={color} />
          )
        }}/>

        <Drawer.Screen name='jobHistory' options={{
          drawerLabel: 'Jobs Created',
          headerTitle: '',   
          drawerIcon: ({size, color}) => (
            <Ionicons name='time-outline' size={size} color={color} />
          )
        }}/>

        <Drawer.Screen name='jobOffer' options={{
          drawerLabel: 'Job Offers',
          headerTitle: '',   
          drawerIcon: ({size, color}) => (
            <Ionicons name='briefcase-outline' size={size} color={color} />
          )
        }}/>

        <Drawer.Screen name='profile' options={{
          drawerLabel: 'Profile',
          headerTitle: '',   
          drawerIcon: ({size, color}) => (
            <Ionicons name='person-outline' size={size} color={color} />
          )
        }}/>
        

      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayout