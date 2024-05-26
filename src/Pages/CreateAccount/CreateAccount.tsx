import React, { useState } from 'react';
import { View } from 'react-native';

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

  const handleContinue = () => {
    console.log(name);
    console.log(email);
    console.log(mobileNumber);
    console.log(createPassword);
    console.log(confirmPassword);

    navigation.navigate('OtpScreen');
  };

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
