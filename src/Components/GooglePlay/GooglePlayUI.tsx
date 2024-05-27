import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import GooglePlayIcon from "../../assests/googlePlay.svg"; // Replace with the actual path to your SVG component
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

const GooglePlayUI = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('170');

  return (
    <View style={styles.container}>
      

      <MobileRechargeUpperBar customName="Google Play Recharge"/>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <GooglePlayIcon width={50} height={50} /> 
          <View style={styles.textContainer}>
            <Text style={styles.title}>Google Play</Text>
            <Text style={styles.subtitle}>Google Play Recharge Code</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a mobile number"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="₹ 170"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            placeholderTextColor="#888"
          />
        </View>
        <Text style={styles.note}>Min ₹10 & Max ₹5,000</Text>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedTitle}>Recommended</Text>
          <View style={styles.recommendedButtons}>
            {['200', '500', '1000', '2000'].map(value => (
              <TouchableOpacity
                key={value}
                style={styles.recommendedButton}
                onPress={() => setAmount(value)}
              >
                <Text style={styles.recommendedButtonText}>₹{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007BFF',
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  note: {
    color: '#888',
    marginBottom: 20,
  },
  recommendedContainer: {
    marginBottom: 30,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendedButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendedButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  recommendedButtonText: {
    color: '#007BFF',
  },
  buyNowButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyNowButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default GooglePlayUI;


