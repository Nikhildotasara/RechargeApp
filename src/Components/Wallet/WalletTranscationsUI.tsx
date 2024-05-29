

import WalletIcon from '../../assests/wallet.svg'; // Replace with the actual path to your SVG component
import AirtelIcon from '../../assests/airtel.svg'; // Replace with the actual path to your SVG component
import GooglePlayIcon from "../../assests/jioCloud.svg"; // Replace with the actual path to your SVG component
import JioIcon from './../../assests/jioCinema.svg'; // Replace with the actual path to your SVG component


import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Button, Platform } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

import { useTheme } from '../../utils/themeProvider';



const transactions = [
  {
    id: '1',
    date: '14 May 2024 at 01:40',
    description: 'Added to Wallet',
    amount: '₹450',
    icon: <WalletIcon width={40} height={40} />, // Replace with your actual SVG component
  },
  {
    id: '2',
    date: '1 May 2024 at 10:20',
    description: 'Airtel Digital TV',
    amount: '₹150',
    icon: <AirtelIcon width={40} height={40} />, // Replace with your actual SVG component
  },
  {
    id: '3',
    date: '28 April 2024 at 22:14',
    description: 'Google Play',
    amount: '₹200',
    icon: <GooglePlayIcon width={40} height={40} />, // Replace with your actual SVG component
  },
  {
    id: '4',
    date: '19 April 2024 at 17:29',
    description: 'Jio Prepaid',
    amount: '₹395',
    icon: <JioIcon width={40} height={40} />, // Replace with your actual SVG component
  },
];

const TransactionItem = ({ item }) =>  {
  const {theme}=useTheme();

  const getStyles=(theme)=>StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      backgroundColor:theme=="dark"?"#011F3C":"white",
      
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    month: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 10,
      paddingLeft:8,
      // color:"black"

      color:theme=="dark"?"white":"black",
    },
    transactionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingLeft:12
    },
    transactionDetails: {
      flex: 1,
      paddingLeft:10
    },
    description: {
      fontSize: 16,
      fontWeight: 'bold',
      
      color:theme=="dark"?"white":"black",
      
    },
    date: {
      fontSize: 14,

      color:theme=="dark"?"white":"black",
    },
    amount: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingRight:20,
      color:theme=="dark"?"white":"black",
    },
    filterButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 20,
      minWidth:190,
      alignSelf:"center"
    },
    filterButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    modal: {
      margin: 0,
      justifyContent: 'flex-end',
    },
    modalContent: {
      height: '90%',
      backgroundColor: '#fff',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    modalHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color:"black"
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    closeButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    modalSubHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      color:"black"
    },
    datePicker: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      // borderWidth:1,
      justifyContent:"space-around",
      minHeight:80
    },
    dateInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 5,
      borderRadius: 5,
      marginLeft: 10,
      flex: 1,
      minHeight:50,
      color:"black"
    },
    dateIcon: {
      fontSize: 25,
      marginLeft: 10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
  })

  const styles=getStyles(theme);

  return (

  <View style={styles.transactionItem}>
    {item.icon}
    <View style={styles.transactionDetails}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
    <Text style={styles.amount}>{item.amount}</Text>
  </View>
  )

}



