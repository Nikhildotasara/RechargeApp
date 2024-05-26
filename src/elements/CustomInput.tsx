import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function CustomInput(props) {
    const { onChange, theme } = props;
    console.log("theme is ",theme)

    return (
        <TextInput
            onChangeText={(text) => { onChange(text) }}
            style={[styles.input, { backgroundColor: theme === "dark" ? "white" : "white" }]}
            placeholder='Your text here'
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        width: "95%",
        borderRadius: 4,
    },
});

export default CustomInput;
