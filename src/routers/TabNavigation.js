import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { connect } from "react-redux";
import R from "../assets/R";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


import Home from "../Screens/home/Home";
import History from "../Screens/history/History";
import Notification from "../Screens/notification/Notification";
import Account from "../Screens/Account/Account";
import Profile from "../Screens/Profile/Profile"
import MyList from "../Screens/MyList/MyList";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Screen5"
        tabBarOptions={{ 
          activeTintColor: R.colors.colorMain,
          labelStyle: { fontSize:15 },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HistoryScreen"
          component={History}
          options={{
            tabBarLabel: "Order",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="MyListScreen"
          component={MyList}
          options={{
            tabBarLabel: "My List",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bookmark" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={Account}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
