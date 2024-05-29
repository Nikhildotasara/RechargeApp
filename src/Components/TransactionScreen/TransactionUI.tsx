import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

import { useTheme } from '../../utils/themeProvider';

const transactions = [
  {
    id: '1',
    month: 'May 2024',
    data: [
      {
        id: '1',
        name: 'Airtel Digital TV',
        amount: '₹150',
        date: '1 May 2024 at 10:20',
        icon: 'https://example.com/airtel-icon.png',
        from: 'From'
      },
    ],
  },
  {
    id: '2',
    month: 'April 2024',
    data: [
      {
        id: '2',
        name: 'Google Play',
        amount: '₹200',
        date: '28 April 2024 at 22:14',
        icon: 'https://example.com/google-play-icon.png',
        from: 'From'
      },
      {
        id: '3',
        name: 'Jio Prepaid',
        amount: '₹250',
        date: '19 April 2024 at 17:29',
        icon: 'https://example.com/jio-icon.png',
        from: 'From'
      },
     
    ],
  },
];

const TransactionUI = (props) => {

  const {theme}=useTheme();
    const {handleTransaction}=props;

    const getStyles=(theme)=>StyleSheet.create({
      container: {
        flex: 1,
        // backgroundColor: '#fff',
        backgroundColor:theme=="dark"?"#011F3C":"white",
      },
      monthContainer: {
        marginVertical: 8,
        // backgroundColor:theme=="dark"?"#252E3E":"white",
        // backgroundColor:"red",
      },
      monthText: {
        fontSize: 16,
        fontWeight: 'bold',
        // backgroundColor: '#f0f0f0',
        backgroundColor:theme=="dark"?"#252E3E":"white",
        padding: 8,
        color:theme=="dark"?"white":"black",
      },
      transactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        // backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
         backgroundColor:theme=="dark"?"#252E3E":"white",
        
      },
      icon: {
        width: 40,
        height: 40,
        marginRight: 16,
      },
      transactionDetails: {
        flex: 1,
      },
      transactionName: {
        fontSize: 16,
        fontWeight: 'bold',
        // color:"black"
         color:theme=="dark"?"white":"black",
      },
      transactionDate: {
        fontSize: 14,
        color:theme=="dark"?"white":"black",
      },
      transactionAmountContainer: {
        alignItems: 'flex-end',
      },
      transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color:theme=="dark"?"white":"black",
      },
      transactionFrom: {
        fontSize: 14,
        color:theme=="dark"?"white":"black",
      },
    })

    const styles=getStyles(theme)

  const renderTransaction = ({ item }) => (
    <TouchableOpacity  onPress={handleTransaction} style={styles.transactionContainer}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <View style={styles.transactionAmountContainer}>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
        <Text style={styles.transactionFrom}>{item.from}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderMonth = ({ item }) => (
    <View style={styles.monthContainer}>
      <Text style={styles.monthText}>{item.month}</Text>
      <FlatList
        data={item.data}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  return (
    <View style={styles.container}>
        <MobileRechargeUpperBar customName="Transactions"/>
      <FlatList
        data={transactions}
        renderItem={renderMonth}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};



export default TransactionUI;
