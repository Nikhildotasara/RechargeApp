import ContactSvg from '../../assests/contact.svg';
import UserSvg from '../../assests/userImage.svg';

import AirtelSvg from '../../assests/airtel.svg';

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import MobileRechargeUpperBar from './MobileRechargeUpperBar';

function MobileRechargeUI(props: any) {
  const {handleRecharge} = props;

  const [recents, setRecents] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '1111111',
      lastRecharge: '2024-05-25',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '2222222',
      lastRecharge: '2024-05-24',
    },
    {
      id: 3,
      name: 'John Doe',
      phone: '1111111',
      lastRecharge: '2024-05-25',
    },
    {
      id: 4,
      name: 'John Doe',
      phone: '1111111',
      lastRecharge: '2024-05-25',
    },
    {
      id: 5,
      name: 'John Doe',
      phone: '1111111',
      lastRecharge: '2024-05-25',
    },
    {
      id: 6,
      name: 'John Doe',
      phone: '1111111',
      lastRecharge: '2024-05-25',
    },
    {
      id: 7,
      name: 'John Doe',
      phone: '1111111',
      lastRecharge: '2024-05-25',
    },
    {
      id: 8,
      name: 'Jane Doe',
      phone: '2222222',
      lastRecharge: '2024-05-24',
    },
    {
      id: 9,
      name: 'John Doe',
      phone: '1111111',
      lastRecharge: '2024-05-25',
    },
    {
      id: 11,
      name: 'Jane Doe',
      phone: '2222222',
      lastRecharge: '2024-05-24',
    },
    {
      id: 12,
      name: 'John Doe',
      phone: '1111111',
      lastRecharge: '2024-05-25',
    },
    {
      id: 22,
      name: 'Jane Doe',
      phone: '2222222',
      lastRecharge: '2024-05-24',
    },
  ]);

  //   useEffect(() => {
  //     // Replace with your actual API call
  //     fetch('https://api.example.com/recents')
  //       .then(response => response.json())
  //       .then(data => setRecents(data))
  //       .catch(error => console.error(error));
  //   }, []);

  const renderRecentItem = ({item}) => (
    <TouchableOpacity onPress={handleRecharge} style={styles.recentItem}>
      <AirtelSvg />
      <View>
        <Text style={styles.recentItemText}>{item.name}</Text>
        <Text style={styles.recentItemText}>{item.phone}</Text>
        <Text style={styles.recentItemText}>
          Last Recharge at {item.lastRecharge}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <MobileRechargeUpperBar customName="Mobile Recharge" />

      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Phone number" style={styles.phoneInput} />

        <TouchableOpacity>
          <ContactSvg />
        </TouchableOpacity>
      </View>

      <View style={styles.myNumberContainer}>
        <UserSvg />

        <View>
          <Text style={styles.myNumberText}>My Number</Text>
          <Text style={styles.phoneNumber}>111111111</Text>
        </View>

        <TouchableOpacity
          onPress={handleRecharge}
          style={styles.rechargeButton}>
          <Text style={styles.rechargeButtonText}>Recharge</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentsContainer}>
        <Text style={styles.recentsTitle}>Recents</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={recents}
          renderItem={renderRecentItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    alignItems: 'center',
  },
  phoneInput: {
    borderRadius: 17,
    width: '80%',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  myNumberContainer: {
    minWidth: 375,
    marginTop: 10,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  myNumberText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  phoneNumber: {
    fontSize: 15,
    color: 'black',
  },
  rechargeButton: {
    backgroundColor: '#0466C8',
    borderRadius: 16,
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rechargeButtonText: {
    color: 'white',
  },
  recentsContainer: {
    borderRadius: 12,
    width: '90%',
    flex: 1,
    marginTop: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  recentsTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginBottom: 10,
  },
  recentItem: {
    marginTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  recentItemText: {
    color: 'black',
    fontSize: 16,
  },
});

export default MobileRechargeUI;
