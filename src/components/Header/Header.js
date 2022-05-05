import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import R from "../../assets/R";
import {
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from "../../Config/Functions";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = (props) => {
  const { title, isBack,containerStyle,contaierSafeAreView,colorIcon,styleTitle,isDot } = props;
  const navigate = useNavigation();
  return (
    <>
      <SafeAreaView
        style={[{
          flex: 0,
          backgroundColor: R.colors.white,
        },{...contaierSafeAreView}]}
      />

      <View style={[styles.headerContainer,{...containerStyle}]}>
        {isBack ? (
          <TouchableOpacity
            style={{ width: 35, height: 30 }}
            onPress={() => navigate.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={25} color={colorIcon ? colorIcon : "black"} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 35, height: 30 }} />
        )}
        <Text numberOfLines={1} style={[styles.txtTitle,{...styleTitle}]}>
          {title}
        </Text>
        {props.addPress ? (
          <TouchableOpacity onPress={props.addPress}>
            <Ionicons
              name={"ios-add-circle-outline"}
              size={WIDTHXDICON(80)}
              color={R.colors.white}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 35, height: 30 }} />
        )}
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: HEIGHTXD(120),
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: WIDTHXD(40),
    alignItems: "center",
    backgroundColor: R.colors.white,
    shadowColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    borderBottomWidth:0.5,
    borderBottomColor:R.colors.gray3
  },
  txtTitle: {
    flex: 1,
    fontSize: getFontXD(42),
    textAlign: "center",
    fontWeight: "bold",
    color: R.colors.black,
    textTransform: "uppercase",
  },
});
