import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// importing assests
import HomeImage from "../assests/home.svg";
import WalletImage from "../assests/wallet.svg"
import TranscationImage from "../assests/transcation.svg";
import HelpImage from "../assests/help.svg";

function BottomNavigator(props:any) {

    const navigation=useNavigation();

    const handleWallet=()=>{
        navigation.navigate("WalletScreen")    
    }

  return (
    <View style={{width:"100%",backgroundColor:"white" ,minHeight:60,justifyContent:"space-around" ,alignItems:"center" ,flexDirection:"row"}}>


        <TouchableOpacity style={{borderWidth:0,alignItems:"center",justifyContent:"space-between" ,}}>
            <HomeImage/>

            <Text style={{color:"black"}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWallet} style={{borderWidth:0,alignItems:"center",justifyContent:"space-between" ,}}>
            <WalletImage/>

            <Text style={{color:"black"}}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:0,alignItems:"center",justifyContent:"space-between" ,}}>
            <TranscationImage/>

            <Text style={{color:"black"}}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:0,alignItems:"center",justifyContent:"space-between" ,}}>
            <HelpImage/>

            <Text style={{color:"black"}}>Help</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default BottomNavigator
