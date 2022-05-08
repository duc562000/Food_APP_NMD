import React, { Fragment, useRef, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigation";

import Login from "../Screens/Authen/Login";

import * as ScreenName from "./ScreenNames";
import IntroFood from "../Screens/IntroFood/IntroFood";
import SignIn from "../Screens/Authen/SignIn/SignIn";
import SignUp from "../Screens/Authen/SignUp/SignUp";
import ForgotPass from "../Screens/Authen/ForgotPass/ForgotPass";
import ForgotPassOtp from "../Screens/Authen/ForgotPass/ForgotPassOtp";
import ForgotPassNewPass from "../Screens/Authen/ForgotPass/ForgotPassNewPass";
import RestaurantDetails from "../Screens/home/RestaurantDetails/RestaurantDetails";
import MyList from "../Screens/MyList/MyList";
import MyProfile from "../Screens/MyProfile/MyProfile";
import ChangePass from "../Screens/Authen/ChangePass/ChangePass";
import MyCart from "../Screens/MyCart/MyCart";
import Checkout from "../Screens/CheckOut/Checkout";
import Order from "../Screens/Order/Oder";
import PaymentSetting from "../Screens/PaymentSetting/PaymentSetting";
import AddPayment from "../Screens/PaymentSetting/AddPayMentMethod/AddPayment"
import PayPal from "../Screens/PaymentSetting/MethodPayment/PayPal";
import CreditCard from "../Screens/PaymentSetting/MethodPayment/CreditCard";
import CreditCardDetails from "../Screens/PaymentSetting/MethodPayment/CreditCardDetails";

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
      headerMode={"none"}
      initialRouteName={ScreenName.INTROFOODSCREEN}
    >
      <Stack.Screen name={ScreenName.LOGINSCREEN} component={Login} />
      <Stack.Screen name={ScreenName.TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={ScreenName.INTROFOODSCREEN} component={IntroFood} />
      <Stack.Screen name={ScreenName.SIGNINSCREEN} component={SignIn} />
      <Stack.Screen name={ScreenName.SIGNUPSCREEN} component={SignUp} />
      <Stack.Screen name={ScreenName.FORGOTPASSSCREEN} component={ForgotPass} />
      <Stack.Screen name={ScreenName.FORGOTPASSOTPCODESCREEN} component={ForgotPassOtp} />
      <Stack.Screen name={ScreenName.FORGOTPASSNEWPASS} component={ForgotPassNewPass} />
      <Stack.Screen name={ScreenName.RESTAURANTDETAILSCREEN} component={RestaurantDetails} />
      <Stack.Screen name={ScreenName.MY_LIST_SCREEN} component={MyList} />
      <Stack.Screen name={ScreenName.MY_PROFILE_SCREEN} component={MyProfile} />
      <Stack.Screen name={ScreenName.CHANGE_PASS_SCREEN} component={ChangePass} />
      <Stack.Screen name={ScreenName.MY_CART_SCREEN} component={MyCart} />
      <Stack.Screen name={ScreenName.CHECK_OUT_SCREEN} component={Checkout} />
      <Stack.Screen name={ScreenName.ORDER_SCREEN} component={Order} />
      <Stack.Screen name={ScreenName.PAYMENT_SETTING_SCREEN} component={PaymentSetting} />
      <Stack.Screen name={ScreenName.ADD_PAYMENT_METHOD} component={AddPayment} />
      <Stack.Screen name={ScreenName.PAY_PAL} component={PayPal} />
      <Stack.Screen name={ScreenName.CREDIT_CARD} component={CreditCard} />
      <Stack.Screen name={ScreenName.CREDIT_CARD_DETAILS} component={CreditCardDetails} />


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
