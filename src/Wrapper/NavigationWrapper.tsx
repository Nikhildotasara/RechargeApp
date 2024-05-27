// importing libraries
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// importing the pages
import StartScreen from '../Pages/StartScreen/StartScreen.tsx';
import LoginScreen from '../Pages/LoginScreen/LoginScreen.tsx';
import CreateAccount from '../Pages/CreateAccount/CreateAccount.tsx';
import OtpScreen from '../Pages/Otp/OtpScreen.tsx';
import HomeScreen from '../Pages/HomeScreen/HomeScreen.tsx';
import MobileRecharge from '../Pages/MobileRecharge/MobileRecharge.tsx';
import RechargePlans from '../Pages/RechargePlans/RechargePlans.tsx';
import RechargeBill from '../Pages/RechargeBill/RechargeBill.tsx';
import PlanDetails from '../Pages/PlanDetails/PlanDetails.tsx';

import WalletScreen from '../Pages/WalletScreen/WalletScreen.tsx';
import DthScreen from '../Pages/Dth/DthScreen.tsx';
import D2hIdProviderScreen from '../Pages/Dth/D2hIdProviderScreen.tsx';
import D2hBillDetails from '../Pages/Dth/D2hBillDetails.tsx';
import WalletTranscations from '../Pages/WalletScreen/WalletTranscations.tsx';
import GooglePlay from '../Pages/GooglePlay/GooglePlay.tsx';
import HelpScreen from '../Pages/HelpScreen/HelpScreen.tsx';


function NavigationWrapper() {
  const Stack=createNativeStackNavigator();
    return (
    <NavigationContainer>

        <Stack.Navigator>

            <Stack.Group screenOptions={{headerShown:false}}>

            <Stack.Screen name='StartScreen' component={StartScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='CreateAccount' component={CreateAccount}/>

            <Stack.Screen name="OtpScreen" component={OtpScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>

            <Stack.Screen name='MobileRechargeScreen' component={MobileRecharge}/>
            <Stack.Screen name='RechargePlansScreen' component={RechargePlans}/>
            <Stack.Screen name='RechargeBillScreen' component={RechargeBill}/>
            <Stack.Screen name='PlanDetailsScreen' component={PlanDetails}/>

            <Stack.Screen name='WalletScreen' component={WalletScreen}/>
            <Stack.Screen name='DthScreen' component={DthScreen}/>
            <Stack.Screen name='D2hIdProviderScreen' component={D2hIdProviderScreen}/>

            <Stack.Screen name='D2hBillDetailsScreen' component={D2hBillDetails}/>

            <Stack.Screen name='WalletTranscationsScreen' component={WalletTranscations}/>

            <Stack.Screen name='GooglePlayScreen' component={GooglePlay}/>

            <Stack.Screen name='HelpScreen' component={HelpScreen}/>


            </Stack.Group>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationWrapper
