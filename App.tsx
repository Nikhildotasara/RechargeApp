import React from 'react'
import { View,Text } from 'react-native'


// importing themeprovider
import {ThemeProvider} from './src/utils/themeProvider.tsx';

import { UserDetailsProvider } from './src/utils/userDetailsProvider.tsx';

// importing NavigationWrapper
import NavigationWrapper from './src/Wrapper/NavigationWrapper.tsx'

function App() {
  return (


    <View style={{flex:1}}>
      
      <UserDetailsProvider>
      <ThemeProvider>
      <NavigationWrapper/>
      </ThemeProvider>
      </UserDetailsProvider>


    </View>
  )
}

export default App
