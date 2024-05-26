import React from 'react'
import { ScrollView, Text, TouchableOpacity, View,StyleSheet,Dimensions } from 'react-native'

import UserImageSvg from "../../assests/userImage.svg";
import NotificationSvg from "../../assests/notificationIcon.svg";

// importing categories
import PopularCategory from '../../elements/PopularCategory.tsx';
import UtilitiesCategory from '../../elements/UtilitiesCategory.tsx';
import FinancialServices from '../../elements/FinancialServices.tsx';
import MoreServices from '../../elements/MoreServices.tsx';
import BottomNavigator from '../../elements/BottomNavigator.tsx';



const { width, height } = Dimensions.get('window');

function HomeScreenUI(props:any) {

  const {handleMobileRecharge,handleWallet,handleDth}=props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <UserImageSvg />
        </TouchableOpacity>
        <TouchableOpacity>
          <NotificationSvg />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.adBanner}>
          <TouchableOpacity>
            <Text>Your ad here</Text>
          </TouchableOpacity>
        </View>
        <PopularCategory handleDth={handleDth}  handleMobileRecharge={handleMobileRecharge} />
        <UtilitiesCategory />
        <FinancialServices />
        <MoreServices />
      </ScrollView>

      <BottomNavigator handleWallet={handleWallet}  />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0466C8',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    position: 'absolute', // Keep the header fixed at the top
    top: 0,
    zIndex: 10, // Ensure it is above other content
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 70, // Padding to ensure content doesn't overlap the fixed header
    paddingBottom: 30, // Added padding for better spacing
    width: width,
  },
  adBanner: {
    borderWidth: 0,
    width: '95%',
    minHeight: 150,
    marginTop: 15,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    backgroundColor:"#E8E8E8",
    shadowOpacity: 0.8,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    // backgroundColor: '#fff',
  },
});

export default HomeScreenUI;
