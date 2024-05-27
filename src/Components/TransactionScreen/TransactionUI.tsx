import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

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

    const {handleTransaction}=props;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  monthContainer: {
    marginVertical: 8,
  },
  monthText: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionFrom: {
    fontSize: 14,
    color: '#666',
  },
});

export default TransactionUI;
