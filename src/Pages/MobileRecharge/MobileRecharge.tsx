import React from 'react'
import { Text, View } from 'react-native'

import MobileRechargeUI from '../../Components/MobileRecharge/MobileRechargeUI'

function MobileRecharge(props:any) {

    const {navigation}=props;

    const handleRecharge=()=>{
        navigation.navigate("RechargePlansScreen")
    }

  return (
    <View style={{flex:1 ,}}>
        <MobileRechargeUI handleRecharge={handleRecharge} />
    </View>
  )
}

export default MobileRecharge
