// importing libraries
import React, { useState } from 'react'
import { Text, View } from 'react-native'

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

    const handleSignIn=()=>{
        console.log(email)
        console.log(password);
    }

    const handleForgotPassword=()=>{
        console.log("Handle password clicked");

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
