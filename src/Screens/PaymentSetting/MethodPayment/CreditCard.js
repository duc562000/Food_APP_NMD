import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text,Image, StyleSheet } from "react-native";
import { editCard, loginApi } from "../../../apis/Functions/users";
import R from "../../../assets/R";
import Button from "../../../components/Button";
import Header from "../../../components/Header/Header";
import TextForm from "../../../components/Input/InputForm"
import { PAYMENT_SETTING_SCREEN } from "../../../routers/ScreenNames";


const CreditCard = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigation()
    const [txtBankName,setTxtBankName] = useState('')
    const [txtYourName,setTxtYourName] = useState('')
    const [txtCardNumber,setTxtCardNumber] = useState('')
    const [txtDate,setTxtDate] = useState('')
    const [txtCvv,setTxtCvv] = useState('')
    const onSubmit = async (data) => {
        let response = await editCard({
            "creditcard": {
                "bankname": data.bankName,
                "youname": data.yourName,
                "cardnumber": data.cardNumber,
                "date": data.date,
                "cvv": data.cvv
              }
        })
        navigate.navigate(PAYMENT_SETTING_SCREEN)
    }
  return (
    <View style={{ flex: 1,backgroundColor:R.colors.white}}>
        <Header
            title='Add Credit Card'
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
                    ]}>{txtYourName}</Text>
                <Text style={[
                    styles.txtCard,
                    {textAlign:'right',textTransform:'capitalize'}
                    ]}>{txtBankName}</Text>
            </View>
            <View style={{
                        flexDirection:'row',
                        paddingLeft:20,
                        paddingTop:10,
                        justifyContent:"space-around"
                    }}>
                <View style={{width:60}}>
                    <Text style={styles.txtGrayCard}>Date</Text>
                    <Text style={styles.txtCard}>{txtDate}</Text>
                </View>
                <View style={{width:60}}>
                    <Text style={styles.txtGrayCard}>CVV</Text>
                    <Text style={styles.txtCard}>{txtCvv}</Text>
                </View>
                
            </View>
            <View style={{paddingTop:15}}>
                <Text style={[styles.txtCard,{fontSize:20}]}>{txtCardNumber}</Text>
            </View>
        </View>
        <View style={{
            flex:0.5,
            backgroundColor:R.colors.white,
        }}>
            <View style={styles.row}>
                <Text style={styles.txtTitle}>Bank Name</Text>
                <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextForm
                    textAlign={'right'}
                    textColor={R.colors.gray5b71}
                    onBlur={onBlur}
                    onChangeText={(txt) => {
                        onChange(txt)
                        setTxtBankName(txt)
                    }
                    }
                    value={value}
                    error={errors.bankName}
                    containerStyle ={{
                        paddingVertical: 0,
                        paddingHorizontal: 10,
                        backgroundColor:R.colors.gray5,
                        width:200,
                        borderWidth:0.1,
                        borderRadius:5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }}
                    
                    />
                )}
                name="bankName"
                defaultValue={""}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.txtTitle}>Your Name</Text>
                <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextForm
                    textAlign={'right'}
                    textColor={R.colors.gray5b71}
                    onBlur={onBlur}
                    onChangeText={(txt) => {
                        onChange(txt)
                        setTxtYourName(txt)
                    }
                    }
                    value={value}
                    error={errors.yourName}
                    containerStyle ={{
                        paddingVertical: 0,
                        paddingHorizontal: 10,
                        backgroundColor:R.colors.gray5,
                        width:200,
                        borderWidth:0.1,
                        borderRadius:5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }}
                    />
                )}
                name="yourName"
                defaultValue={""}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.txtTitle}>Card Number</Text>
                <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextForm
                    textAlign={'right'}
                    textColor={R.colors.gray5b71}
                    onBlur={onBlur}
                    onChangeText={(txt) => {
                        onChange(txt)
                        setTxtCardNumber(txt)
                    }
                    }
                    value={value}
                    error={errors.cardNumber}
                    containerStyle ={{
                        paddingVertical: 0,
                        paddingHorizontal: 10,
                        backgroundColor:R.colors.gray5,
                        width:200,
                        borderWidth:0.1,
                        borderRadius:5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }}
                    
                    />
                )}
                name="cardNumber"
                defaultValue={""}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.txtTitle}>Date</Text>
                <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextForm
                    textAlign={'right'}
                    textColor={R.colors.gray5b71}
                    onBlur={onBlur}
                    onChangeText={(txt) => {
                        onChange(txt)
                        setTxtDate(txt)
                    }
                    }
                    value={value}
                    error={errors.date}
                    containerStyle ={{
                        paddingVertical: 0,
                        paddingHorizontal: 10,
                        backgroundColor:R.colors.gray5,
                        width:200,
                        borderWidth:0.1,
                        borderRadius:5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }}
                    
                    />
                )}
                name="date"
                defaultValue={""}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.txtTitle}>CVV</Text>
                <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextForm
                    textAlign={'right'}
                    textColor={R.colors.gray5b71}
                    onBlur={onBlur}
                    onChangeText={(txt) => {
                        onChange(txt)
                        setTxtCvv(txt)
                    }
                    }
                    value={value}
                    error={errors.cvv}
                    containerStyle ={{
                        paddingVertical: 0,
                        paddingHorizontal: 10,
                        backgroundColor:R.colors.gray5,
                        width:200,
                        borderWidth:0.1,
                        borderRadius:5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }}
                    
                    />
                )}
                name="cvv"
                defaultValue={""}
                />
            </View>
        </View>
        <View style={{
            flex:0.2,
            backgroundColor:R.colors.white,
        }}>
            <Button
                title={'Add'}
                backgroundColor={R.colors.colorMain}
                containerStyle={{
                    height:50,
                    marginHorizontal:15,
                    borderRadius:15,
                }}
                txtStyle={{
                    color:'#fff',
                    fontWeight:'700'
                }}
                onPress={handleSubmit(onSubmit)}
            />
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

export default CreditCard;
