import React,{useState,useEffect} from 'react'
import { Text, View } from 'react-native'
import RechargePlanUI from '../../Components/RechargePlan/RechargePlanUI'

function RechargePlans() {


    const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [selectedOperator, setSelectedOperator] = useState('Jio');
  const [selectedState, setSelectedState] = useState('Odisha');
  const [plans, setPlans] = useState([
    {
      "price": 19,
      "data": "1.5 GB",
      "validity": "Base Plan validity",
      "calls": "NA",
      "description": "For users with an active validity plan"
    },
    {
      "price": 299,
      "data": "2 GB/day",
      "validity": "28 days",
      "calls": "Unlimited",
      "description": "True 5G Data and more"
    },
    {
      "price": 399,
      "data": "3 GB/day",
      "validity": "28 days",
      "calls": "Unlimited",
      "description": "Unlimited calls with extra benefits"
    },
    {
      "price": 199,
      "data": "1 GB/day",
      "validity": "24 days",
      "calls": "Unlimited",
      "description": "Basic plan with daily data limit"
    }
    ,{
      "price": 399,
      "data": "3 GB/day",
      "validity": "28 days",
      "calls": "Unlimited",
      "description": "Unlimited calls with extra benefits"
    },
    {
      "price": 199,
      "data": "1 GB/day",
      "validity": "24 days",
      "calls": "Unlimited",
      "description": "Basic plan with daily data limit"
    }
  ]);
  const [loading, setLoading] = useState(false);

  const categories = ['Popular', 'Cricket packs', 'Smartphone', 'Data'];
  const operators = ['Airtel', 'Jio', 'BSNL', 'Vi'];
  const states = ['Odisha', 'Maharashtra', 'Karnataka', 'Tamil Nadu'];


  const onCategoryChange=(category:string)=>{
    setSelectedCategory(category)
  }

  const onOperatorChange=(operator)=>{
    setSelectedOperator(operator)
  }

  const onStateChange=(state)=>{
    setSelectedState(state)
  }


  const fetchPlans = async () => {
    setLoading(true);
    try {
      // Simulating an API call with a timeout and sample response
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({
          json: () => Promise.resolve({
            "plans": [
              {
                "price": 19,
                "data": "1.5 GB",
                "validity": "Base Plan validity",
                "calls": "NA",
                "description": "For users with an active validity plan"
              },
              {
                "price": 299,
                "data": "2 GB/day",
                "validity": "28 days",
                "calls": "Unlimited",
                "description": "True 5G Data and more"
              },
              {
                "price": 399,
                "data": "3 GB/day",
                "validity": "28 days",
                "calls": "Unlimited",
                "description": "Unlimited calls with extra benefits"
              },
              {
                "price": 199,
                "data": "1 GB/day",
                "validity": "24 days",
                "calls": "Unlimited",
                "description": "Basic plan with daily data limit"
              }
              ,{
                "price": 399,
                "data": "3 GB/day",
                "validity": "28 days",
                "calls": "Unlimited",
                "description": "Unlimited calls with extra benefits"
              },
              {
                "price": 199,
                "data": "1 GB/day",
                "validity": "24 days",
                "calls": "Unlimited",
                "description": "Basic plan with daily data limit"
              }
            ]
          })
        }), 1000)
      );
  
      const data = await response.json();
      setPlans(data.plans);
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  


  return (



    
    <View style={{flex:1,}}>

        <RechargePlanUI />
    </View>
  )
}

export default RechargePlans
