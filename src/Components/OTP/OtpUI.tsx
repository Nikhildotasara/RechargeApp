import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackButtonSvg from "../../assests/backButton.svg";
import OtpInput from './OtpInput.tsx';
import CustomCTA from '../../elements/CustomCTA';


import { useTheme } from '../../utils/themeProvider.tsx';

interface OtpUIProps {
  handleBack: () => void;
  handleVerify: () => void;
  handleOtpChange: (otp: string) => void;
}

const OtpUI: React.FC<OtpUIProps> = ({ handleBack, handleVerify, handleOtpChange }) => {

  const {theme,toogleTheme}=useTheme();

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
        <View style={styles.resendContainer}>
          <Text>Send code again</Text>
          <Text>50s</Text>
        </View>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   backButton: {
//     height: 50,
//     width: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'flex-start',
//     backgroundColor: 'white',
//   },
//   title: {
//     color: 'black',
//     fontSize: 40,
//     fontWeight: 'bold',
//     marginTop: 50,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: 'black',
//     textAlign: 'center',
//   },
//   email: {
//     fontWeight: '900',
//   },
//   otpContainer: {
//     width: '70%',
//     marginTop: 50,
//     maxWidth: 290,
//     alignItems: 'center',
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     width: '80%',
//     justifyContent: 'space-around',
//     marginTop: 50,
//   },
// });

export default OtpUI;
