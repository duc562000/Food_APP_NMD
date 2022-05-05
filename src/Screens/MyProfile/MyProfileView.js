import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text,StyleSheet, Image } from "react-native";
import R from "../../assets/R";
import Header from "../../components/Header/Header";
import TextForm from "../../components/Input/InputForm"
import Entypo from "react-native-vector-icons/Entypo"
import Button from "../../components/Button";

const MyProfileView = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <View style={{ flex: 1,backgroundColor:R.colors.white}}>
            <Header
                title='My Profile'
                isBack={true}
                styleTitle={{
                    fontSize:22,
                    textTransform:'none',
                    textAlign: "left",
                    paddingHorizontal:15,
                    fontWeight:'500'
                }}
            />
            {props.data.map((i)=>{
            return(
                <>
                <View style={{alignItems:'center',flex:0.3,paddingTop:20}}>
                    <Image style={styles.img} source={R.images.avtNam}/>
                    <Text style={styles.txtTitle}>{i.name}</Text>
                    <Text style={styles.txtGrayPhone}>Change photo</Text>
                </View>
                <View style={{flex:0.7}}>
                    <View style={styles.row}>
                        <Text style={styles.txtGray}>My Name</Text>
                        <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm
                            textAlign={'right'}
                            textColor={R.colors.black}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.name}
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
                        name="name"
                        defaultValue={i.name}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.txtGray}>Phone Number</Text>
                        <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm
                            textAlign={'right'}
                            textColor={R.colors.black}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.phoneNumber}
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
                        name="phoneNumber"
                        defaultValue={i.phone}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.txtGray}>Email</Text>
                        <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm
                            textAlign={'right'}
                            textColor={R.colors.black}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.email}
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
                        name="email"
                        defaultValue={i.email}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.txtGray}>My Address</Text>
                        <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm
                            textAlign={'right'}
                            textColor={R.colors.black}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.address}
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
                        name="address"
                        defaultValue={i.address}
                        />
                    </View>
                    <Button
                        title={'Save'}
                        backgroundColor={R.colors.colorMain}
                        containerStyle={{
                            height:50,
                            marginHorizontal:15,
                            borderRadius:15,
                            marginTop:100
                        }}
                        txtStyle={{
                            color:'#fff',
                            fontWeight:'700'
                        }}
                        onPress={handleSubmit(onSubmit)}
                    />
                </View> 
                </>
            )
            })}
            
        </View>
    );
};

const styles = StyleSheet.create({
    img:{
        width:150,
        height:150,
        borderRadius:150,
    },
    txtTitle:{
        fontSize:16,
        fontWeight:'600',
        color:R.colors.black,
        paddingTop:10
    },  
    txtGrayPhone:{
        fontSize:13,
        fontWeight:'300',
        color:R.colors.color777,
        paddingVertical:2
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

export default MyProfileView;
