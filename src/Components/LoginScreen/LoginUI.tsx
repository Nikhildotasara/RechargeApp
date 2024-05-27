import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import LogoSvg from "../../assests/logo.svg"
import CustomInput from '../../elements/CustomInput';
import CustomCTA from '../../elements/CustomCTA';

import BouncyCheckbox from "react-native-bouncy-checkbox";



// importing theme provider
import { useTheme } from '../../utils/themeProvider.tsx';


function LoginUI(props:any) {

    const {onPress,onEmailChange,onPasswordChange,handleForgotPassword,handleCreateAccount,handleSignIn,}=props;


    const {theme,toogleTheme}=useTheme();


    const getStyles=(theme)=>StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme === 'dark' ? 'black' : '#F7F7F7',
      },
      scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      logoContainer: {
        width: '99%',
        alignItems: 'center',
        minHeight: 100,
        maxHeight: 110,
        // borderWidth:1
        // borderWidth:1
      },
      formContainer: {
        width: '98%',
        minHeight: 450,
        paddingBottom: 20,
        // borderWidth:1,
        justifyContent:"space-around",
        // borderWidth:1
      },
      welcomeText: {
        fontSize: 35,
        color: theme === 'dark' ? 'white' : 'black',
        fontWeight: '800',
        marginBottom: 20,
        paddingLeft:20
      },
      inputContainer: {
        paddingLeft: 15,
        justifyContent: 'space-between',
        width: '100%',
        flex:1,
        alignItems:"center",
        // backgroundColor:"red"
      },
    
      inputContainerHeading:{
        fontSize:18,
        alignSelf:"flex-start",
        // paddingLeft:,
        paddingBottom:10,
        color: theme === 'dark' ? 'white' : 'black',

      },
      rememberForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '98%',
        marginTop: 10,
        
      },

      rememberMeText:{
        color:theme=="dark"?"white":"black",
        
        
      },

      forgotText: {
        color: '#0466C8',
        paddingRight:12

      },
      ctaContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        minHeight: 200,
        maxWidth:500,
        // borderWidth:1,
        // backgroundColor:"yellow"
      },
      createAccountContainer: {
        // flexDirection: 'row',
        alignItems:"center",
        marginTop: 20,
        // backgroundColor:"red"
      },
      createAccountText: {
        color: '#0466C8',
        marginLeft: 5,
      },

      doNotHaveAccountText:{
        color:theme=="dark"?"white":"black"
      }
    })


    const styles=getStyles(theme);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <LogoSvg width="100%" height="90%" />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Hi, Welcome 👋</Text>

          <View style={styles.inputContainer}>

            <View style={{width:"100%"}}>
            <Text style={styles.inputContainerHeading}>Email Address</Text>
            <CustomInput placeHolder="Enter your email" theme={theme} onChange={onEmailChange} />
            </View>

            <View style={{width:"100%"}}>
            <Text style={styles.inputContainerHeading}>Password</Text>
            <CustomInput placeHolder="Enter your password" secure={true} theme={theme} onChange={onPasswordChange} />
            </View>


            <View style={styles.rememberForgotContainer}>


              <View style={{flexDirection:"row",alignItems:"center"}}>

            <BouncyCheckbox

            style={{paddingRight:10}}
  size={25}
  fillColor="black"
  unFillColor="#FFFFFF"
  textStyle={{
    color: "black", 
    fontWeight: "bold" 
  }}
  disableText
  iconStyle={{ borderColor: "black" }}
  innerIconStyle={{ borderWidth: 2 }}
  onPress={(isChecked: boolean) => {
    console.log(isChecked);
  }}
/>



              <Text style={styles.rememberMeText}>Remember Me</Text>
              </View>


              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

          <CustomCTA  onPress={handleSignIn} customText="Log In" />

          </View>
        </View>

        <View style={styles.ctaContainer}>
          <View style={styles.createAccountContainer}>
            <Text style={styles.doNotHaveAccountText}>Don't have an account?</Text>
            <TouchableOpacity  onPress={handleCreateAccount}>
              <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}



export default LoginUI;
