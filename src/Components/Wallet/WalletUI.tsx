import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

import { useTheme } from '../../utils/themeProvider.tsx';

const WalletUI = (props:any) => {
  const [amount, setAmount] = useState('₹ 170');

  const {theme}=useTheme();


  const getStyles=(theme)=>StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:theme=="dark"?"#011F3C":"white",
    },
    header: {
      // backgroundColor:theme=="dark"?"#252E3E":"white",

      padding: 15,
      alignItems: 'center',
    },
    headerTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    balanceContainer: {
      backgroundColor:theme=="dark"?"#252E3E":"white",
      padding: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 20,
    },
    balanceLabel: {
      color:theme=="dark"?"white":"black",
      fontSize: 16,
    },
    balance: {

      color:theme=="dark"?"white":"black",
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
    },
    amountContainer: {
      padding: 20,
      borderRadius: 8,
      marginBottom: 20,
      backgroundColor:theme=="dark"?"#252E3E":"white",

    },
    amountLabel: {

      color:theme=="dark"?"white":"black",
      fontSize: 16,
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      fontSize: 16,
      borderRadius: 5,
      marginBottom: 10,
      color:theme=="dark"?"white":"black", 
    },
    amountHint: {

      color:theme=="dark"?"white":"black",      fontSize: 12,
      marginBottom: 10,
    },
    recommendedTitle: {
      color: '#333',
      fontSize: 14,
      marginBottom: 10,
    },
    recommendedContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    recommendedButton: {
      // backgroundColor: '#fff',
      backgroundColor: '#007aff',
      borderWidth: 1,
      borderColor: '#007aff',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      width: '22%',
    },
    recommendedText: {
color:"white",
      // color:theme=="dark"?"white":"black",
            fontSize: 14,

    },
    transactionsContainer: {
      backgroundColor:theme=="dark"?"#252E3E":"white",
      padding: 20,
      borderRadius: 8,
      marginBottom: 20,
      // borderWidth:1,
      // maxHeight:300,
      flex:1
    },
    transactionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    transactionTitle: {

      color:theme=="dark"?"white":"black",
            fontSize: 18,
  
      fontWeight: 'bold',
    },
    passbookButton: {
      backgroundColor: '#007aff',
      padding: 10,
      borderRadius: 5,
    },
    passbookText: {
      color: '#fff',
      fontSize: 14,
    },
    transactionList: {
      marginBottom: 20,
      // borderWidth:1,
      // flex:1
    },
    transactionItem: {
      marginBottom: 15,
    },
    transactionDate: {
      
      color:theme=="dark"?"white":"black",
      fontSize: 14,
    },
    transactionDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    transactionType: {
      
      color:theme=="dark"?"white":"black",
      fontSize: 16,
    },
    transactionAmount: {
      
      color:theme=="dark"?"white":"black",
      fontSize: 14,
    },
    addButton: {
      backgroundColor: '#007aff',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      position:"absolute",
      bottom:10,
      width:300,
      alignSelf:"center",
      zIndex:2
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  })

  const styles=getStyles(theme);

  const handleRecommendedClick = (value) => {
    setAmount(value);
  };

  const {handleAddAmount}=props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>

        <MobileRechargeUpperBar customName="Wallet"/>
        <View style={styles.content}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <Text style={styles.balance}>₹ 9078</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountLabel}>Enter Amount</Text>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
              // placeholderTextColor="white"
              
              keyboardType="numeric"
            />
            <Text style={styles.amountHint}>Min ₹10 & Max ₹5,000</Text>
            <Text style={styles.recommendedTitle}>Recommended</Text>
            <View style={styles.recommendedContainer}>
              <TouchableOpacity style={styles.recommendedButton} onPress={() => handleRecommendedClick('₹ 200')}>
                <Text style={styles.recommendedText}>₹200</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.recommendedButton} onPress={() => handleRecommendedClick('₹ 500')}>
                <Text style={styles.recommendedText}>₹500</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.recommendedButton} onPress={() => handleRecommendedClick('₹ 1000')}>
                <Text style={styles.recommendedText}>₹1000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.recommendedButton} onPress={() => handleRecommendedClick('₹ 2000')}>
                <Text style={styles.recommendedText}>₹2000</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.transactionsContainer}>
            <View style={styles.transactionHeader}>
              <Text style={styles.transactionTitle}>Transactions</Text>
              <TouchableOpacity style={styles.passbookButton}>
                <Text style={styles.passbookText}>Passbook</Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:0}} style={styles.transactionList}>
              <View style={styles.transactionItem}>
                <Text style={styles.transactionDate}>14 May 2024 at 01:40</Text>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionType}>Credited</Text>
                  <Text style={styles.transactionAmount}>₹450</Text>
                </View>
              </View>
              <View style={styles.transactionItem}>
                <Text style={styles.transactionDate}>14 May 2024 at 01:40</Text>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionType}>Credited</Text>
                  <Text style={styles.transactionAmount}>₹450</Text>
                </View>
              </View>
              <View style={styles.transactionItem}>
                <Text style={styles.transactionDate}>1 May 2024 at 10:20</Text>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionType}>Debited</Text>
                  <Text style={styles.transactionAmount}>₹150</Text>
                </View>
              </View>
              <View style={styles.transactionItem}>
                <Text style={styles.transactionDate}>20 April 2024 at 17:30</Text>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionType}>Debited</Text>
                  <Text style={styles.transactionAmount}>₹3000</Text>
                </View>
              </View>
              <View style={styles.transactionItem}>
                <Text style={styles.transactionDate}>18 April 2024 at 14:50</Text>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionType}>Debited</Text>
                  <Text style={styles.transactionAmount}>₹899</Text>
                </View>
              </View>
              <View style={styles.transactionItem}>
                <Text style={styles.transactionDate}>18 April 2024 at 14:50</Text>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionType}>Debited</Text>
                  <Text style={styles.transactionAmount}>₹899</Text>
                </View>
              </View>
              <View style={styles.transactionItem}>
                <Text style={styles.transactionDate}>18 April 2024 at 14:50</Text>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionType}>Debited</Text>
                  <Text style={styles.transactionAmount}>₹899</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity onPress={handleAddAmount} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Amount</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007aff',
    padding: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  balanceContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceLabel: {
    color: '#333',
    fontSize: 16,
  },
  balance: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  amountContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  amountLabel: {
    color: '#333',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 10,
  },
  amountHint: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 10,
  },
  recommendedTitle: {
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
  },
  recommendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  recommendedButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '22%',
  },
  recommendedText: {
    color: '#007aff',
    fontSize: 14,
  },
  transactionsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    // borderWidth:1,
    // maxHeight:300,
    flex:1
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  transactionTitle: {
    color: '#333',
    fontSize: 18,

    fontWeight: 'bold',
  },
  passbookButton: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
  },
  passbookText: {
    color: '#fff',
    fontSize: 14,
  },
  transactionList: {
    marginBottom: 20,
    // borderWidth:1,
    // flex:1
  },
  transactionItem: {
    marginBottom: 15,
  },
  transactionDate: {
    color: '#aaa',
    fontSize: 14,
  },
  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionType: {
    color: '#333',
    fontSize: 16,
  },
  transactionAmount: {
    color: '#333',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#007aff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    position:"absolute",
    bottom:10,
    width:300,
    alignSelf:"center",
    zIndex:2
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WalletUI;
