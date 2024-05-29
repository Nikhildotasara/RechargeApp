import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import BackButtonSvg from "../../assests/backButton.svg";
import OtpInput from './OtpInput.tsx';
import CustomCTA from '../../elements/CustomCTA';

import { Modal } from 'react-native';


import { useTheme } from '../../utils/themeProvider.tsx';
import { useUserDetails } from '../../utils/userDetailsProvider.tsx';

interface OtpUIProps {
  handleBack: () => void;
  handleVerify: () => void;
  handleOtpChange: (otp: string) => void;
}

const OtpUI: React.FC<OtpUIProps> = ({ handleBack, handleVerify, handleOtpChange }) => {

  const {theme,toogleTheme}=useTheme();


  const height=Dimensions.get("screen").height;
  const width=Dimensions.get("screen").width;

  const [timer,setTimer]=useState(60);

  const {email}=useUserDetails();

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
      backgroundColor:theme=="dark"?"#011F3C":"white",
      // width:"100%"
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
      fontSize: 32,
      fontWeight: '700',
      marginTop: 50,
      marginBottom: 20,
      // textAlign:"left",
      // backgroundColor:"red"
    },
    subtitle: {
      fontSize: 14,
      paddingLeft:13,
      // textAlign: 'center',
      color: theme=="dark"?"white":"black",
    },
    email: {
      fontWeight: '900',
    },
    otpContainer: {
      width: '85%',
      marginTop: 50,
      maxWidth: 350,
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

      <Text style={styles.title}>{"Please check your          \nemail"}</Text>
      <Text style={styles.subtitle}>
        We have sent a code to <Text style={styles.email}>{email}</Text>
      </Text>

      <View style={styles.otpContainer}>
        <OtpInput onOtpChange={handleOtpChange} />
        <CustomCTA onPress={handleVerify} customText="Verify" />
        <TouchableOpacity disabled={timer>0 ? true :false} style={styles.resendContainer}>
          <Text style={{fontSize:17,color: theme=="dark"?"white":"black",fontWeight:"600"}}>Send code again</Text>

          {timer>0 ? 
          <Text style={{color: theme=="dark"?"white":"black",}}>`00:{timer}s`</Text>: null
          }
        </TouchableOpacity>


        <Modal transparent={true}>

          <View style={{backgroundColor:"red",position:"absolute",top:height/3, left:width/7,minWidth:300,minHeight:300,alignItems:"center",borderRadius:20}}>
            
            <View style={{flexDirection:"row"}}>
              <Text  >Error</Text>
           
            </View>
          </View>

        </Modal>



      </View>
    </View>
  );
};



export default OtpUI;
