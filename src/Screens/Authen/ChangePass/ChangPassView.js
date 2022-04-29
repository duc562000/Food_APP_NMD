import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text,StyleSheet } from "react-native";
import Header from "../../../components/Header/Header";
import Entypo from "react-native-vector-icons/Entypo"
import TextForm from "../../../components/Input/InputForm";
import R from "../../../assets/R";
import Button from "../../../components/Button";



const ChangePassView = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <View style={{ flex: 1}}>
            <Header
                title='Change Password'
                isBack={true}
                styleTitle={{
                    fontSize:25,
                    textTransform:'none',
                    textAlign: "left",
                    paddingHorizontal:15,
                    fontWeight:'500'
                }}
            />
            <View style={{flex:1,paddingTop:20}}>
                <Text style={styles.txtGray}>Enter Old Password</Text>
                <View style={{alignItems:'center'}}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm
                            placeholder={"Enter Old Password"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            isPassword={true}
                            error={errors.oldPassword}
                            containerStyle ={{
                                width:320,
                                borderWidth:0.1,
                                paddingLeft:45,
                                height:50,
                                borderRadius:15,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                            }}
                            isIcon={true}
                            iconName={'lock-closed-outline'}
                            />
                        )}
                        name="oldPassword"
                        defaultValue=""
                    />
                </View>
                <Text style={styles.txtGray}>Create New Password</Text>
                <View style={{alignItems:'center'}}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm
                            placeholder={"Enter New Password"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            isPassword={true}
                            error={errors.newPassword}
                            containerStyle ={{
                                width:320,
                                borderWidth:0.1,
                                paddingLeft:45,
                                height:50,
                                borderRadius:15,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                            }}
                            isIcon={true}
                            iconName={'lock-closed-outline'}
                            />
                        )}
                        name="newPassword"
                        defaultValue=""
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm
                            placeholder={"Re-enter New Password"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            isPassword={true}
                            error={errors.RenewPassword}
                            containerStyle ={{
                                width:320,
                                borderWidth:0.1,
                                paddingLeft:45,
                                height:50,
                                borderRadius:15,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                            }}
                            isIcon={true}
                            iconName={'lock-closed-outline'}
                            />
                        )}
                        name="RenewPassword"
                        defaultValue=""
                    />
                    <Button
                        title={'Save'}
                        backgroundColor={R.colors.colorMain}
                        containerStyle={{
                            width:320,
                            height:50,
                            marginHorizontal:15,
                            borderRadius:15,
                            marginTop:200
                        }}
                        txtStyle={{
                            color:'#fff',
                            fontWeight:'700'
                        }}
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    txtGray:{
        fontSize:15,
        fontWeight:'500',
        color:R.colors.gray5b71,
        paddingVertical:20,
        paddingHorizontal:30
    },
})

export default ChangePassView;
