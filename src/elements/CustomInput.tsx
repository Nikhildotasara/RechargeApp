import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function CustomInput(props) {
    const { onChange, theme,placeHolder,secure } = props;
    console.log("theme is ",theme)

    return (
        <TextInput
        placeholderTextColor={theme=="dark"?"white":"black"}

        

        secureTextEntry={secure}
        
            onChangeText={(text) => { onChange(text) }}
            style={[styles.input, { backgroundColor:theme=="dark"?"#252E3E":"white",paddingLeft:12 ,color:theme=="dark"?"white":"black" }]}
            placeholder={placeHolder}
            
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        // backgroundColor:theme=="dark"?"#011F3C":"white",
        width: "95%",
        borderRadius: 4,
        fontSize:17
    },
});

export default CustomInput;
