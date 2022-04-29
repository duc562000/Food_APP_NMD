import React,{useState,useEffect} from "react";
import { View,Text,Image,StyleSheet,StatusBar,Animated,FlatList,TouchableOpacity } from "react-native";
import R from "../../assets/R";
import { useNavigation } from "@react-navigation/native";
import { HOMESCREEN, LOGINSCREEN, SIGNINSCREEN, SIGNUPSCREEN, TABNAVIGATOR } from "../../routers/ScreenNames";
import Button from "../../components/Button"
import Entypo from "react-native-vector-icons/Entypo"

const IntroSignInUp = () => {
    const navigate = useNavigation();
    return(
        <>
        <StatusBar barStyle="dark-content"/>
        <View 
            style={{
                flex:1,
                backgroundColor:R.colors.white,
                width:R.sizes.width,
                height:R.sizes.height}}
                >
            <View
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <Image
                    source={R.images.iconHamberger}
                    style={styles.imgHamberger}
                />
                <View
                    style={{
                        marginTop:30
                    }}
                >
                    <Button
                        onPress={() => navigate.navigate(SIGNINSCREEN)}
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
                    />
                    <Button
                        onPress={() => navigate.navigate(SIGNUPSCREEN)}
                        title={'Sign up'}
                        backgroundColor={R.colors.white}
                        containerStyle={{
                            height:50,
                            width:320,
                            borderRadius:15,
                        }}
                        txtStyle={{
                            color:R.colors.black,
                        }}
                    />
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
    )
}

const styles = StyleSheet.create({
    imgHamberger:{
        width:320,
        height:'50%',
        resizeMode:'cover',
        borderRadius:20,
    },
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
        height:0.5,
        width:'61%',
        backgroundColor:'#ccc',
        marginRight:10
    },
    txtConnect:{
        color:R.colors.color777,
        fontSize:14
    }
});

export default IntroSignInUp;
