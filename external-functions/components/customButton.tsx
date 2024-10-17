import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react'

//handle types
interface Props{
    onPress: () => void;
    text: string;
    type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
    bgColor?: string;
    fgColor?: string;
}

const CustomButton: React.FC<Props> = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}` as keyof typeof styles],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
  
      padding: 15,
      marginVertical: "10%",
  
      alignItems: 'center',
      borderRadius: 10,
    },
  
    container_PRIMARY: {
      backgroundColor: '#0acf83',
    },
  
    container_SECONDARY: {
      borderColor: '#4D8D6E',
      borderWidth: 2,
    },
  
    container_TERTIARY: {},
  
    text: {
      fontWeight: 'bold',
      color: 'white',
    },
  
    text_SECONDARY: {
      color: '#3B71F3',
    },
  
    text_TERTIARY: {
      color: 'gray',
    },
  });

export default CustomButton
