import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardTypeOptions } from 'react-native'
import {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

//Create interface for the component props
export type Props = {
  value: string;
  setValue?: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
  error: string;
  // onChange: (text: string) => void;
  typeOfKeyboard: KeyboardTypeOptions;
}

const Input: React.FC<Props>= ({ value, setValue, placeholder, secureTextEntry, error, typeOfKeyboard }) => {

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };
  console.log(placeholder+ ": placeholder")

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry && !showPassword}
        autoCapitalize="none"
        keyboardType={typeOfKeyboard}
        selectionColor="#0acf83"
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={30} color="#484848" />
        </TouchableOpacity>
      )}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e7e8',
    borderRadius: 8,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#0acf83',
    color: 'black',
    padding: 8,
    borderRadius: 8,
  },
  showPasswordButton: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 30,
    height: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  
})

export default Input;