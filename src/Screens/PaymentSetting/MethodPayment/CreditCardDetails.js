import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text,Image, StyleSheet } from "react-native";
import { editCard, loginApi } from "../../../apis/Functions/users";
import R from "../../../assets/R";
import Header from "../../../components/Header/Header";


const CreditCardDetails = (props) => {
   const dataUser = props.route.params.dataUser.creditcard
  return (
    <View style={{ flex: 1,backgroundColor:R.colors.white}}>
        <Header
            title='Credit Card' 
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
            flex:0.4,
            alignItems:'center',
            backgroundColor:R.colors.white,
           
            }}>
            <Image
                source={R.images.creditCardIMG}
                style={{
                    width:600,
                    height:300,
                    marginRight:15
                }}
            >
            </Image>
        </View>
        <View style={{flex:1,position:'absolute',top:180,left:50,width:300}}>
            <View style={{
                    flex:1,
                    justifyContent:'space-between',
                    flexDirection:'row',
                    alignItems:'center',
                    height:20
                    }}>
                <Text style={[
                    styles.txtCard,
                    {fontSize:20,textTransform:"uppercase"}
                    ]}>{dataUser.youname}</Text>
                <Text style={[
                    styles.txtCard,
                    {textAlign:'right',textTransform:'capitalize'}
                    ]}>{dataUser.bankname}</Text>
            </View>
            <View style={{
                        flexDirection:'row',
                        paddingLeft:20,
                        paddingTop:10,
                        justifyContent:"space-around"
                    }}>
                <View style={{width:60}}>
                    <Text style={styles.txtGrayCard}>Date</Text>
                    <Text style={styles.txtCard}>{dataUser.date}</Text>
                </View>
                <View style={{width:60}}>
                    <Text style={styles.txtGrayCard}>CVV</Text>
                    <Text style={styles.txtCard}>{dataUser.cvv}</Text>
                </View>
                
            </View>
            <View style={{paddingTop:15}}>
                <Text style={[styles.txtCard,{fontSize:20}]}>{dataUser.cardnumber}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    txtTitle:{
        fontSize:16,
        fontWeight:'600',
        color:R.colors.gray,
        paddingVertical:10
    },
    txtCard:{
        fontSize:16,
        fontWeight:'700',
        color:R.colors.white
    },  
    txtGrayCard:{
        fontSize:13,
        fontWeight:'500',
        color:R.colors.gray5b71,
        paddingBottom:5,
    },
    txtGray:{
        fontSize:16,
        fontWeight:'500',
        color:R.colors.gray5b71,
        paddingVertical:10
    },
    row:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:15,

    }
})

export default CreditCardDetails;
