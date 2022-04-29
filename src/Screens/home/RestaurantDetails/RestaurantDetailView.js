import React,{useState,useEffect} from "react";
import { Controller, useForm } from "react-hook-form";
import { View,Text,Image,StyleSheet,StatusBar,Animated,FlatList,TouchableOpacity, ImageBackground,ScrollView } from "react-native";
import R from "../../../assets/R";
import { FORGOTPASSSCREEN, LOGINSCREEN, TABNAVIGATOR } from "../../../routers/ScreenNames";
import TextForm from "../../../components/Input/InputForm";
import Button from "../../../components/Button";
import Entypo from "react-native-vector-icons/Entypo"
import Header from "../../../components/Header/Header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"
import StarReview from "../../../components/StarReview/StarReview";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import MaterialTopTab from "../../home/RestaurantDetails/MaterialTopTab/MaterialTopTab"


const Tab = createMaterialTopTabNavigator();
const RestaurantDetailsView = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const {dataRestaurant,reaction,setReaction} = props
    const navigate = useNavigation();
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <View style={{flex:1,backgroundColor:R.colors.white}}>
                <View style={{
                    flexDirection:'row',
                    paddingHorizontal:10,
                    zIndex:1,
                    position:'absolute'
                    }}>
                    <TouchableOpacity
                        style={styles.iconStyle}
                        onPress={() => navigate.goBack()}
                    >
                        <Ionicons name="chevron-back-outline" size={30} color={"white"} />
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',paddingLeft:200}}>
                        <TouchableOpacity
                        style={styles.iconStyle}
                        >
                            <Ionicons name="search" size={30} color={"white"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.iconStyle}
                        onPress={() => setReaction(!reaction)}
                        >
                            <Ionicons name="heart" size={30} color={reaction ? "red" : "white"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.iconStyle}
                        >
                            <Ionicons name="ios-share-social-outline" size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        flex: 1,
                    }}
                >
                    <ImageBackground
                        resizeMode="cover"
                        source={dataRestaurant.img}
                        style={styles.banner}
                    />
                    <View style={{paddingHorizontal:15}}>
                        <Text style={[styles.txtTitle,{paddingVertical:15}]}>{dataRestaurant.type}</Text>
                        <Text style={[styles.txtGray,{paddingVertical:5}]}>📍 {dataRestaurant.address}</Text>
                        <Text style={[styles.txtGray,{paddingVertical:5}]}>🕒 Open {dataRestaurant.open}</Text>
                        <View style={{paddingVertical:5,flexDirection:'row'}}>
                            <StarReview rate={dataRestaurant.rate}/>
                            <Text style={styles.txtGray}> · {dataRestaurant.review} Reviews</Text>
                        </View>
                    </View>
                    <MaterialTopTab
                        data={dataRestaurant}
                    />
                </ScrollView>
            </View>    
        </>
    );
}

const styles = StyleSheet.create({
    banner:{
        width:'100%',
        height:300,
    },
    iconStyle : {
        top:50,
        paddingHorizontal:5
    },
    txtGray:{
        fontSize:13,
        color:R.colors.color777
    },
    txtTitle:{
        fontSize:22,
        fontWeight:"600",
        color:R.colors.black
    }
})

export default RestaurantDetailsView;