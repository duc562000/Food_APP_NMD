import React,{useState,useEffect} from "react";
import { View,Text,Image,StyleSheet,StatusBar,Animated,FlatList,TouchableOpacity } from "react-native";
import R from "../../assets/R";
import { HOMESCREEN, LOGINSCREEN, TABNAVIGATOR } from "../../routers/ScreenNames";
import IntroSignInUp from "./IntroSignInUp";

const IntroFoodView = (props) => {
    const {data,handleLet} = props
    const scrollX = new Animated.Value(0)
    function renderContent() {
        return(
            <FlatList
                data={data}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment='center'
                decelerationRate={0}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                onScroll = {Animated.event([
                    {nativeEvent : { contentOffset:{ x : scrollX}}},
                ],{useNativeDriver:false})}
                keyExtractor={item => item.id}
                renderItem={({item,index}) => {
                    return(
                        <>
                        <View
                            style={{
                                flex:1,
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                        >
                            <Image 
                                source={item.img} 
                                style={styles.img}
                                />
                            <View style={{paddingVertical:15}}>
                                <Text style={styles.txtTitle}>{item.title}</Text>
                                <Text style={styles.txtContent}>{item.description}</Text>
                            </View>
                        </View>
                        
                    </>
                    )
                    
                    
                }}
                ListFooterComponent={() => {
                    return(
                        <IntroSignInUp/>
                    )
                }}
            >      
            </FlatList>
        );
    }
    function renderDot() {
        const dotPositions = Animated.divide(scrollX,R.sizes.width)
        return(
            <View style={styles.dotContainer}>
                {data.map((item,index) => {
                    
                    const opacity = dotPositions.interpolate({
                        inputRange :[ index-1, index, index+1],
                        outputRange: [0.3 ,1 , 0.3],
                        extrapolate:'clamp'
                    })

                    const dotSize = dotPositions.interpolate({
                        inputRange: [index-1, index , index +1 ],
                        outputRange :[8,8,8],
                        extrapolate:'clamp'
                    })

                    return (
                        <Animated.View
                        key={`dot - ${index}`}
                        opacity={opacity}
                        style={[styles.dot,{width:dotSize,height:dotSize}]}
                        >
                        </Animated.View>
                    )
                    
                })}
            </View>
        )
        
    }

    return (
        <>
            <StatusBar barStyle="light-content"/>
            <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:R.colors.colorMain
                }}
            >
                <View>
                    {renderContent()}
                </View>
                <View style={styles.dotRootContairner}>
                    {renderDot()}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    img:{
        width:150,
        height:150,
        tintColor:R.colors.white,
    },
    txtTitle:{
        textAlign:'center',
        fontSize:25,
        paddingVertical:10,
        color:R.colors.white,
        fontWeight:"600"
    },
    txtContent:{
        textAlign:'center',
        width:R.sizes.width,
        paddingHorizontal:28,
        fontSize:15,
        lineHeight:20,
        color:R.colors.white,
    },
    dotRootContairner : {
        position:'absolute',
        bottom:20
    },
    dotContainer : {
        flexDirection:'row',
        height:R.sizes.padding,
        alignItems:'center',
        justifyContent:'center'
    },
    dot :{
        width:10,
        height:10,
        borderRadius:10,
        backgroundColor:R.colors.white,
        marginHorizontal:5,
        
    },
    btnGo:{
        position:'absolute',
        bottom:50,
        right:0,
        backgroundColor:R.colors.white,
        padding:20,
        borderBottomLeftRadius:15,
        borderTopLeftRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    txtBtnGo:{
        fontSize:25,
        fontWeight:'bold',
        color:R.colors.colorMain
    },
    
})

export default IntroFoodView;