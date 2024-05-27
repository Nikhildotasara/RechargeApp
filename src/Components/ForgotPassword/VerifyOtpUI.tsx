import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackButtonSvg from "../../assests/backButton.svg";
// import OtpInput from './OtpInput.tsx';

import OtpInput from '../OTP/OtpInput.tsx';
import CustomCTA from '../../elements/CustomCTA';


import { useTheme } from '../../utils/themeProvider.tsx';

interface VerifyOtpUIProps {
  handleBack: () => void;
  handleVerify: () => void;
  handleOtpChange: (otp: string) => void;

}

const VerifyOtpUI: React.FC<VerifyOtpUIProps> = ({ handleBack, handleVerify, handleOtpChange }) => {

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
      height: 50,
      width: 50,
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
      textAlign: 'center',
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

      <Text style={styles.title}>Please check your email</Text>
      <Text style={styles.subtitle}>
        We have sent a code to <Text style={styles.email}>helloworld@gmail.com</Text>
      </Text>

      <View style={styles.otpContainer}>
        <OtpInput onOtpChange={handleOtpChange} />
        <CustomCTA onPress={handleVerify} customText="Verify" />
        <TouchableOpacity disabled={timer>0 ? true :false} style={styles.resendContainer}>
          <Text style={{fontSize:17,color:"black" ,fontWeight:"600"}}>Send code again</Text>

          {timer>0 ? 
          <Text>{timer}s</Text>: null
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default VerifyOtpUI;
