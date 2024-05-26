import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import MobileRecharge from "../assests/mobileRecharge.svg";
import Cards from "../assests/cards.svg";
import Dth from "../assests/dth.svg";
import Fasttag from "../assests/fasttag.svg";


import Electricity from "../assests/electricity.svg";
import GasCylinder from "../assests/gasCylinder.svg";
import Water from "../assests/water.svg";
import PipedGas from "../assests/pipedGas.svg";
import PostPaid from "../assests/postpaid.svg";
import Broadband from "../assests/broadband.svg";
import Landline from "../assests/landline.svg";
import EducationFees from "../assests/educationFees.svg";

import Insurance from "../assests/insurance.svg"
import LoanRepayment from "../assests/loanRepayment.svg"
import MunicipalTax from "../assests/municipalTax.svg";

const buttons = [
  { icon: <Insurance width={40} height={40} />, label: "Insurance", accessibilityLabel: "Insurance" },
  { icon: <LoanRepayment width={40} height={40} />, label: "Loan \n Repayment", accessibilityLabel: "Loan Repayment" },
  { icon: <MunicipalTax width={40} height={40} />, label: "Municipal Tax", accessibilityLabel: "Municipal Tax" },
  
];

function FinancialServices() {
    const renderRows = () => {
      const rows = [];
      for (let i = 0; i < buttons.length; i += 4) {
        rows.push(
          <View key={i} style={styles.iconContainer}>
            {buttons.slice(i, i + 4).map((button, index) => (
              <TouchableOpacity
                key={index}
                style={styles.iconButton}
                accessibilityLabel={button.accessibilityLabel}
                accessible={true}
              >
                {button.icon}
                <Text style={styles.iconText}>{button.label}</Text>
              </TouchableOpacity>
            ))}
            {/* Fill the remaining space in the row with empty views if less than 4 items */}
            {Array(4 - buttons.slice(i, i + 4).length).fill().map((_, index) => (
              <View key={`empty-${index}`} style={styles.iconButton}></View>
            ))}
          </View>
        );
      }
      return rows;
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.categoryName}>Financial Services and Taxes</Text>
        {renderRows()}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "95%",
    //   borderWidth: 1,
      borderRadius: 18,
      justifyContent: "space-around",
      flexDirection: "column",
      padding: 10,
      marginTop:15,
      shadowOpacity: 0.8,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
    },
    categoryName: {
      fontSize: 20,
      color: "black",
      fontWeight: "800",
      marginBottom: 10,
      paddingLeft: 10,
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginVertical: 5,
    },
    iconButton: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 65,
      padding: 5,
      height:70
    },
    iconText: {
      textAlign: "center",
      fontSize: 12,
      color:"black"
    },
  });
  
  export default FinancialServices;