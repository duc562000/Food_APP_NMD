import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native";
import R from "../../../assets/R";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button";
import { CREDIT_CARD, PAY_PAL } from "../../../routers/ScreenNames";

const AddPaymentView = (props) => {
    const navigate = useNavigation()
    const [selectedMethod,setSelectedMethod] = useState(false)
    const onSelectedMethod = (value) => {
        setSelectedMethod(value)
    }
    const onNext = () => {
        if (selectedMethod == "paypal") {
            navigate.navigate(PAY_PAL)
        } else if (selectedMethod == "creditCard") {
            navigate.navigate(CREDIT_CARD)
      } 
    }
    console.log(selectedMethod)
  return (
    <View style={{ flex: 1,backgroundColor:R.colors.white}}>
        <Header
            title='Add Payment Method'
            isBack={true}
            styleTitle={{
                fontSize:22,
                textTransform:'none',
                textAlign: "left",
                paddingHorizontal:15,
                fontWeight:'500'
            }}
        />
        <View style={{
              flex:1,
              paddingHorizontal:15,
              paddingTop:20
              }}>
                    <Text style={[styles.txtGray,{paddingBottom:10}]}>Choose Payment method</Text>
                    <TouchableOpacity
                        style={styles.btnChoosePayment}
                        onPress={() => onSelectedMethod("paypal")}
                    >
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                style={[styles.icon,{
                                  width:18,
                                  height:18,
                                }]}
                                source={R.images.iconPaypal}
                            />
                            <Text style={styles.txtPayment}>Paypal</Text>
                        </View>
                        {selectedMethod == "paypal" && (
                            <Ionicons name="checkmark-circle" size={18} color={R.colors.colorMain} />
                        )
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnChoosePayment}
                        onPress={() => onSelectedMethod("creditCard")}
                    >
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                style={styles.icon}
                                source={R.images.iconVisa}
                            />
                            <Text style={styles.txtPayment}>Credit card</Text>
                        </View>
                        {selectedMethod == "creditCard" && (
                            <Ionicons name="checkmark-circle" size={18} color={R.colors.colorMain} />
                        )
                        }
                    </TouchableOpacity>
        </View>
        <View style={{flex:0.3,paddingHorizontal:15}}>
            <Button
                disabled = {selectedMethod ? false : true}
                onPress = {() => onNext()}
                title={'Next'}
                backgroundColor={selectedMethod ? R.colors.colorMain : R.colors.gray5}
                containerStyle={{
                    height:50,
                    borderRadius:15,
                    marginTop:20
                }}
                txtStyle={{
                    color:'#fff',
                    fontWeight:'700'
                }}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    txt:{
      fontSize:15,
      color:R.colors.black,
      paddingRight:10,
    },
    txtTotal:{
        fontSize:16,
        color:R.colors.colorMain,
        fontWeight:'600'
    },
    txtPayment:{
        fontSize:16,
        color:R.colors.black,
        paddingLeft:10
    },
    txtGray:{
      fontSize:13,
      color:R.colors.color777
    },
    btnChoosePayment:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:15
    },
    btnType:{
      width:80,
      height:80,
      marginBottom:10,
      borderRadius:20,
      marginHorizontal:15,
      backgroundColor:'#ccc',
      alignItems:'center',
      justifyContent:'center'
    },
    img:{
      width:45,
      height:45,
    },
    txtTitle:{
      fontSize:22,
      fontWeight:'600',
      color:R.colors.black,
      paddingHorizontal:15,
      paddingVertical:20
    },
    btnFood:{
      overflow:'hidden',
      width:120,
      height:120,
      borderRadius:20,
      marginHorizontal:15,
      alignItems:'center',
      justifyContent:'center',
      marginVertical:10,
    },
    txtweight:{
      fontSize:15,
      fontWeight:'500',
      color:R.colors.black
    },
    bg:{
      width:'100%',
      height:150,
      resizeMode:'cover',
      marginVertical:15,
    },
    centeredView: {
      flex: 1,
      paddingTop:70,
      backgroundColor:R.colors.white
    },
    modalView: {
      backgroundColor:R.colors.white
    },
    textStyle: {
      color:R.colors.color777,
      fontSize:16,
      textAlign:'center',
      paddingVertical:25
    },
    imgNearmeFood:{
        width:90,
        height:90,
        borderRadius:20,
    },
    icon:{
        width:25,
        height:25
    },
    row:{
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center'
    }
  })

export default AddPaymentView;
