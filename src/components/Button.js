import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import R from "../assets/R";
import { colors, sizes } from "../assets/theme";
import { getFontXD, HEIGHTXD, WIDTHXD } from "../Config/Functions";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons"


const Button = (props) => {
  const { 
    title, 
    onPress, 
    containerStyle, 
    txtStyle, 
    backgroundColor,
    isIcon,
    iconName ,
    disabled
  } = props;
  return (
    <TouchableOpacity
      style={[
        {
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor,
          borderRadius: 10,
          marginVertical: HEIGHTXD(30),
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2.84,
        },
        { ...containerStyle },
      ]}
      onPress={onPress}
      disabled = {disabled}
    >
      {isIcon ? 
      (
        <View style={{position:'absolute',left:10}}>
          <Ionicons name={iconName} size={23} color={R.colors.color777} />
        </View>
      )
        : null
      }
      <Text
        style={[
          {
            fontSize: getFontXD(46),
            color: R.colors.textMain,
            fontWeight: "600",
          },
          { ...txtStyle },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
