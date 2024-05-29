import React, { useState } from 'react'
import { Text, ToastAndroid, View } from 'react-native'

import { updatePassword } from '../../apiService.js';

import ResetPasswordUI from '../../Components/ResetPassword/ResetPasswordUI'

function ResetPassword(props) {

    const {navigation}=props;


    const [newPassword,setNewPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();


    const onPasswordChange=(password)=>{
      setNewPassword(password)
    }

    const onConfirmPasswordChange=(confirmPassword)=>{
      setConfirmPassword(confirmPassword)
    }

    const checkPassword=(newPassword,confirmPassword)=>{
      console.log(newPassword);
      console.log(confirmPassword)
      if(newPassword===confirmPassword && newPassword.length>=8 && confirmPassword.length>=8){
        
        console.log("Passwords matched")
        return true
      }
      else{
        ToastAndroid.show("New password and confirm password should be same",ToastAndroid.SHORT);
        return false;
      }
    }

    

    const handleResetPassword=()=>{

      if(checkPassword(newPassword,confirmPassword)
        ){
          try {
            const response=updatePassword(newPassword,confirmPassword);
            console.log("Response from update password",response)
            navigation.navigate("PasswordChangedScreen")
          } catch (error) {
            console.error(error)
          }
        }
    }

  return (
    <View style={{flex:1}}>

        <ResetPasswordUI onPasswordChange={onPasswordChange} onConfirmPasswordChange={onConfirmPasswordChange} handleResetPassword={handleResetPassword}/>
    </View>
  )
}

export default ResetPassword
