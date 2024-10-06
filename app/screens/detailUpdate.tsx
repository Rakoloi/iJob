import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'

import Input from '../components/input'
import CustomButton from '../components/customButton'


const detailUpdate = () => {
    const {name, keyBoard} = useLocalSearchParams();
    console.log(name, keyBoard);

    const [userValue, setUserValue] = useState('');
    const [valueErr, setUserErr] = useState('');

    const onChangeValue = (text: string) => {
        setUserValue(text);
        setUserErr('');
    }

    const update = () => {
        router.back();
    }
  return (
    <View>
        <Text style={{alignSelf: 'center', fontSize: 17, marginTop: '10%', marginBottom: '10%', fontWeight: '600'}}>Update Details</Text>
        <View style={{width: '94%', marginLeft: 'auto', marginRight: 'auto'}}>
            <Text>{name}</Text>
            <Input 
                placeholder="enter value"
                value={userValue}
                setValue={onChangeValue}
                error={valueErr}
                secureTextEntry={false}
                typeOfKeyboard='default'
            />

            <CustomButton text='update' onPress={update} />
        </View>
    </View>
  )
}

export default detailUpdate