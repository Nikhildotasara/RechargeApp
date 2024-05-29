// importing libraries
import React, { useState } from 'react'
import { Text, ToastAndroid, View } from 'react-native'


// import { useUserDetails } from '../../utils/userDetailsProvider.tsx';

import { login } from '../../apiService.js';

// importing UI
import LoginUI from '../../Components/LoginScreen/LoginUI.tsx'

function LoginScreen(props:any) {

    const {navigation}=props;

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    


    const onEmailChange=(email:any)=>{
        setEmail(email)
    }
    const onPasswordChange=(password:any)=>{
        setPassword(password)
    }

    const handleSignIn=async()=>{
        console.log(email)
        console.log(password);
        try {
        const verifyDetails={
          email:email,
          password:password
        }
        const response=await login(verifyDetails);
        console.log("Login page check",response)

        if(response.success ){
          navigation.navigate("HomeScreen")     
        }
        else{
          ToastAndroid.show(response.message,ToastAndroid.SHORT)
        }

        } catch (error) {
          console.log(error)
        }    
    }

    const handleForgotPassword=()=>{
        console.log("Handle password clicked");
        navigation.navigate("ForgotPasswordScreen")

    }

    const handleCreateAccount=()=>{
        console.log("handle createa account")
        navigation.navigate("CreateAccount")
    }


  return (
    <View style={{flex:1}}>
      <LoginUI onEmailChange={onEmailChange} onPasswordChange={onPasswordChange} handleSignIn={handleSignIn} handleForgotPassword={handleForgotPassword} handleCreateAccount={handleCreateAccount} />
    </View>
  )
}

export default LoginScreen
