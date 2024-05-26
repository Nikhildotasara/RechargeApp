import React, { useState } from 'react';
import { View } from 'react-native';
import OtpUI from '../../Components/OTP/OtpUI.tsx';

const OtpScreen: React.FC<any> = ({ navigation }) => {
  const [otp, setOtp] = useState<string>('');

  const handleBack = () => {
    navigation.navigate('CreateAccount');
  };

  const handleVerify = () => {
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
