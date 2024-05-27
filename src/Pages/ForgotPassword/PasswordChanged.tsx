import React from 'react'
import { View } from 'react-native'

import PasswordChangedUI from '../../Components/ForgotPassword/PasswordChangedUI'

function PasswordChanged(props:any) {

    const {navigation}=props;

    const handleBackToLogin=()=>{
        navigation.navigate("LoginScreen");
    }

  return (
    <View style={{flex:1}}>
      
      <PasswordChangedUI handleBackToLogin={handleBackToLogin}/>
    </View>
  )
}

export default PasswordChanged
