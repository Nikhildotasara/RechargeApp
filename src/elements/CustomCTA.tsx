import React from 'react'
import { TouchableOpacity,Text } from 'react-native'

function CustomCTA(props:any) {

    const {onPress,customText,color}=props;

  return (
    <TouchableOpacity onPress={onPress} style={{borderRadius:10,width:"80%",minHeight:55,justifyContent:"center",alignItems:"center" ,backgroundColor:"#0466C8" }} >
      <Text style={{fontSize:16,fontWeight:600,lineHeight:20,color:"white"}}>{customText}</Text>
    </TouchableOpacity>
  )
}

export default CustomCTA
