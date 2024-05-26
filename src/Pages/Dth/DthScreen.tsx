import React from 'react'
import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import D2hUI from "../../Components/D2h/D2hUI.tsx"

function DthScreen() {

    const navigation=useNavigation();

    const handleProvider=()=>{
        console.log("Opening provider");
        navigation.navigate("D2hIdProviderScreen");
    }

  return (
    <View style={{flex:1}}>

        <D2hUI handleProvider={handleProvider} />
      
    </View>
  )
}

export default DthScreen
