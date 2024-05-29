import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../../utils/themeProvider';

import BackIcon from "../../assests/backIcon.svg"

function MobileRechargeUpperBar(props:any) {

  const {theme}=useTheme();

    const {customName}=props;



    const navigation=useNavigation();

    
        const handleBack=()=>{
            navigation.goBack();
            // backgroundColor:"#0466C8"
        }
  return (

    <View style={{width:"100%" ,backgroundColor:theme==="dark" ? "#023364":"#0466C8"  ,height:50 ,alignItems:"center" ,flexDirection:"row",paddingLeft:15}}>
      

      <TouchableOpacity onPress={handleBack}>

        <BackIcon/>
        
      </TouchableOpacity>

      <Text style={{color:"white",fontSize:18 ,marginLeft:20}}>{customName}</Text>

    </View>
  )
}

export default MobileRechargeUpperBar
