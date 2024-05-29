import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Clipboard } from 'react-native';
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

import { useTheme } from '../../utils/themeProvider';


import Copy from "../../assests/copy.svg"
import Repeat from "../../assests/repeat.svg"
import Share from "../../assests/share.svg"
import Split from "../../assests/split.svg"

const TransactionResultUI = () => {
  const copyToClipboard = (text) => {
    Clipboard.setString(text);
   
  };

  const {theme}=useTheme();

  const getStyles=(theme)=>StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:theme=="dark"?"#252E3E":"white",
      // padding: 16,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: 'green',
      padding: 16,
      textAlign: 'center',
      borderRadius: 4,
    },
    card: {
      marginTop: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      
      backgroundColor:theme=="dark"?"#011F3C":"white",
    },
    headerSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    icon: {
      width: 40,
      height: 40,
      marginRight: 16,
    },
    headerText: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color:theme=="dark"?"white":"black",
    },
    subtitle: {
      fontSize: 16,
      color:theme=="dark"?"white":"black",
    },
    amount: {
      fontSize: 18,
      fontWeight: 'bold',
      color:theme=="dark"?"white":"black",
    },
    section: {
      marginTop: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      color:theme=="dark"?"white":"black",
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 4,
    },
    detailLabel: {
      fontSize: 16,
      color:theme=="dark"?"white":"black",
    },
    detailValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color:theme=="dark"?"white":"black",
    },
    detailValueRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    copyText: {
      fontSize: 16,
      color:theme=="dark"?"white":"black",
      marginLeft: 8,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 16,
    },
    footerButton: {
      flex: 1,
      alignItems: 'center',
      padding: 12,
      // borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginHorizontal: 4,
      justifyContent:"space-around"
  
    },
    footerButtonText: {
      fontSize: 16,
      color:theme=="dark"?"white":"black",
      textAlign:"center"
    },
    helpButton: {
      marginTop: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      alignItems: 'center',
      backgroundColor:theme=="dark"?"#011F3C":"white",
    },
    helpButtonText: {
      fontSize: 16,
      color:theme=="dark"?"white":"black",
    },
  })

  const styles=getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <MobileRechargeUpperBar customName="Recharge Successful"/>
      <View style={styles.card}>
        <View style={styles.headerSection}>
          <Image
            source={{ uri: 'https://example.com/jio-icon.png' }} // Replace with your icon URL
            style={styles.icon}
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>Jio Prepaid</Text>
            <Text style={styles.subtitle}>9876357289</Text>
          </View>
          <Text style={styles.amount}>₹250</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Plan price</Text>
            <Text style={styles.detailValue}>₹299</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Discount</Text>
            <Text style={styles.detailValue}>- ₹49</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount paid</Text>
            <Text style={styles.detailValue}>₹250</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Transaction ID:</Text>
            <View style={styles.detailValueRow}>
              <Text style={styles.detailValue}>NX73903926980725342698</Text>
              <TouchableOpacity onPress={() => copyToClipboard('NX73903926980725342698')}>
               
                <Copy width={30} height={30}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Jio Prepaid Reference ID:</Text>
            <View style={styles.detailValueRow}>
              <Text style={styles.detailValue}>3426980725</Text>
              <TouchableOpacity onPress={() => copyToClipboard('3426980725')}>
              <Copy width={30} height={30}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Debited from:</Text>
            <Text style={styles.detailValue}>Wallet</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Repeat/>
            <Text style={styles.footerButtonText}>Repeat</Text>


          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>

            <Split/>
           
            <Text style={styles.footerButtonText}>Split Expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
          <Share/>
            <Text style={styles.footerButtonText}>Share Receipt</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpButtonText}>Need Help ?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'green',
    padding: 16,
    textAlign: 'center',
    borderRadius: 4,
  },
  card: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"black"
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"black"
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  detailLabel: {
    fontSize: 16,
    color:"black"
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyText: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 4,
    justifyContent:"space-around"

  },
  footerButtonText: {
    fontSize: 16,
    color: 'blue',
    textAlign:"center"
  },
  helpButton: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  helpButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default TransactionResultUI;
