import React, { useEffect } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import R from "../../assets/R";
import Header from "../../components/Header/Header";
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native";
import { ADD_PAYMENT_METHOD, CREDIT_CARD_DETAILS } from "../../routers/ScreenNames";
import { loginApi } from "../../apis/Functions/users";



const PaymentSettingView = (props) => {
  console.log(props.dataUser)
  const dataUser = props.dataUser
  const navigate = useNavigation()
  return (
    <View style={{ flex: 1,backgroundColor:R.colors.white}}>
            <Header
                title='Payment Setting'
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
                    <TouchableOpacity
                        style={styles.btnChoosePayment}
                        // onPress={() => onSelecteMethod(1)}
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
                          <Text style={styles.txt}>{dataUser.paypal}</Text>   
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnChoosePayment}
                        onPress={() => navigate.navigate(CREDIT_CARD_DETAILS,{dataUser})}
                    >
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                style={styles.icon}
                                source={R.images.iconVisa}
                            />
                            <Text style={styles.txtPayment}>Credit card</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.txt}>{dataUser.creditcard.cardnumber}</Text>
                          <AntDesign name="right" size={15} color={R.colors.gray5b71} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnChoosePayment}
                        onPress={() => navigate.navigate(ADD_PAYMENT_METHOD)}
                    >
                        <View style={styles.row}>
                            <Image
                                style={styles.icon}
                                source={R.images.iconAddCard}
                            />
                            <Text style={styles.txtPayment}>Add new payment method</Text>
                        </View>
                        <Entypo name="plus" size={24} color={R.colors.gray} />
                    </TouchableOpacity>
                    
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

export default PaymentSettingView;
