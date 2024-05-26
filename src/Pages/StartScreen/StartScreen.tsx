import React from 'react'
import { Text, View } from 'react-native'


// importing UI components
import StartScreenUI from '../../Components/StartScreen/StartScreenUI.tsx'

function StartScreen(props:any) {

   const {navigation}=props; 
    const handleSignIn=()=>{
        console.log("SignIn button pressed");
        navigation.navigate("LoginScreen");
    }

    const handleCreateAccount=()=>{
        console.log("Create account created");
        navigation.navigate("CreateAccount");
    }

  return (
    <View style={{flex:1,}}>
      <StartScreenUI handleSignIn={handleSignIn} handleCreateAccount={handleCreateAccount}/>
    </View>
  )
}

export default StartScreen;
