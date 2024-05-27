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

import Eye from "../../assests/eye.svg"
import Back from "../../assests/backButton.svg";


const ResetPasswordUI = (props) => {

    const {handleResetPassword}=props;
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

 

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
            placeholder="Enter password"
            secureTextEntry={secureTextEntry}
            onChangeText={setNewPassword}
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
            placeholder="Confirm new password"
            secureTextEntry={secureTextEntry}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.icon}>
           <Eye/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.login}>
          <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Log in</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    padding: 16,
    // borderWidth:1,
    flex:1,
    justifyContent:"space-around"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
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
  },
  icon: {
    padding: 8,
  },
  hint: {
    color: '#666',
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
    color: '#666',
  },
  loginLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default ResetPasswordUI;
