import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image, ScrollView } from 'react-native';
import MaterialTopTabView from './MaterialTopTabView';
import { connect } from "react-redux";
import R from '../../../../assets/R';


const Tab = createMaterialTopTabNavigator();



function MaterialTopTab(props) {
    const {data} = props
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: R.colors.gray1,
        tabBarActiveTintColor: R.colors.colorMain,
        tabBarPressOpacity: 1,
        tabBarLabelStyle: {
        fontSize: 18,
        textTransform: 'none',
        fontWeight: 'bold',
      },
      tabBarLabelStyle: { fontSize: 16,fontWeight:"600", textTransform: "none" },
      tabBarStyle: {
          width: '90%',
          fontSize: 18
      },
      tabBarIndicatorStyle: {
          backgroundColor: R.colors.colorMain,
          height: 6,
          bottom: 0,
          borderRadius:10,
          width:6,
          left:"16%",
      }, 
      }}
    >
      <Tab.Screen 
            name="Order" 
            children={() => <MaterialTopTabView data={data} type={'Order'}/>}
        />
      <Tab.Screen 
            name="Review" 
            children={() => <MaterialTopTabView data={data} type={'Review'}/>}
        />
      <Tab.Screen 
            name="Information" 
            children={() => <MaterialTopTabView data={data} type={"Information"}/>}
        />
    </Tab.Navigator>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     product: state.CartReducer,
//   };
// };

export default MaterialTopTab
