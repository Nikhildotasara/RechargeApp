import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { useTheme } from '../../utils/themeProvider.tsx';

interface OtpInputProps {
  onOtpChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ onOtpChange }) => {
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [otpArray, setOtpArray] = useState<string[]>(Array(4).fill(''));

  const {theme,toogleTheme}=useTheme();

  const getStyles=(theme)=>StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
      },
      input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,

        color:theme=="dark"?"white":"black"
      },
  })

  const styles=getStyles(theme);




  const handleChange = (text: string, index: number) => {
    const newOtpArray = [...otpArray];
    newOtpArray[index] = text;
    setOtpArray(newOtpArray);

    const otp = newOtpArray.join('');
    onOtpChange(otp);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array(4).fill(null).map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={otpArray[index]}
          onChangeText={(text) => handleChange(text, index)}
        />
      ))}
    </View>
  );
};



export default OtpInput;