const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFromDatePickerVisible, setFromDatePickerVisible] = useState(false);
  const [isToDatePickerVisible, setToDatePickerVisible] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const {theme}=useTheme();

  const getStyles=(theme)=>StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      backgroundColor:theme=="dark"?"#011F3C":"white",
      
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    month: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 10,
      paddingLeft:8,
      // color:"black"

      color:theme=="dark"?"white":"black",
    },
    transactionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingLeft:12
    },
    transactionDetails: {
      flex: 1,
      paddingLeft:10
    },
    description: {
      fontSize: 16,
      fontWeight: 'bold',
      
      color:theme=="dark"?"white":"black",
      
    },
    date: {
      fontSize: 14,

      color:theme=="dark"?"white":"black",
    },
    amount: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingRight:20,
      color:theme=="dark"?"#011F3C":"white",
    },
    filterButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 20,
      minWidth:190,
      alignSelf:"center"
    },
    filterButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    modal: {
      margin: 0,
      justifyContent: 'flex-end',
    },
    modalContent: {
      height: '90%',
      // backgroundColor: '#fff',
      backgroundColor:theme=="dark"?"#011F3C":"white",
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    modalHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      // color:"black"
      color:theme=="dark"?"white":"black",
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    closeButtonText: {
      fontSize: 18,
      color:theme=="dark"?"white":"black",
      fontWeight: 'bold',
    },
    modalSubHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      // color:"black"
      color:theme=="dark"?"white":"black",
    },
    datePicker: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      // borderWidth:1,
      justifyContent:"space-around",
      minHeight:80
    },
    dateInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 5,
      borderRadius: 5,
      marginLeft: 10,
      flex: 1,
      minHeight:50,
      // color:"black"
      color:theme=="dark"?"white":"black",
    },
    dateIcon: {
      fontSize: 25,
      marginLeft: 10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
  })

  const styles=getStyles(theme);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleFromDateConfirm = (date) => {
    setFromDate(date);
    setFromDatePickerVisible(false);
  };

  const handleToDateConfirm = (date) => {
    setToDate(date);
    setToDatePickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <MobileRechargeUpperBar customName="Wallet Transactions"/>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionItem item={item} />}
        ListHeaderComponent={<Text style={styles.month}>May 2024</Text>}
        ListFooterComponent={<Text style={styles.month}>April 2024</Text>}
      />
      <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onBackdropPress={toggleModal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalHeader}>Filter</Text>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>

          <Text style={styles.modalSubHeader}>Choose Time Period</Text>
          <View style={styles.datePicker}>
            <Text style={{color:theme=="dark"?"white":"black",}}>From Date:</Text>
            <TouchableOpacity style={{flexDirection:"row",maxWidth:200,alignItems:"center"}} onPress={() => setFromDatePickerVisible(true)}>
              <TextInput
                style={styles.dateInput}
                placeholder="Select Date"
                value={fromDate.toLocaleDateString()}
                editable={false}

              />
              <Text style={styles.dateIcon}>📅</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.datePicker}>
            <Text style={{color:theme=="dark"?"white":"black",}}>To Date:</Text>
            <TouchableOpacity style={{flexDirection:"row",maxWidth:200,alignItems:"center"}} onPress={() => setToDatePickerVisible(true)}>
              <TextInput
                style={styles.dateInput}
                placeholder="Select Date"
                value={toDate.toLocaleDateString()}
                editable={false}
              />
              <Text style={styles.dateIcon}>📅</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.modalSubHeader}>Payment Type</Text>
          <View style={styles.checkboxContainer}>
            <Text style={{color:theme=="dark"?"white":"black",}}>Added Money</Text>
            {/* <CheckBox value={false} /> */}
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={{color:theme=="dark"?"white":"black",}}>Recharges</Text>
            {/* <CheckBox value={false} /> */}
          </View>

          <View style={styles.modalButtons}>
            <Button title="Clear" onPress={() => {}} />
            <Button title="Apply" onPress={() => {}} color="#007BFF" />
          </View>
        </View>
      </Modal>

      <DatePicker
        modal
        open={isFromDatePickerVisible}
        date={fromDate}
        onConfirm={handleFromDateConfirm}
        onCancel={() => setFromDatePickerVisible(false)}
        mode="date"
      />

      <DatePicker
        modal
        open={isToDatePickerVisible}
        date={toDate}
        onConfirm={handleToDateConfirm}
        onCancel={() => setToDatePickerVisible(false)}
        mode="date"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  month: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingLeft:8,
    color:"black"
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingLeft:12
  },
  transactionDetails: {
    flex: 1,
    paddingLeft:10
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight:20
  },
  filterButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
    minWidth:190,
    alignSelf:"center"
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"black"
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalSubHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color:"black"
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    // borderWidth:1,
    justifyContent:"space-around",
    minHeight:80
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    flex: 1,
    minHeight:50,
    color:"black"
  },
  dateIcon: {
    fontSize: 25,
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default App;
