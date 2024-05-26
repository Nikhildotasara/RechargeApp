import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View, StyleSheet, Switch } from 'react-native';
import LogoSvg from "../../assests/logo.svg"; 
import CustomInput from '../../elements/CustomInput';
import CustomCTA from '../../elements/CustomCTA';


import { useTheme } from '../../utils/themeProvider';

function CreateAccountUI(props:any) {


    const {onNameChange,onEmailChange,onCreatePasswordChange,onConfirmPasswordChange,onTermsChange,handleContinue,handleLogin,onMobileNumberChange,isTermsAccepted}=props;

    const {theme,toogleTheme}=useTheme();

    const getStyles=(theme)=>StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme=="dark"?"black":"white",
      },
      scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 40, // Add padding to ensure the content is fully visible
      },
      logoContainer: {
        width: '99%',
        alignItems: 'center',
        minHeight: 80,
        maxHeight: 120,
      },
      formContainer: {
        width: '98%',
        paddingBottom: 20,
      },
      welcomeText: {
        fontSize: 35,
        fontWeight: '800',
        marginBottom: 20,
        paddingLeft:16,
        color:theme=="dark"?"white":"black"
      },
      inputHeading:{
        fontSize:20,
        fontWeight:"400",
        color:theme=="dark"?"white":"black"
      }
      ,
      inputContainer: {
        paddingLeft: 15,
        width: '100%',
      },
      inputWrapper: {
        marginBottom: 10, // Add space between each input field
      },
      termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      termsText: {
        marginLeft: 0,
        color:theme=="dark"?"white":"black"
      },
      ctaContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20, // Adjust padding to ensure it's visible on all devices
      },
      loginContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      loginText: {
        color: 'blue',
        marginLeft: 5,
      },
      alreadyAccountText:{
        color:theme=="dark"?"white":"black"
      }
    })

    const styles=getStyles(theme);


    
  

  return (
    <KeyboardAvoidingView style={[styles.container]} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <LogoSvg width="100%" height="90%" />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Hi, Welcome 👋</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputHeading}>Name</Text>
              <CustomInput onChange={onNameChange} />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputHeading}>Email Address</Text>
              <CustomInput onChange={onEmailChange} />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputHeading}>Mobile Number</Text>
              <CustomInput onChange={onMobileNumberChange} />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputHeading}>Create Password</Text>
              <CustomInput onChange={onCreatePasswordChange} secureTextEntry={true} />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputHeading}>Confirm Password</Text>
              <CustomInput onChange={onConfirmPasswordChange} secureTextEntry={true} />
            </View>

            <View style={styles.termsContainer}>
              <Switch
              value={isTermsAccepted}
                onValueChange={onTermsChange}
              />
              <Text style={styles.termsText}>I accept terms and policy</Text>
            </View>
          </View>
        </View>

        <View style={styles.ctaContainer}>
          <CustomCTA onPress={handleContinue} customText="Continue" />
          <View style={styles.loginContainer}>
            <Text style={styles.alreadyAccountText}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogin} >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'white',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingBottom: 40, // Add padding to ensure the content is fully visible
//   },
//   logoContainer: {
//     width: '99%',
//     alignItems: 'center',
//     minHeight: 80,
//     maxHeight: 120,
//   },
//   formContainer: {
//     width: '98%',
//     paddingBottom: 20,
//   },
//   welcomeText: {
//     fontSize: 35,
//     fontWeight: '800',
//     marginBottom: 20,
//     paddingLeft:16
//   },
//   inputHeading:{
//     fontSize:20,
//     color:"black",
//     fontWeight:"400"
//   }
//   ,
//   inputContainer: {
//     paddingLeft: 15,
//     width: '100%',
//   },
//   inputWrapper: {
//     marginBottom: 10, // Add space between each input field
//   },
//   termsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   termsText: {
//     marginLeft: 10,
//   },
//   ctaContainer: {
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 20, // Adjust padding to ensure it's visible on all devices
//   },
//   loginContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   loginText: {
//     color: 'blue',
//     marginLeft: 5,
//   },
// });

export default CreateAccountUI;
