
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { Header, Card, Icon, Avatar } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

import { useNavigation } from '@react-navigation/native';


const RechargePlanUI = (props:any) => {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [selectedOperator, setSelectedOperator] = useState('Jio');
  const [selectedState, setSelectedState] = useState('Odisha');
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = ['Popular', 'Cricket packs', 'Smartphone', 'Data'];
  const operators = ['Airtel', 'Jio', 'BSNL', 'Vi'];
  const states = ['Odisha', 'Maharashtra', 'Karnataka', 'Tamil Nadu'];


  const navigation=useNavigation();

  useEffect(() => {
    fetchPlans();
  }, [selectedCategory, selectedOperator, selectedState]);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      // Simulating an API call with a timeout and sample response
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({
          json: () => Promise.resolve({
            "plans": [
              {
                "price": 19,
                "data": "1.5 GB",
                "validity": "Base Plan validity",
                "calls": "NA",
                "description": "For users with an active validity plan"
              },
              {
                "price": 299,
                "data": "2 GB/day",
                "validity": "28 days",
                "calls": "Unlimited",
                "description": "True 5G Data and more"
              },
              {
                "price": 399,
                "data": "3 GB/day",
                "validity": "28 days",
                "calls": "Unlimited",
                "description": "Unlimited calls with extra benefits"
              },
              {
                "price": 199,
                "data": "1 GB/day",
                "validity": "24 days",
                "calls": "Unlimited",
                "description": "Basic plan with daily data limit"
              }
              ,{
                "price": 399,
                "data": "3 GB/day",
                "validity": "28 days",
                "calls": "Unlimited",
                "description": "Unlimited calls with extra benefits"
              },
              {
                "price": 199,
                "data": "1 GB/day",
                "validity": "24 days",
                "calls": "Unlimited",
                "description": "Basic plan with daily data limit"
              }
            ]
          })
        }), 1000)
      );
  
      const data = await response.json();
      setPlans(data.plans);
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };


  const handleRechargePlan=()=>{
    console.log("Recharge number")
    navigation.navigate("RechargeBillScreen")

  }
  

  const renderPlans = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#007AFF" />;
    }

    return plans.map((plan, index) => (
      <Card key={index} containerStyle={styles.card}>
        <TouchableOpacity onPress={handleRechargePlan} style={styles.planContainer}>
          <Text style={styles.priceText}>{`₹${plan.price}`}</Text>
          <View style={styles.planDetails}>
            <Text style={styles.planText}>{`Data: ${plan.data}`}</Text>
            <Text style={styles.planText}>{`Validity: ${plan.validity}`}</Text>
            <Text style={styles.planText}>{`Calls: ${plan.calls}`}</Text>
          </View>
          <Icon name="chevron-right" type="material" />
        </TouchableOpacity>
        <Text style={styles.subText}>{plan.description}</Text>
      </Card>
    ));
  };

  return (
    <View style={styles.container}>
    <MobileRechargeUpperBar customName="Select a recharge plan"/>
    <View style={styles.profileContainer}>
      <Avatar
        rounded
        size="large"
        source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
        containerStyle={styles.avatar}
      />
      <View style={styles.numberContainer}>
        <Text style={styles.myNumberText}>My Number</Text>
        <Text style={styles.numberText}>0123456789</Text>
      </View>
    </View>
    <View style={styles.selectorContainer}>
      <ModalDropdown
        options={operators}
        defaultValue={selectedOperator}
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownDropdown}
        onSelect={(index, value) => setSelectedOperator(value)}
      />
      <ModalDropdown
        options={states}
        defaultValue={selectedState}
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownDropdown}
        onSelect={(index, value) => setSelectedState(value)}
      />
    </View>
    <TextInput
      placeholder="Search for plan or enter amount"
      style={styles.searchInput}
    />
  
    <View style={{ flexDirection: 'row', maxHeight: 100,  }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" ,marginBottom:0,paddingLeft:18 }}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              selectedCategory === category && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === category && styles.tabTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  
    <ScrollView contentContainerStyle={{ flexGrow:1,marginTop:10 ,paddingBottom:20}} showsVerticalScrollIndicator={false} style={styles.plansContainer}>
      {renderPlans()}
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    backgroundColor: '#007AFF',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  avatar: {
    marginRight: 16,
  },
  numberContainer: {
    flex: 1,
  },
  myNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  numberText: {
    fontSize: 16,
    color: 'gray',
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
  },
  dropdown: {
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: '#007AFF',
  },
  dropdownDropdown: {
    width: '45%',
  },
  searchInput: {
    padding: 10,
    margin: 16,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  tabContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  tabButton: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#007AFF',
  },
  tabTextActive: {
    color: '#fff',
  },
  plansContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 0,  // Ensure no extra padding at the top
  },
  card: {
    borderRadius: 10,
    marginVertical: 10,
  },
  planContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  planDetails: {
    flex: 1,
    marginLeft: 16,
  },
  planText: {
    fontSize: 16,
    color: '#000',
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default RechargePlanUI;

