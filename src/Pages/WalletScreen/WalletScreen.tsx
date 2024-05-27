import React from 'react'

import { View,Text } from 'react-native'

import WalletUI from '../../Components/Wallet/WalletUI'

function WalletScreen(props:any) {

  const {navigation}=props;
  const handleAddAmount=()=>{
    console.log("asdfads")
    navigation.navigate("WalletTranscationsScreen")
  }


    
  return (
    <View style={{flex:1,}}>

        <WalletUI handleAddAmount={handleAddAmount}/>
    </View>
  )
}

export default WalletScreen
