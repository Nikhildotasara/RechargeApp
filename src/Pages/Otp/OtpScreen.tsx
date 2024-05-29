import React, { useState } from 'react';
import { View } from 'react-native';
import OtpUI from '../../Components/OTP/OtpUI.tsx';

import { verifyOtp } from '../../apiService.js';


import { useUserDetails } from '../../utils/userDetailsProvider.tsx';



const OtpScreen: React.FC<any> = ({ navigation }) => {
  const [otp, setOtp] = useState<string>('');

  const {name}=useUserDetails();

  console.log("name")




  const handleBack = () => {
    navigation.goBack();
  };

  const handleVerify = () => {
    
    //  need to get the mail from context api

    const verifyDetails={
      otp:otp,
      email:""
    }

    console.log('Verifying OTP:', otp);

    navigation.navigate("HomeScreen");
    // Here you can send the OTP to the backend for verification
  };

  return (
    <View style={{ flex: 1 }}>
      <OtpUI 
        handleBack={handleBack} 
        handleVerify={handleVerify} 
        handleOtpChange={setOtp} 
      />
    </View>
  );
};

export default OtpScreen;
