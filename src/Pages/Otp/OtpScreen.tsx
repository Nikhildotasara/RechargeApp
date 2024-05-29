import React, { useState } from 'react';
import { ToastAndroid, View } from 'react-native';
import OtpUI from '../../Components/OTP/OtpUI.tsx';

import { verifyOtp,signUp } from '../../apiService.js';


import { useUserDetails } from '../../utils/userDetailsProvider.tsx';



const OtpScreen: React.FC<any> = ({ navigation }) => {
  const [otp, setOtp] = useState<string>('');

  const {email,name,password,mobileNumber}=useUserDetails();






  const handleBack = () => {
    navigation.goBack();
  };

  const handleVerify = async() => {
    
    //  need to get the mail from context api
    try{

      const verifyDetails={
        otp:otp,
        email:email
      }
      // console.log('Verifying OTP:', verifyDetails);
      const response=await verifyOtp(verifyDetails);
      console.log("Response for otp verification",response);

      if(response.status===200){

        const userDetails={
          UserName:name,
          Email:email,
          Pass:password,
          MobileNo:mobileNumber
        }

        const response = await signUp(userDetails);
        console.log(response)

        if(response.success && response.status==200){
          navigation.navigate("HomeScreen");
        }
        else{
          ToastAndroid.show(response.message,ToastAndroid.SHORT)
        }


      }
      else{
        ToastAndroid.show("Error in otp verification",ToastAndroid.SHORT)
      }
      
    }
    catch(error){
      console.log(error)
    }


    
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
