import React from 'react'
import { Text, View } from 'react-native'

import ResetPasswordUI from '../../Components/ResetPassword/ResetPasswordUI'

function ResetPassword(props) {

    const {navigation}=props;

    const handleResetPassword=()=>{
        navigation.navigate("PasswordChangedScreen")
    }

  return (
    <View style={{flex:1}}>

        <ResetPasswordUI handleResetPassword={handleResetPassword}/>
    </View>
  )
}

export default ResetPassword
