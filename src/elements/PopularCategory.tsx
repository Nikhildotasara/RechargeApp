import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import MobileRecharge from "../assests/mobileRecharge.svg";
import Cards from "../assests/cards.svg";
import Dth from "../assests/dth.svg";
import Fasttag from "../assests/fasttag.svg"




function PopularCategory(props:any) {

  const {handleMobileRecharge,handleDth}=props;

  return (
    <View style={styles.container}>
      <Text style={styles.categoryName}>Popular</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity  onPress={handleMobileRecharge} style={styles.iconButton} accessibilityLabel="Mobile Recharge" accessible={true}>
          <MobileRecharge />
          <Text style={styles.iconText}>Mobile {"\n"} Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDth} style={styles.iconButton} accessibilityLabel="DTH Recharge" accessible={true}>
          <Dth />
          <Text style={styles.iconText}>DTH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} accessibilityLabel="Credit Cards Payments" accessible={true}>
          <Cards />
          <Text style={styles.iconText}>Credit Cards Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} accessibilityLabel="Fasttag Recharge" accessible={true}>
          <Fasttag />
          <Text style={styles.iconText}>Fasttag Recharge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    // borderWidth: 1,
    borderRadius: 18,
    justifyContent: "space-around",
    flexDirection: "column",
    minHeight: 130,
    padding: 10,
    marginBottom: 15,
    shadowOpacity: 0.8,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#fff', // Ensure background color is set
  },
  categoryName: {
    fontSize: 20,
    color: "black",
    fontWeight: "800",
    marginBottom: 10,
    paddingLeft: 10
  },
  iconContainer: {
    borderWidth: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconButton: {
    borderWidth: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.20,
    minHeight: 65,
    height:75,
    padding: 5,
  },
  iconText: {
    textAlign: "center",
    fontSize: 12,
    color:"black"
  },
});

export default PopularCategory;