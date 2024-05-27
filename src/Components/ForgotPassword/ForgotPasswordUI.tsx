import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackButtonSvg from "../../assests/backButton.svg";
// import OtpInput from './OtpInput.tsx';
import CustomCTA from '../../elements/CustomCTA';


import { useTheme } from '../../utils/themeProvider.tsx';
import CustomInput from '../../elements/CustomInput.tsx';

interface ForgotPasswordUI {
  handleBack: () => void;
  handleVerify: () => void;
  handleOtpChange: (otp: string) => void;
  handleLogin:()=>void;
  handleSendCode:()=>void;
  onEmailChange:()=>void;
}

const ForgotPasswordUI: React.FC<ForgotPasswordUI> = ({ handleBack, handleVerify, handleOtpChange,handleLogin,handleSendCode,onEmailChange }) => {

  const {theme,toogleTheme}=useTheme();

  const [timer,setTimer]=useState(60);

  useEffect(() => {
    if (timer > 0) {
      const timeoutId = setTimeout(() => {
        setTimer(prevTimer => prevTimer - 1); // Use functional update
      }, 1000);
      return () => clearTimeout(timeoutId); // Cleanup function to clear timeout
    }
  }, [timer]);
  

  const getStyles=(theme)=>StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:theme=="dark"?"black":"white"
    },
    backButton: {
        paddingLeft:20,
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      backgroundColor: theme=="dark"?"dark":"white",

    },
    title: {
      color: theme=="dark"?"white":"black",
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20,
      textAlign:"left",
      
    },
    subtitle: {
      fontSize: 16,
      textAlign:"left",
      color: theme=="dark"?"white":"black",
    },
    email: {
      fontWeight: '900',
    },
    otpContainer: {
      width: '70%',
      marginTop: 50,
      maxWidth: 290,
      alignItems: 'center',
    },
    resendContainer: {
      flexDirection: 'row',
      width: '80%',
      justifyContent: 'space-around',
      marginTop: 50,
      alignItems:"center"
    },
  })

  const styles=getStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <BackButtonSvg height="70%" width="70%" />
      </TouchableOpacity>

      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Don't worry ! It happens. Please enter the email address associated with your account.
      </Text>


      <View style={{borderWidth:0 ,width:"84%" ,marginTop:12,alignItems:"center" ,minHeight:300,justifyContent:"space-around"}}>

        <View style={{width:"100%"}}>

        <Text style={{color:"black" ,marginBottom:10}}>Email address</Text>

        <CustomInput onChange={onEmailChange} placeHolder="Enter your email address"/>
        </View>


        <CustomCTA onPress={handleSendCode} customText="Send code"/>

        <View style={{alignItems:"center"}}>

        <Text style={{color:"black"}}>Remember Password?</Text>

        <TouchableOpacity onPress={handleLogin} >
            <Text style={{color:"#0466C8",fontSize:17}}>Log In</Text>
        </TouchableOpacity>
        </View>


      </View>

    </View>
  );
};


export default ForgotPasswordUI;
