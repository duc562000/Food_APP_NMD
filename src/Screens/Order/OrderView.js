import React from 'react';
import {View, Text,Image, StyleSheet,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import { connect } from 'react-redux';
import R from '../../assets/R';
import Entypo from "react-native-vector-icons/Entypo"
import Button from '../../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
import { RESTAURANTDETAILSCREEN } from '../../routers/ScreenNames';



const OrderView = (props) => {
    const navigate = useNavigation()
    const {productPaid,TotalPrice,total} = props
    return (
        <>
        {productPaid.oderList.length == 0 ? (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:R.colors.white
            }}>
            <View
                style={{
                    height:120,
                    width:120,
                    borderRadius:120,
                    backgroundColor:R.colors.colorMain,
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <Image style={styles.imgIcon} source={R.images.iconOrder}/>
            </View>
            <View style={{
                alignItems:'center',
                paddingVertical:30
                }}>
                <Text style={styles.txtGray}>No orders have been placed yet.</Text>
                <Text style={styles.txtGray}>Discover and order now</Text>
            </View>
        </View>
        ) : (
            <View style={{flex:1,paddingTop:50,backgroundColor:R.colors.white}}>
                <ScrollView contentContainerStyle={{flex:1}}>
                    <View style={{flex:0.5,paddingHorizontal:15,paddingVertical:20}}>
                        <Text style={styles.txtGray}>Ship to</Text>
                        <TouchableOpacity
                            style={{
                            flexDirection:'row',
                            paddingVertical:10,
                            alignItems:'center',
                            }}
                        >
                            <Entypo style={{paddingRight:10}} name="location" size={23} color="black" />
                            <Text style={styles.txt}>9 West 46th Street,New York city</Text>
                        </TouchableOpacity>
                        <Text style={[styles.txtGray,{paddingTop:20}]}>Ship at</Text>
                        <TouchableOpacity
                            style={{
                            paddingVertical:10,
                            }}
                        >
                            <Text style={styles.txt}>🕒 14:00 Today,Apr 14</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{flex:2}}>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:"space-between",
                            paddingHorizontal:15,
                            alignItems:'center',
                            paddingVertical:15
                            }}>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center'
                                }}>
                                <Image
                                    source={R.images.avtNu}
                                    style={{
                                        width:50,
                                        height:50,
                                        borderRadius:50,
                                        marginRight:10
                                    }}
                                />
                                <View>
                                    <Text style={styles.txtweight}>Hank Hirthe</Text>
                                    <Text style={styles.txtGray}>Shipper</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center'
                                }}>
                                <Ionicons name="call-outline" size={24} color="black" />
                                <View style={{
                                    width:40,
                                    height:40,
                                    borderRadius:30,
                                    backgroundColor:R.colors.colorMain,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    marginLeft:15
                                    }}>
                                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
                                </View>
                            </View>
                        </View>
                        <Text style={[styles.txtGray,{paddingBottom:10,paddingHorizontal:15}]}>Order</Text>
                        <View style={{flex:1}}>
                            <FlatList
                                style={{flex:1}}
                                data={productPaid?.oderList}
                                horizontal
                                pagingEnabled
                                scrollEnabled
                                snapToAlignment='center'
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id}
                                renderItem={({item,index}) => {
                                    return(
                                        <View
                                        style={{
                                            flexDirection:'column',
                                            paddingLeft:15}}
                                        >
                                            <Image
                                            style={styles.imgNearmeFood} 
                                            source={item.img}/>
                                            <Text style={[styles.txt,{paddingTop:10}]}>{item.type}</Text>
                                            <Text style={styles.txtTotal}>${TotalPrice(item.price,item.count)}</Text>
                                            <View style={{
                                                position:'absolute',
                                                width:20,
                                                height:20,
                                                borderRadius:20,
                                                backgroundColor:R.colors.colorMain,
                                                alignItems:'center',
                                                justifyContent:'center',
                                                right:-8
                                                }}> 
                                                <Text style={{
                                                    color:R.colors.white,
                                                    fontWeight:'600'
                                                    }}>{item.count}</Text>
                                            </View>
                                        </View>
                                )
                                }}
                            />
                            <View style={{
                                flex:1,
                                flexDirection:'row',
                                justifyContent:'space-between',
                                paddingHorizontal:15,
                                alignItems:'center'
                            }}>
                                <View>
                                    <Text style={[styles.txt,{paddingVertical:5}]}>Food</Text>
                                    <Text style={[styles.txt,{paddingVertical:5}]}>Pizza lover Company</Text>
                                    <Text style={[styles.txtGray,{paddingVertical:10}]}>Oreder Code : 1221-8492-2432</Text>
                                </View>
                                <Image
                                    source={R.images.iconQrcode}
                                    style={{
                                        width:90,
                                        height:90
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{flex:0.6}}>
                            <View style={{paddingHorizontal:15,flex:2}}>
                                
                                <View style={{
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    paddingTop:10
                                }}>
                                    <Text style={styles.txtweight}>Total</Text>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image
                                            source={R.images.iconPaid}
                                            style={{
                                                width:50,
                                                height:50,
                                                marginRight:10,
                                                tintColor:R.colors.gray
                                            }}
                                        />
                                        <Text style={[styles.txtTotal,{fontSize:25}]}>${total}</Text>
                                    </View>
                                </View>
                                    
                                <Button
                                    // onPress = {() => navigate.navigate(RESTAURANTDETAILSCREEN)}
                                    title={'Order again'}
                                    backgroundColor={R.colors.colorMain}
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
                    </View>
                </ScrollView>
            </View>
        )

        }
        
        </>
        
    )
}

const styles = StyleSheet.create({
    imgIcon:{
        width:60,
        height:60,
        tintColor:R.colors.white
    },
    txtGray:{
        fontSize:16,
        color:R.colors.gray,
        paddingBottom:5
    },
    imgNearmeFood:{
        width:90,
        height:90,
        borderRadius:20,
    },
    txtTotal:{
        fontSize:16,
        color:R.colors.colorMain,
        fontWeight:'600'
    },
    txtweight:{
        fontSize:15,
        fontWeight:'500',
        color:R.colors.black
    },
    txt:{
        fontSize:15,
        color:R.colors.black,
    }
})


  export default OrderView
