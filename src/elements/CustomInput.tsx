import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function CustomInput(props) {
    const { onChange, theme,placeHolder,secure } = props;
    console.log("theme is ",theme)

    return (
        <TextInput
        placeholderTextColor={"black"}

        

        secureTextEntry={secure}
        
            onChangeText={(text) => { onChange(text) }}
            style={[styles.input, { backgroundColor: theme === "dark" ? "white" : "white",paddingLeft:12 }]}
            placeholder={placeHolder}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        backgroundColor:"white",
        width: "95%",
        borderRadius: 4,
        fontSize:17
    },
});

export default CustomInput;
