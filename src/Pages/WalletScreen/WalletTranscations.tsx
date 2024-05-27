import React from 'react'
import { Text, View } from 'react-native'

import WalletTranscationsUI from '../../Components/Wallet/WalletTranscationsUI.tsx';

function WalletTranscations() {
  return (
    <View style={{flex:1}}>
      <WalletTranscationsUI/>
    </View>
  )
}

export default WalletTranscations;
