import React from "react";
import { View, Text, FlatList,StyleSheet,Image,TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { addCart,increaseItem,decreaseItem,deleteItem } from "../../actions/MyCartAction";
import R from "../../assets/R";
import Header from "../../components/Header/Header";
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { CHANGE_PASS_SCREEN, CHECK_OUT_SCREEN } from "../../routers/ScreenNames";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { SwipeListView } from 'react-native-swipe-list-view';

const MyCartView = (props) => {
  const navigate = useNavigation();
  const {product,addCart,decreaseItem,deleteItem,total,onPressCheckOut} = props
  return (
    <View style={{ flex: 1,backgroundColor:R.colors.white}}>
            <Header
                title='My Cart'
                isBack={true}
                styleTitle={{
                    fontSize:22,
                    textTransform:'none',
                    textAlign: "left",
                    paddingHorizontal:15,
                    fontWeight:'500'
                }}
            />
            <SwipeListView
              style={{flex:1}}
              scrollEnabled={true}
              data={product?.cart}
              disableRightSwipe={true}
              rightOpenValue={-75}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item,index}) => {
                  return(
                      <View
                        key={index}
                        style={{
                          backgroundColor:R.colors.white,
                          flex:1,
                          flexDirection:'row',
                          paddingVertical:15,
                          paddingHorizontal:15,
                          borderTopRightRadius:15,
                          borderBottomEndRadius:15
                        }}
                      >
                        
                        <View>
                          <Image
                          style={styles.imgNearmeFood} 
                          source={item.img}/>
                        </View>
                        <View style={{
                                  flex:1,
                                  justifyContent:'space-between',
                                  flexDirection:'row',
                                  alignItems:'center',
                                  paddingHorizontal:20
                                }}>
                          <View style={{}}>
                            <Text style={[styles.txtweight,{paddingVertical:8}]}>{item.type}</Text>
                            <View style={[styles.row,{paddingVertical:5}]}>
                              <View style={styles.row}>
                                <Ionicons style={{paddingRight:5}}  name="cart-outline" size={18} color={R.colors.color777} />
                                <Text style={styles.txtGray}>{item.buy}+</Text>
                              </View>
                              <Text style={styles.txtGray}> | </Text>
                              <View style={[styles.row]}>
                                <AntDesign style={{paddingRight:5}} name="like2" size={18} color={R.colors.color777} />
                                <Text style={styles.txtGray}>{item.like}</Text>
                              </View>
                            </View>
                            <Text style={styles.txtPrice}>${item.price}</Text>
                          </View>
                          <View style ={{flexDirection:'row',alignItems:'center'}}>
                            {product.cart.map((i,index) => {
                              if (item.id === i.id) {
                                return (
                              <>
                                {i.count > 0 && (
                                  <>
                                    <TouchableOpacity
                                      key={index}
                                      style={{padding:5}}
                                      onPress={() => decreaseItem(i.id)}
                                    >
                                      <Ionicons name="remove-sharp" size={24} color="black" />
                                    </TouchableOpacity>                        
                                    <Text style={[styles.txt,{padding:10}]}>{i.count}</Text>
                                  </>
                                )}
                              </>
                                )
                              }
                              })}
                            <TouchableOpacity
                              onPress={() => addCart(item)}
                            >
                                <Ionicons name="add-circle" size={24} color={R.colors.colorMain} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                )
                        }}
                renderHiddenItem = {(item,index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => deleteItem(item.index)}
                    style={{
                      flex:1,
                      flexDirection:'row',
                      alignItems:'center',
                      justifyContent:'flex-end',
                      backgroundColor:R.colors.colorMain,
                      borderTopRightRadius:15,
                      borderBottomEndRadius:15
                    }}
                  >
                    <Image
                      source={R.images.iconRemove}
                      style={{
                        height:40,
                        width:40,
                        marginRight:15,
                        tintColor:R.colors.white
                      }}
                    />
                  </TouchableOpacity>
          
                ) }
            />
            <View style={{flex:0.6,paddingTop:50}}>
                <View style={styles.rowbtn}>
                  <Text style={styles.txt}>Discount Code</Text>
                  <TouchableOpacity 
                    style={styles.btn}
                    // onPress={() => navigation.navigate(CHANGE_PASS_SCREEN)}
                  >
                    <Text style={[styles.txtGray,{marginLeft:80}]}>Enter or choose a code</Text>
                    <AntDesign name="right" size={15} color={R.colors.gray5b71} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.rowbtn,{paddingVertical:20}]}>
                  <Text style={styles.txtweight}>Total</Text>
                  <Text style={styles.txtTotal}>${total}</Text>
                </View>
                <Button
                        onPress = {() => onPressCheckOut()}
                        disabled = {(product?.cart.length > 0) ? false : true }
                        title={'Check out'}
                        backgroundColor={(product?.cart.length > 0) ? R.colors.colorMain :R.colors.gray5}
                        containerStyle={{
                            height:50,
                            marginHorizontal:15,
                            borderRadius:15,
                            marginTop:10
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
  imgNearmeFood:{
    width:90,
    height:90,
    borderRadius:20,
  },
  txt:{
    fontSize:15,
    color:R.colors.black,
  },
  txtInfo:{
    fontSize:16,
    color:R.colors.black,
    fontWeight:"500"
  },
  avt:{
      width:50,
      height:50,
      borderRadius:50,
  },
  txtweight:{
    fontSize:15,
    fontWeight:'600'
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  txtGray:{
    fontSize:13,
    color:R.colors.color777,
  },
  txtPrice:{
    fontSize:15,
    fontWeight:'600',
    color:R.colors.colorMain
  },
  imgFoodreview:{
    width:60,
    height:60,
    marginHorizontal:5,
    borderRadius:10
  },
  popup:{
    width:70,
    height:70,
    borderRadius:70,
    backgroundColor:R.colors.colorMain,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    right:15,
    bottom:100,
    alignSelf:'center'
  },
  txtCountPopup:{
    textAlign:'center',
    color:R.colors.colorMain
  },
  btn:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
  },
  rowbtn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:15
  },
  txtTotal:{
    fontSize:25,
    fontWeight:'600',
    color:R.colors.colorMain
  }
})

export default MyCartView
