
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';


import True5g from "../../assests/true5g.svg"
import JioTv from "../../assests/jioTv.svg";
import JioCinema from "../../assests/jioCinema.svg";
import JioCloud from "../../assests/jioCloud.svg"


const PlanDetails = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <MobileRechargeUpperBar customName="Plan Details"/>

        <View style={styles.planSummary}>

<View style={{alignItems:"center",justifyContent:"space-between",flexDirection:"row" ,marginBottom:10}}>
    <Text style={{fontSize:23,fontWeight:"800"}}>Plan Price</Text>
    <Text style={{fontSize:23,fontWeight:"800"}}>Rs 299</Text>
</View>

          <View style={styles.planSummaryRow}>
            <Text style={styles.planSummaryValue}>2 GB/day</Text>
            <Text style={styles.planSummaryLabel}>28 days</Text>
          </View>
          <View style={styles.planSummaryRow}>
            <Text style={styles.planSummaryValue}>Calls</Text>
            <Text style={styles.planSummaryLabel}>Unlimited</Text>
          </View>
          <View style={styles.planSummaryRow}>
            <Text style={styles.planSummaryValue}>SMS</Text>
            <Text style={styles.planSummaryLabel}>100 SMS/day</Text>
          </View>
        </View>

        <View style={styles.extraBenefits}>
          <Text style={styles.extraBenefitsTitle}>Extra benefits</Text>

          <View style={styles.benefitItem}>
            {/* <Image 
              source={{ uri: 'https://via.placeholder.com/24x24.png?text=5G' }} 
              style={styles.benefitIcon} 
            /> */}

            <True5g/>
            <View style={styles.benefitTextWrapper}>
              <Text style={styles.benefitTitle}>True 5G</Text>
              <Text style={styles.benefitDescription}>Unlimited True 5G Data for eligible subscribers</Text>
            </View>
          </View>

          <View style={styles.benefitItem}>
            

            <JioTv/>

            <View style={styles.benefitTextWrapper}>
              <Text style={styles.benefitTitle}>JioTV</Text>
              <Text style={styles.benefitDescription}>A wide range of TV channels across languages and genres. Enjoy 800+ TV channels, incl. 100+ HD channels</Text>
            </View>
          </View>

          <View style={styles.benefitItem}>
            
            <JioCinema/>
            <View style={styles.benefitTextWrapper}>
              <Text style={styles.benefitTitle}>JioCinema</Text>
              <Text style={styles.benefitDescription}>Watch 10,000+ movies, LIVE sports and much more (Premium Subscription not included)</Text>
            </View>
          </View>

          <View style={styles.benefitItem}>
           

           <JioCloud/>
            <View style={styles.benefitTextWrapper}>
              <Text style={styles.benefitTitle}>JioCloud</Text>
              <Text style={styles.benefitDescription}>Backup your files and contacts on the app</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.detailsText}>
            Data: 2 GB/day| Voice: Unlimited Calls| SMS : 100 SMS/day| Validity: 28 Days; True 5G : Unlimited True 5G Data for eligible subscribers; Complimentary subscription to Jio Apps - JioTV, JioCinema (Premium Subscription not included), JioCloud; Note: Choose Rs. 398 Plan to get 12 Premium OTT apps (Rs. 299 Plan benefits + Rs. 99 extra)
          </Text>
        </View>

        <TouchableOpacity style={styles.rechargeButton}>
          <Text style={styles.rechargeButtonText}>Proceed to Recharge</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    // padding: 16,
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
  planSummary: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  planSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  planSummaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  planSummaryLabel: {
    fontSize: 16,
    color: '#888',
  },
  extraBenefits: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  extraBenefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  benefitIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  benefitTextWrapper: {
    flex: 1,
    paddingLeft:10
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  benefitDescription: {
    fontSize: 14,
    color: '#888',
  },
  detailsSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsText: {
    fontSize: 14,
    color: '#888',
  },
  rechargeButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    maxWidth:400,
    alignSelf:"center"
  },
  rechargeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlanDetails;
