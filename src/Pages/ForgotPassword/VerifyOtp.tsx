import React from 'react'
import { View } from 'react-native'

import VerifyOtpUI from '../../Components/ForgotPassword/VerifyOtpUI.tsx'

function VerifyOtp(props) {

    const {navigation}=props;

    const handleOtpChange=()=>{
        console.log("adsfasdf")
    }

    const handleBack=()=>{
        navigation.goBack()
    }

    const handleVerify=()=>{
        navigation.navigate("ResetPasswordScreen")
    }
    return (

    <View style={{flex:1}}>
      
      <VerifyOtpUI handleBack={handleBack}  handleOtpChange={handleOtpChange} handleVerify={handleVerify}/>
    </View>
  )
}

export default VerifyOtp
