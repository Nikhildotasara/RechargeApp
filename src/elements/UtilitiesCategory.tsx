import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { useTheme } from '../utils/themeProvider';

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

const buttons = [
    { icon: <Electricity width={30} height={30} />, label: "Electricity ", accessibilityLabel: "Electricity" },
    { icon: <GasCylinder width={30} height={30} />, label: "Gas \n Cylinder", accessibilityLabel: "Gas Cylinder" },
    { icon: <Water width={30} height={30} />, label: "Water", accessibilityLabel: "Water" },
    { icon: <PipedGas width={30} height={30} />, label: "Piped \n Gas", accessibilityLabel: "Piped Gas" },
    { icon: <PostPaid width={30} height={30} />, label: "PostPaid", accessibilityLabel: "PostPaid" },
    { icon: <Broadband width={30} height={30} />, label: "Broadband", accessibilityLabel: "Broadband" },
    { icon: <Landline width={30} height={30} />, label: "Landline", accessibilityLabel: "Landline" },
    { icon: <EducationFees width={40} height={40} />, label: "Education Fees", accessibilityLabel: "Education Fees" },
  ];

function UtilitiesCategory() {

  const {theme}=useTheme();

  const getStyles=(theme)=>StyleSheet.create({
    container: {
      width: "95%",
    //   borderWidth: 1,
      borderRadius: 18,
      justifyContent: "space-around",
      flexDirection: "column",
      padding: 10,
      marginBottom:10,
      shadowOpacity: 0,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 5,
      elevation: 5,
      backgroundColor:theme==="dark"?"#252E3E" :"white",

    },
    categoryName: {
      fontSize: 16,
      // color: "black",
      color:theme==="dark"?"white":"black",
      fontWeight: "600",
      marginBottom: 10,
      // paddingLeft: 10,
      top:12,
      left:12
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginVertical: 5,
      // top:9
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
      fontSize: 14,
      // color:"black",
      color:theme==="dark"?"white":"black"
    },
  })

  const styles=getStyles(theme)

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
        <Text style={styles.categoryName}>Utilities</Text>
        {renderRows()}
      </View>
    );
  }
  
  // const styles = StyleSheet.create({
  //   container: {
  //     width: "95%",
  //   //   borderWidth: 1,
  //     borderRadius: 18,
  //     justifyContent: "space-around",
  //     flexDirection: "column",
  //     padding: 10,
  //     marginBottom:10,
  //     shadowOpacity: 0.8,
  //   shadowOffset: { width: 3, height: 3 },
  //   shadowRadius: 5,
  //   elevation: 5,
  //   backgroundColor: '#fff',

  //   },
  //   categoryName: {
  //     fontSize: 20,
  //     color: "black",
  //     fontWeight: "800",
  //     marginBottom: 10,
  //     paddingLeft: 10,
  //   },
  //   iconContainer: {
  //     flexDirection: "row",
  //     justifyContent: "flex-start",
  //     alignItems: "center",
  //     marginVertical: 5,
  //   },
  //   iconButton: {
  //     flex: 1,
  //     justifyContent: "space-between",
  //     alignItems: "center",
  //     minHeight: 65,
  //     padding: 5,
  //     height:70
  //   },
  //   iconText: {
  //     textAlign: "center",
  //     fontSize: 12,
  //     color:"black"
  //   },
  // });
  
  export default UtilitiesCategory;