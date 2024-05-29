// import React from 'react';
// import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

// import { useNavigation } from '@react-navigation/native';


// import GooglePlay from "../assests/googlePlay.svg"
// import SubscriptionFees from "../assests/subscriptionFees.svg"
// import HousingAndSociety from "../assests/housingAndSociety.svg"
// import ClubAndAssociations from "../assests/clubAndAssociations.svg"
// import HospitalAndTechnology from "../assests/hospitalAndTechnology"

// const buttons = [
//   { icon: <GooglePlay width={40} height={40} />, label: "Google Play", accessibilityLabel: "Google Play" },
//   { icon: <SubscriptionFees width={40} height={40} />, label: "Subscription \n Fees", accessibilityLabel: "Subscription Fees" },
//   { icon: <HousingAndSociety width={40} height={40} />, label: "Housing & \n Society", accessibilityLabel: "Housing & Society" },
//   { icon: <ClubAndAssociations width={40} height={40} />, label: "Clubs & Associations", accessibilityLabel: "Clubs & Associations" },
//   { icon: <HospitalAndTechnology width={40} height={40} />, label: "Hospital \n Technology", accessibilityLabel: "Hospital & Technology" },
  
// ];

// function MoreServices() {

//   const navigation=useNavigation();

//   const handleGooglePlay=()=>{
//     navigation.navigate("GooglePlayScreen")

//   }

//     const renderRows = () => {
//       const rows = [];
//       for (let i = 0; i < buttons.length; i += 4) {
//         rows.push(
//           <View key={i} style={styles.iconContainer}>
//             {buttons.slice(i, i + 4).map((button, index) => (
//               <TouchableOpacity
//               onPress={handleGooglePlay}
//                 key={index}
//                 style={styles.iconButton}
//                 accessibilityLabel={button.accessibilityLabel}
//                 accessible={true}
//               >
//                 {button.icon}
//                 <Text style={styles.iconText}>{button.label}</Text>
//               </TouchableOpacity>
//             ))}
//             {/* Fill the remaining space in the row with empty views if less than 4 items */}
//             {Array(4 - buttons.slice(i, i + 4).length).fill().map((_, index) => (
//               <View key={`empty-${index}`} style={styles.iconButton}></View>
//             ))}
//           </View>
//         );
//       }
//       return rows;
//     };
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.categoryName}>More Services </Text>
//         {renderRows()}
//       </View>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       width: "95%",
//     //   borderWidth: 1,
//       borderRadius: 18,
//       justifyContent: "space-around",
//       flexDirection: "column",
//       padding: 10,
//       marginTop:15,
//       shadowOpacity: 0.8,
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     elevation: 5,
//     backgroundColor: '#fff',
//     },
//     categoryName: {
//       fontSize: 20,
//       color: "black",
//       fontWeight: "800",
//       marginBottom: 10,
//       paddingLeft: 10,
//     },
//     iconContainer: {
//       flexDirection: "row",
//       justifyContent: "flex-start",
//       alignItems: "center",
//       marginVertical: 5,
//     },
//     iconButton: {
//       flex: 1,
//       borderWidth:0,
//     //   backgroundColor:"red"
//       justifyContent: "space-between",
//       alignItems: "center",
//       minHeight: 65,
//       padding: 5,
//       height:70,
//       textAlign:"center"
//     },
//     iconText: {
//       textAlign: "center",
//       fontSize: 12,
//       color:"black",
      
//     },
//   });
  
//   export default MoreServices;
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../utils/themeProvider';


import GooglePlay from "../assests/googlePlay.svg"
import SubscriptionFees from "../assests/subscriptionFees.svg"
import HousingAndSociety from "../assests/housingAndSociety.svg"
import ClubAndAssociations from "../assests/clubAndAssociations.svg"
import HospitalAndTechnology from "../assests/hospitalAndTechnology"



const buttons = [
  { icon: <GooglePlay width={30} height={30} />, label: "Google Play", accessibilityLabel: "Google Play", screen: "GooglePlayScreen" },
  { icon: <SubscriptionFees width={30} height={30} />, label: "Subscription \n Fees", accessibilityLabel: "Subscription Fees", screen: "SubscriptionFeesScreen" },
  { icon: <HousingAndSociety width={30} height={30} />, label: "Housing & \n Society", accessibilityLabel: "Housing & Society", screen: "HousingSocietyScreen" },
  { icon: <ClubAndAssociations width={30} height={30} />, label: "Clubs & Associations", accessibilityLabel: "Clubs & Associations", screen: "ClubsAssociationsScreen" },
  { icon: <HospitalAndTechnology width={30} height={30} />, label: "Hospital \n Technology", accessibilityLabel: "Hospital & Technology", screen: "HospitalTechnologyScreen" },
];

function MoreServices() {
  const navigation = useNavigation();

  const {theme}=useTheme();

  const getStyles=(theme)=>StyleSheet.create({
    container: {
      width: "95%",
      borderRadius: 18,
      justifyContent: "space-around",
      flexDirection: "column",
      padding: 10,
      marginTop: 15,
      shadowOpacity: 0.8,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    backgroundColor:theme==="dark"?"#252E3E" :"white",
    },
    categoryName: {
      fontSize: 20,
      color:theme==="dark"?"white":"black",
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
      height: 70,
      textAlign: "center",
    },
    iconText: {
      textAlign: "center",
      fontSize: 12,
      color:theme==="dark"?"white":"black",
    },
  })

  const styles=getStyles(theme)

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < buttons.length; i += 4) {
      rows.push(
        <View key={i} style={styles.iconContainer}>
          {buttons.slice(i, i + 4).map((button, index) => (
            <TouchableOpacity
              onPress={() => handlePress(button.screen)}
              key={index}
              style={styles.iconButton}
              accessibilityLabel={button.accessibilityLabel}
              accessible={true}
            >
              {button.icon}
              <Text style={styles.iconText}>{button.label}</Text>
            </TouchableOpacity>
          ))}
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
      <Text style={styles.categoryName}>More Services</Text>
      {renderRows()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    borderRadius: 18,
    justifyContent: "space-around",
    flexDirection: "column",
    padding: 10,
    marginTop: 15,
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
    height: 70,
    textAlign: "center",
  },
  iconText: {
    textAlign: "center",
    fontSize: 12,
    color: "black",
  },
});

export default MoreServices;
