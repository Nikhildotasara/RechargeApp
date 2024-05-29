import React from 'react'
import { View,Text } from 'react-native'


// importing themeprovider
import { ThemeProvider } from './src/utils/themeProvider.tsx'


// importing NavigationWrapper
import NavigationWrapper from './src/Wrapper/NavigationWrapper.tsx'

function App() {
  return (


    <View style={{flex:1}}>
      

      <ThemeProvider>
      <NavigationWrapper/>
      </ThemeProvider>


    </View>
  )
}

export default App
