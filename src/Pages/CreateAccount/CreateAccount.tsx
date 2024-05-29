import React, { useEffect, useState } from 'react';
import { Alert, View ,ToastAndroid
} from 'react-native';

import { signUp } from '../../apiService.js';

// importing UI
import CreateAccountUI from '../../Components/CreateAccount/CreateAccountUI.tsx';

type CreateAccountProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const CreateAccount: React.FC<CreateAccountProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [createPassword, setCreatePassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

  // useEffect(()=>{
  //   ToastAndroid.show("dsfasdf",ToastAndroid.SHORT)
  // })



  const onNameChange = (name: string) => {
    setName(name);
  };

  const onEmailChange = (email: string) => {
    setEmail(email);
  };

  const onMobileNumberChange = (mobileNumber: string) => {
    setMobileNumber(mobileNumber);
  };

  const onCreatePasswordChange = (password: string) => {
    setCreatePassword(password);
  };

  const onConfirmPasswordChange = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
  };

  const onTermsChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };


  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleContinue = async() => {
    checkPassword(createPassword,confirmPassword)

    if(checkPassword(createPassword,confirmPassword)){
      try {
        const userData={UserName:name,Email:email,Pass:createPassword,MobileNo:mobileNumber};
        const response=await signUp(userData);
        console.log(response)
        
        if(response.success){
          navigation.navigate('OtpScreen');
        }

        Alert.alert("Success","SignUp success");
    
      } catch (error) {
        console.log("Error in signup")
        Alert.alert("Error","Error in signup")
      }
    }
    else{
     showToast("Error in account creation")
    }

  };


  const checkPassword=(createPassword,confirmPassword)=>{
    if(createPassword===confirmPassword && createPassword.length>=0 && confirmPassword.length>=0){

      ToastAndroid.show("Passwords did not match",ToastAndroid.SHORT)

      return true;
    }
    else{

      ToastAndroid.show("Passwords did not match",ToastAndroid.SHORT)
      return false;
    }

  }

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <CreateAccountUI
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onMobileNumberChange={onMobileNumberChange}
        onCreatePasswordChange={onCreatePasswordChange}
        onConfirmPasswordChange={onConfirmPasswordChange}
        handleContinue={handleContinue}
        onTermsChange={onTermsChange}
        isTermsAccepted={isTermsAccepted}
        handleLogin={handleLogin}
      />
    </View>
  );
};

export default CreateAccount;
