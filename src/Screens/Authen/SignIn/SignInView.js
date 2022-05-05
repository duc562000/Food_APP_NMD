import React,{useState,useEffect} from "react";
import { Controller, useForm } from "react-hook-form";
import { View,Text,Image,StyleSheet,StatusBar,Animated,FlatList,TouchableOpacity } from "react-native";
import R from "../../../assets/R";
import { FORGOTPASSSCREEN, LOGINSCREEN, TABNAVIGATOR } from "../../../routers/ScreenNames";
import TextForm from "../../../components/Input/InputForm";
import Button from "../../../components/Button";
import Entypo from "react-native-vector-icons/Entypo"
import Header from "../../../components/Header/Header";
import { useNavigation } from "@react-navigation/native";



const SignInView = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const {onSubmit} = props
    const navigate = useNavigation();
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <Header
                isBack={true}
            />
            <View 
                style={{
                    flex:1,
                    backgroundColor:R.colors.white,
                    width:R.sizes.width,
                    height:R.sizes.height
                }}
            >
                
                <View
                    style={{
                        flex:0.85,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <Text style={styles.txtSignIn}>Sign in</Text>
                    <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextForm
                        textColor={R.colors.black}
                        placeholder={'Username'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.username}
                        containerStyle ={{
                            width:320,
                            borderWidth:0.1,
                            paddingLeft:45,
                            height:50,
                            borderRadius:15,shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                        }}
                        isIcon={true}
                        iconName={'ios-person-outline'}
                        />
                    )}
                    name="username"
                    defaultValue=""
                    />

                    <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextForm
                        title={"password"}
                        placeholder={"Enter Password"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        isPassword={true}
                        error={errors.password}
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
                    name="password"
                    defaultValue=""
                    />
                    <View
                        style={{
                            marginTop:30
                        }}
                    >
                        <Button
                            title={'Sign in'}
                            backgroundColor={R.colors.colorMain}
                            containerStyle={{
                                height:50,
                                width:320,
                                borderRadius:15,
                            }}
                            txtStyle={{
                                color:'#fff',
                                fontWeight:'700'
                            }}
                            onPress={handleSubmit(onSubmit)}
                        />
                        <TouchableOpacity
                            onPress={() => navigate.navigate(FORGOTPASSSCREEN)}
                        >
                            <Text style={[styles.txtConnect,
                                {
                                    textAlign:'right',
                                    paddingTop:10
                                }
                                ]}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{flex:0.3,backgroundColor:R.colors.white}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <View style={styles.line}/>
                                    <Text style={styles.txtConnect}>Or connect with</Text>
                    </View>
                    <View style={{
                        position:'absolute',
                        bottom:100,
                        right:30,
                        
                        }}>
                            
                            <View style={{flexDirection:'row'}}>
                                <Entypo style={styles.ic} name="facebook-with-circle" size={43} color={R.colors.lightBlue} />
                                <Entypo style={styles.ic} name="google--with-circle" size={43} color={R.colors.red1} />
                                <Entypo style={styles.ic} name="twitter-with-circle" size={43} color={R.colors.lightBlue2} />
                            </View>
                    </View>
                    
                    <View style={{flex: 1, overflow: "hidden"}}>
                        <Image
                            source={R.images.imgSalad}
                            style={styles.imgSalad}
                    />
                    </View>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    ic:{
        padding:5
    },
    imgSalad:{
        width:250,
        height:250,
        position:'absolute',
        left:"-20%",
        bottom:"-40%"
    },
    line:{
        height:1,
        width:'61%',
        backgroundColor:'#ccc',
        marginRight:10
    },
    txtConnect:{
        color:R.colors.color777,
        fontSize:14
    },
    txtSignIn:{
        fontSize:32,
        color:R.colors.black,
        fontWeight:'500',
        marginBottom:30,
        left:-110
    }
})

export default SignInView;