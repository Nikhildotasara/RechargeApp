import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';


import { useTheme } from '../../utils/themeProvider';


import CallSvg from "../../assests/call.svg"
import ChatSvg from "../../assests/chat.svg"
import BillSvg from "../../assests/bill.svg"
import TicketSvg from "../../assests/ticket.svg"
import PhoneMan from "../../assests/phoneMan.svg"

const HelpScreenUI = () => {

  const {theme}=useTheme();

  const getStyles=(theme)=>StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:theme=="dark"?"#011F3C":"white",
      alignItems:"center"
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 16,
      paddingLeft:10
      , color:theme=="dark"?"white":"black",
    },
    button: {
      backgroundColor:theme=="dark"?"#252E3E":"white",
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      flexDirection:"row",
      alignItems:"center",
      minWidth:360
      
    },
    buttonText: {
      fontSize: 18,
      paddingLeft:17,
      color:theme=="dark"?"white":"black",
      
    },
  })

  const styles=getStyles(theme)

  return (
    <View style={styles.container}>

        <MobileRechargeUpperBar customName="Help"/>

      <Text style={styles.header}>Need Help?</Text>
      <TouchableOpacity style={styles.button}>

        <CallSvg/>

        <Text style={styles.buttonText}>Call Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ChatSvg/>
        <Text style={styles.buttonText}>Chat Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <BillSvg/>
        <Text style={styles.buttonText}>Recharge & Bill Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <TicketSvg/>
        <Text style={styles.buttonText}>View Tickets</Text>
      </TouchableOpacity>


      <View style={{marginTop:50}}>
      <PhoneMan/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    paddingLeft:10
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    flexDirection:"row",
    alignItems:"center",
    minWidth:360
    
  },
  buttonText: {
    fontSize: 18,
    paddingLeft:10,
    color:"black"
  },

});

export default HelpScreenUI;
