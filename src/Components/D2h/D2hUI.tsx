import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

import Search from "../../assests/search.svg"

const providers = [
  { name: 'Airtel Digital TV', logo: 'https://via.placeholder.com/24x24.png?text=A' },
  { name: 'Dish TV', logo: 'https://via.placeholder.com/24x24.png?text=D' },
  { name: 'D2H', logo: 'https://via.placeholder.com/24x24.png?text=2H' },
  { name: 'Sun Direct', logo: 'https://via.placeholder.com/24x24.png?text=S' },
  { name: 'Tata Play (Formerly Tatasky)', logo: 'https://via.placeholder.com/24x24.png?text=T' },
];

const WalletUI = (props) => {

  const {handleProvider}=props;

  const [searchQuery, setSearchQuery] = useState('');

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      

      <MobileRechargeUpperBar customName="Select Providers"/>

      <View style={styles.searchContainer}>

<Search/>

        <TextInput
          style={styles.searchInput}
          placeholder="Search for Provider"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={"black"}
        />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.providersContainer}>
          <Text style={styles.providersTitle}>All Providers</Text>
          {filteredProviders.map((provider, index) => (
            <TouchableOpacity onPress={handleProvider} key={index} style={styles.providerItem}>
              <Image source={{ uri: provider.logo }} style={styles.providerLogo} />
              <Text style={styles.providerName}>{provider.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop:10
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  providersContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,

  },
  providersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"black"
  },
  providerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  providerLogo: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  providerName: {
    fontSize: 16,
    color:"black"
  },
});

export default WalletUI;
