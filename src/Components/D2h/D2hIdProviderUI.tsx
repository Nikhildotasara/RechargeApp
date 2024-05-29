import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';


import { useTheme } from '../../utils/themeProvider';


const D2hIdProviderUI = (props:any) => {

  const {theme}=useTheme();

  const getStyles=(theme)=>StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#f5f5f5',
      backgroundColor:theme=="dark"?"#011F3C":"green"
    },
    header: {
      backgroundColor: '#007aff',
      padding: 15,
      alignItems: 'center',
    },
    headerTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      padding: 20,
      // backgroundColor:"red"
      // backgroundColor:theme=="dark"?"red":"green"
    },
    inputContainer: {
      padding: 20,
      borderRadius: 8,
      marginBottom: 20,
      backgroundColor:theme=="dark"?"#252E3E":"white",
    },
    label: {
      fontSize: 20,
      fontWeight:"800",
      marginBottom: 10,
      color:theme=="dark"?"white":"black",
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 5,
      fontSize: 16,
    },
    button: {
      backgroundColor: '#007aff',
      padding: 15,
      borderRadius: 8,
  
      position:"absolute",
      bottom:0,
      marginBottom:20,
      minWidth:300,
      alignSelf:"center",
  
  
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  })

  const styles=getStyles(theme)

  const {handleProvider}=props;
  
  return (
    <SafeAreaView style={styles.container}>
      

      <MobileRechargeUpperBar customName="Airtel Digital TV"/>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Airtel Digital TV</Text>
          <TextInput
            style={styles.input}
            placeholder="Press the Menu button on your Airtel DTH remote and select My Account to get your Subscriber ID"
            placeholderTextColor="#aaa"
          />
        </View>
        <TouchableOpacity onPress={handleProvider}  style={styles.button}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#007aff',
//     padding: 15,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   inputContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   label: {
//     color: '#333',
//     fontSize: 20,
//     fontWeight:"800",
//     marginBottom: 10,
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 5,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#007aff',
//     padding: 15,
//     borderRadius: 8,

//     position:"absolute",
//     bottom:0,
//     marginBottom:20,
//     minWidth:300,
//     alignSelf:"center",


//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

export default D2hIdProviderUI
;
