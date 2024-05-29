import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';


import { useTheme } from '../utils/themeProvider';

// importing assests
import HomeImage from "../assests/home.svg";
import WhiteHomeImage from "../assests/whiteHome.svg";
import WalletImage from "../assests/wallet.svg"
import WhiteWalletImage from "../assests/whiteWallet.svg"
import TranscationImage from "../assests/transcation.svg";
import WhiteTranscationImage from "../assests/whiteTranscation.svg";
import HelpImage from "../assests/help.svg";
import WhiteHelpImage from "../assests/whiteHelp.svg";

function BottomNavigator(props:any) {

    const navigation=useNavigation();

    const {theme}=useTheme();

    const handleWallet=()=>{
        navigation.navigate("WalletScreen")    
    }

    const handleHelp=()=>{
        navigation.navigate("HelpScreen")
    }

    const handleTrasaction=()=>{
        navigation.navigate("TransactionScreen")
    }

  return (
    <View style={{width:"100%",backgroundColor:theme==="dark"?"#0466C8":"white" ,minHeight:60,justifyContent:"space-around" ,alignItems:"center" ,flexDirection:"row"}}>


        <TouchableOpacity style={{borderWidth:0,alignItems:"center",justifyContent:"space-between" ,}}>

            {theme==="dark" ? <WhiteHomeImage/> :<HomeImage/>}
            {/* <HomeImage/> */}

            <Text style={{color:theme==="dark"?"white":"black",}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWallet} style={{borderWidth:0,alignItems:"center",justifyContent:"space-between" ,}}>
        {theme==="dark" ? <WhiteWalletImage/> :<WalletImage/>}

            <Text style={{color:theme==="dark"?"white":"black",}}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTrasaction} style={{borderWidth:0,alignItems:"center",justifyContent:"space-between" ,}}>
        {theme==="dark" ? <WhiteTranscationImage/> :<TranscationImage/>}

            <Text style={{color:theme==="dark"?"white":"black",}}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelp} style={{borderWidth:0,alignItems:"center",justifyContent:"space-between" ,}}>
        {theme==="dark" ? <WhiteHelpImage/> :<HelpImage/>}

            <Text style={{color:theme==="dark"?"white":"black",}}>Help</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default BottomNavigator
