import React, { useState } from 'react'
import { View } from 'react-native'

import { forgotPassword } from '../../apiService.js';

import ForgotPasswordUI from '../../Components/ForgotPassword/ForgotPasswordUI.tsx'

function ForgotPassword(props:any) {

    const [email,setEmail]=useState();

    const {navigation}=props;

    const handleBack=()=>{
        navigation.goBack()
    }

    const handleLogin=()=>{
        navigation.navigate("LoginScreen")
    }

    const handleSendCode=()=>{

        const response=forgotPassword(email);
        

        navigation.navigate("VerifyOtpScreen")
    }

    const onEmailChange=(email:string)=>{
        setEmail(email)
    }


  return (
    <View style={{flex:1}}>

        <ForgotPasswordUI onEmailChange={onEmailChange} handleBack={handleBack} handleLogin={handleLogin} handleSendCode={handleSendCode}/>
    </View>
  )
}

export default ForgotPassword
