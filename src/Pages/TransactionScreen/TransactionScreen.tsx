import React from 'react'
import { Text, View } from 'react-native'
import TransactionUI from '../../Components/TransactionScreen/TransactionUI'

function TransactionScreen(props:any) {

    const {navigation}=props;

    const handleTransaction=()=>{
        console.log("Transcation clicked");
        navigation.navigate("RechargeResult")
    }

  return (
    <View style={{flex:1}}>
      
      <TransactionUI handleTransaction={handleTransaction}/>
    </View>
  )
}

export default TransactionScreen
