import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import D2hIdProviderUI from '../../Components/D2h/D2hIdProviderUI.tsx'

function D2hIdProviderScreen() {

    const navigation=useNavigation();
    const handleProvider=()=>{
        console.log("To id provider")
        navigation.navigate("D2hBillDetailsScreen")
    }

  return (
    <View style={{flex:1}}>

        <D2hIdProviderUI handleProvider={handleProvider}/>
      
    </View>
  )
}

export default D2hIdProviderScreen
