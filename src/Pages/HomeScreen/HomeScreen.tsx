import React from 'react'
import { Text, View } from 'react-native'
import HomeScreenUI from '../../Components/HomeScreen/HomeScreenUI'

function HomeScreen(props:any) {

  const {navigation}=props;

  const handleMobileRecharge=()=>{
    navigation.navigate("MobileRechargeScreen")    
  }

  const handleWallet=()=>{
    navigation.navigate("WalletScreen")
  }

  const handleDth=()=>{
    navigation.navigate("DthScreen")
  }

  return (
    <View style={{flex:1 ,}}>
      <HomeScreenUI handleDth={handleDth} handleMobileRecharge={handleMobileRecharge} handleWallet={handleWallet}/>
    </View>
  )
}

export default HomeScreen
