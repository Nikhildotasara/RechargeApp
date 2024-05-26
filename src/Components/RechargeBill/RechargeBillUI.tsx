

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

import { useNavigation } from '@react-navigation/native';

import UPI from "../../assests/upi.svg";
import Wallet from "../../assests/wallet.svg"

const MyApp = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation=useNavigation();
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleDetails=()=>{
    navigation.navigate("PlanDetailsScreen")
  }



  return (
    <ScrollView style={styles.container}>

        <MobileRechargeUpperBar customName="Pay"/>

      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileNumber}>My Number</Text>
          <Text style={styles.profileNumber}>0123456789</Text>
        </View>
      </View>

      <View style={styles.planSection}>
        <View style={styles.planHeader}>
          <Text style={styles.planPrice}>₹ 299</Text>
          <TouchableOpacity style={styles.changePlanButton}>
            <Text style={styles.changePlanText}>CHANGE PLAN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.planDetail}>Data: 2GB/Day</Text>
        <Text style={styles.planDetail}>Validity: 28 Days</Text>
        <Text style={styles.planDetail}>Voice: Unlimited Calls</Text>
        <Text style={styles.planDetail}>SMS: 100 SMS/day</Text>
        <Text style={styles.planNote}>
          Note: Choose Rs. 398 Plan to get 12 Premium OTT apps (Rs. 299 Plan benefits + Rs. 99 extra)
        </Text>
        <View style={styles.additionalBenefits}>
          <View style={styles.benefit}>
            <Text style={styles.benefitText}>True 5G Data</Text>
          </View>
          <View style={styles.benefit}>
            <Text style={styles.benefitText}>JioTV</Text>
          </View>

          <TouchableOpacity onPress={handleDetails}  style={styles.benefit}>
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.billSection}>
        <View style={styles.billRow}>
          <Text style={styles.billLabel}>Plan price</Text>
          <Text style={styles.billAmount}>₹ 299</Text>
        </View>
        <View style={styles.billRow}>
          <Text style={styles.billLabel}>Discount</Text>
          <Text style={styles.billAmount}>- ₹ 49</Text>
        </View>
        <View style={styles.billRow}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalAmount}>₹ 250</Text>
        </View>
        <Text style={styles.savingsText}>You will save ₹ 49 on this</Text>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={toggleModal}>
        <Text style={styles.payButtonText}>PROCEED TO PAY</Text>
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        style={styles.bottomModal}
        backdropOpacity={0.5}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Payment Options</Text>
          <TouchableOpacity style={styles.paymentOption}>
            <View style={styles.paymentOptionTextWrapper}>
                
              <UPI />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption}>
            <View style={styles.paymentOptionTextWrapper}>
              {/* <Text style={styles.paymentOptionText}>Wallet</Text> */}

              <Wallet/>
              <Text style={styles.walletBalance}>Available Balance: ₹1300</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payButtonModal} onPress={toggleModal}>
            <Text style={styles.payButtonTextModal}>PAY ₹250</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    // padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileNumber: {
    fontSize: 16,
  },
  planSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  changePlanButton: {
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 4,
  },
  changePlanText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  planDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
  planNote: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  additionalBenefits: {
    flexDirection: 'row',
    marginTop: 8,
  },
  benefit: {
    backgroundColor: '#e7f3ff',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  benefitText: {
    color: '#007bff',
  },
  billSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  billLabel: {
    fontSize: 16,
  },
  billAmount: {
    fontSize: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  savingsText: {
    fontSize: 14,
    color: 'green',
    marginTop: 8,
  },
  payButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    minWidth:300,
    alignSelf:"center"
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '50%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paymentOption: {
    width: '100%',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentOptionTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  paymentOptionText: {
    fontSize: 16,
  },
  walletBalance: {
    fontSize: 14,
    color: '#888',
  },
  payButtonModal: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
  },
  payButtonTextModal: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyApp;
