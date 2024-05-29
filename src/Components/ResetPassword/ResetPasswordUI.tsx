import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { useTheme } from '../../utils/themeProvider';

import { useNavigation } from '@react-navigation/native';

import Eye from "../../assests/eye.svg"
import Back from "../../assests/backButton.svg";


const ResetPasswordUI = (props) => {


  const navigation=useNavigation();

  const {onPasswordChange,onConfirmPasswordChange}=props;

    const {handleResetPassword}=props;
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const {theme} = useTheme();
  const getStyles = (theme)=>StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      backgroundColor:theme==='dark'?"#011f3c":"white"
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      color:"black"
    },
    content: {
      padding: 16,
      // borderWidth:1,
      flex:1,
      justifyContent:"space-around",
      // color:"black"
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 8,
      color:theme==='dark'?"white":"black",
    },
    subtitle: {
      fontSize: 16,
      color:theme==='dark'?"white":"black",
      marginBottom: 24,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 8,
      paddingHorizontal: 8,
      
    },
    input: {
      flex: 1,
      height: 48,
      // color:theme==='dark'?"white":"black",
    },
    icon: {
      padding: 8,
    },
    hint: {
      // color: '#666',\
      color:theme==='dark'?"white":"black",
      marginBottom: 24,
    },
    button: {
      backgroundColor: '#007bff',
      borderRadius: 8,
      paddingVertical: 12,
      alignItems: 'center',
      marginBottom: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    login: {
      alignItems: 'center',
    },
    loginText: {
      // color: '#666',
      color:theme==='dark'?"white":"black",
    },
    loginLink: {
      color: '#007bff',
      fontWeight: 'bold',
    },
  })

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back height={30} width={30} />

        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Reset password</Text>
        <Text style={styles.subtitle}>Please type something you'll remember</Text>



        <View style={{borderWidth:0,borderColor:"red"}}>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={theme==='dark'?"white":"black"}
            placeholder="Enter password"
            secureTextEntry={secureTextEntry}
            onChangeText={(text)=>{onPasswordChange(text)}}

          />
          <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.icon}>
           <Eye/>
          </TouchableOpacity>
        </View>

        <Text style={styles.hint}>must be 8 characters</Text>

        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={theme==='dark'?"white":"black"}
            placeholder="Confirm new password"
            secureTextEntry={secureTextEntry}
            // onChangeText={setConfirmPassword}
            onChangeText={(text)=>{onConfirmPasswordChange(text)}}
          />
          <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.icon}>
           <Eye/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.login}>
          <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Log in</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default ResetPasswordUI;
