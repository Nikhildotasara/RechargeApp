import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import { useTheme } from '../../utils/themeProvider';


import Logo from "../../assests/logo.svg";

const PasswordChangedUI = (props) => {
  const {theme} = useTheme();
  const getStyles = (theme)=>StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor:theme==='dark'?"#011f3c":"white",

    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color:theme==="dark"?"white":"black"
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

const styles = getStyles(theme);
  
    const {handleBackToLogin}=props;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
       
       <Logo/>
        <Text style={styles.title}>Password changed</Text>
        <Text style={styles.subtitle}>Your password has been changed successfully</Text>
        <TouchableOpacity style={styles.button} onPress={handleBackToLogin}>
          <Text style={styles.buttonText}>Back to login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default PasswordChangedUI;
