// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
// import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

// const D2hBillDetailsUI = () => {
//   return (
//     <SafeAreaView style={styles.container}>
      

//       <MobileRechargeUpperBar customName="Airtel Digital TV"/>

//       <View style={styles.content}>
//         <View style={styles.detailsContainer}>
//           <Text style={styles.title}>Airtel Digital TV</Text>
//           <Text style={styles.subTitle}>XXXXXX856278</Text>
//           <View style={styles.billDetails}>
//             <Text style={styles.billTitle}>Bill Details:</Text>
//             <Text style={styles.hideText}>HIDE</Text>
//           </View>
//           <View style={styles.amountContainer}>
//             <Text style={styles.amountLabel}>Monthly Amount</Text>
//             <Text style={styles.amount}>₹ 300</Text>
//           </View>
//           <TextInput
          
//           keyboardType='numeric'
//             style={styles.input}
//             // value="₹ 300"
//             placeholderTextColor="#aaa"
            
//           />
//           <Text style={styles.recommendedTitle}>Recommended</Text>
//           <View style={styles.recommendedContainer}>
//             <TouchableOpacity style={styles.recommendedButton}>
//               <Text style={styles.recommendedText}>₹350</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.recommendedButton}>
//               <Text style={styles.recommendedText}>₹400</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.recommendedButton}>
//               <Text style={styles.recommendedText}>₹1050</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.actionButtonsContainer}>
//             <TouchableOpacity style={styles.actionButton}>
//               <Text style={styles.actionButtonText}>Browse Plans</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.actionButton}>
//               <Text style={styles.actionButtonText}>View Details</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.payButton}>
//           <Text style={styles.payButtonText}>PROCEED TO PAY</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

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
//     justifyContent: 'space-between',
//   },
//   detailsContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//   },
//   title: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   subTitle: {
//     color: '#333',
//     fontSize: 14,
//     marginBottom: 20,
//   },
//   billDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   billTitle: {
//     color: '#333',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   hideText: {
//     color: '#007aff',
//     fontSize: 14,
//   },
//   amountContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   amountLabel: {
//     color: '#333',
//     fontSize: 14,
//   },
//   amount: {
//     color: '#333',
//     fontSize: 18,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     fontSize: 30,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   recommendedTitle: {
//     color: '#333',
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   recommendedContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   recommendedButton: {
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#007aff',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: '30%',
//   },
//   recommendedText: {
//     color: '#007aff',
//     fontSize: 14,
//   },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   actionButton: {
//     backgroundColor: '#007aff',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '48%',
//   },
//   actionButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   payButton: {
//     backgroundColor: '#007aff',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default D2hBillDetailsUI;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, } from 'react-native';
import Modal from 'react-native-modal';
import MobileRechargeUpperBar from '../MobileRecharge/MobileRechargeUpperBar';

const D2hBillDetailsUI = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('₹ 300');
  const [isEditable, setIsEditable] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRecommendedClick = (value) => {
    setAmount(value);
    setIsEditable(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <MobileRechargeUpperBar customName="Airtel Digital Tv"/>

      <View style={styles.content}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Airtel Digital TV</Text>
          <Text style={styles.subTitle}>XXXXXX856278</Text>
          <View style={styles.billDetails}>
            <Text style={styles.billTitle}>Bill Details:</Text>
            <Text style={styles.hideText}>HIDE</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountLabel}>Monthly Amount</Text>
            <Text style={styles.amount}>₹ 300</Text>
          </View>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            placeholderTextColor="#aaa"
            editable={isEditable}
          />
          <Text style={styles.recommendedTitle}>Recommended</Text>
          <View style={styles.recommendedContainer}>
            <TouchableOpacity style={styles.recommendedButton} onPress={() => handleRecommendedClick('₹ 350')}>
              <Text style={styles.recommendedText}>₹350</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendedButton} onPress={() => handleRecommendedClick('₹ 400')}>
              <Text style={styles.recommendedText}>₹400</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendedButton} onPress={() => handleRecommendedClick('₹ 1050')}>
              <Text style={styles.recommendedText}>₹1050</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={toggleModal}>
              <Text style={styles.actionButtonText}>Browse Plans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={toggleModal}>
              <Text style={styles.actionButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>PROCEED TO PAY</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        swipeDirection={['down']}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Customer Information</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.modalText}>Airtel Digital TV</Text>
            <Text style={styles.modalSubText}>XXXXXX856278</Text>
            <Text style={styles.modalText}>Monthly Recharge:</Text>
            <Text style={styles.modalText}>Balance:</Text>
            <Text style={styles.modalText}>Status:</Text>
            <Text style={styles.modalText}>Next recharge date:</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    justifyContent: 'space-between',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  title: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#333',
    fontSize: 14,
    marginBottom: 20,
  },
  billDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  billTitle: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  hideText: {
    color: '#007aff',
    fontSize: 14,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  amountLabel: {
    color: '#333',
    fontSize: 14,
  },
  amount: {
    color: '#333',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 21,
    fontWeight:"600",
    color:"black",
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
    
  },
  recommendedTitle: {
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
  },
  recommendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  recommendedButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
  },
  recommendedText: {
    color: '#007aff',
    fontSize: 14,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#007aff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#007aff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeText: {
    fontSize: 16,
    color: '#007aff',
  },
  modalBody: {
    paddingTop: 20,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 10,
  },
  modalSubText: {
    fontSize: 14,
    marginBottom: 20,
    color: '#777',
  },
});

export default D2hBillDetailsUI;
