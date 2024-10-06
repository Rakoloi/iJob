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
        
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={25} color="#484848" />
        </TouchableOpacity>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e7e8',
    width: '100%',
    borderColor: '#0acf83',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 8,
    marginVertical: 8,
    color: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    //height: "10%"
  },
  input: {
    flex: 1,
    fontSize: 15,
    color:"black",
  },
  showPasswordButton: {
    position: 'absolute',
    //top: 12,
    right: 10,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  
})

export default Input;