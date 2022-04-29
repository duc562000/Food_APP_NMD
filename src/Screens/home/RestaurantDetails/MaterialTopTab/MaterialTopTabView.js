import React,{useCallback, useState} from 'react';
import { View,Text,ScrollView,FlatList,TouchableOpacity,StyleSheet, Image } from 'react-native';
import R from '../../../../assets/R';
import { MY_CART_SCREEN, RESTAURANTDETAILSCREEN } from '../../../../routers/ScreenNames';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Count from '../../../../components/Count/Count';
import StarReview from '../../../../components/StarReview/StarReview';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addCart,increaseItem } from '../../../../actions/MyCartAction';


const MaterialTopTabView = (props) => {
  const navigate = useNavigation();
  const {data,type,product,addCart} = props
  const [selectedFood,setSelectedFood] = useState(null)
  const [minus,setMinus] = useState(false)
  const [count, setCount] = useState(0);
  const onClickCount = (value,item,index) => {
    setSelectedFood(item)
    if (value === "+" && selectedFood) {
      setCount(count+1)
    } else if (value === "-" ) {
      setCount(count-1)
    }
    
  }
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => { //To toggle the show text or hide it
      setTextShown(!textShown);
  }

  const onTextLayout = useCallback(e =>{
      setLengthMore(e.nativeEvent.lines.length >=3); //to check the text is more than 4 lines or not
      // console.log(e.nativeEvent);
  },[]);
  console.log(product)
  return (
      <View style={{flex:1,backgroundColor:R.colors.white}}>
        {type == "Order" && (
          <>
          <FlatList
            scrollEnabled={true}
            data={product?.products}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item,index}) => {
                return(
                    <View
                      style={{
                        backgroundColor:R.colors.white,
                        flex:1,
                        flexDirection:'row',
                        paddingVertical:15,
                        paddingHorizontal:15
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
                          {product.cart.map((i) => {
                            if (item.id === i.id) {
                              return (
                            <>
                              {i.count > 0 && (
                                <>
                                  <TouchableOpacity
                                    style={{padding:5}}
                                    // onPress={() => props.increaseItem(i.id)}
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
          />
          {product.cart?.length > 0 &&
            <TouchableOpacity
              style={styles.popup}
              onPress={() => navigate.navigate(MY_CART_SCREEN)}
            >
              <SimpleLineIcons style={{top:8}} name="handbag" size={24} color={R.colors.white} />
              <View style={{
                backgroundColor:R.colors.white,
                alignSelf:'center',
                borderRadius:20,
                width:18,
                height:18,
                top:-5,
                right:-10
                }}>
                <Text style={styles.txtCountPopup}>{product.cart.length}</Text> 
              </View>
            </TouchableOpacity>
          }
          
          </>
        )}

        {type == "Review" && (
          <FlatList
          scrollEnabled={true}
          data={data.reviewContent}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item,index}) => {
              return(
                  <View
                    style={{
                      flex:1,
                      backgroundColor:R.colors.white,
                      flexDirection:'column',
                      paddingVertical:15,
                      paddingHorizontal:15
                    }}
                  >
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                      <View style={{flex:1,flexDirection:'row'}}>
                        <Image
                          style={styles.avt} 
                          source={item.avt}
                        />
                        <View style={{flex:1,justifyContent:"space-around",paddingHorizontal:10}}>
                          <Text>{item.name}</Text>
                          <StarReview
                            rate={item.rate}
                            hide={true}
                          />
                        </View>
                      </View>
                      <Text style={styles.txtGray}>{item.time}</Text>
                    </View>
                    <View style={{flex:1,paddingVertical:10}}>
                      <Text 
                        style={styles.txt}
                        onTextLayout={onTextLayout}
                        numberOfLines={textShown ? undefined : 3}
                        >{item.content}
                      </Text>
                      {
                        lengthMore ? <Text
                        onPress={toggleNumberOfLines}
                        style={[styles.txtweight,{color:R.colors.colorMain}]}>{textShown ? 'Read less' : 'Read more'}</Text>
                        :null
                      }
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                      <Image
                          style={styles.imgFoodreview} 
                          source={item.img1}
                      />
                      <Image
                          style={styles.imgFoodreview}  
                          source={item.img2}
                      />
                      <Image
                          style={styles.imgFoodreview}  
                          source={item.img3}
                      />
                    </View>
                  </View>
            )
                    }}
        />
        )}

        {type == "Information" && (
          <>
          {data.infomation.map((i) => {
            return(
              <View style={{flex:1,backgroundColor:R.colors.white,paddingVertical:10}}>
                <View style={[
                  styles.row,
                  {justifyContent:"space-between",paddingHorizontal:15,paddingVertical:10}
                  ]}>
                  <View style={styles.row}>
                    <Ionicons style={{paddingRight:10}} name="call-outline" size={22} color={R.colors.color777} />
                    <Text style={[styles.txtGray,{fontSize:16}]}>Phone</Text>
                  </View>
                  <Text style={styles.txtInfo}>{i.phone}</Text>
                </View>
                <View style={[
                  styles.row,
                  {justifyContent:"space-between",paddingHorizontal:15,paddingVertical:10}
                  ]}>
                  <View style={styles.row}>
                    <Ionicons style={{paddingRight:10}} name="mail-outline" size={22} color={R.colors.color777} />
                    <Text style={[styles.txtGray,{fontSize:16}]}>Email</Text>
                  </View>
                  <Text style={styles.txtInfo}>{i.email}</Text>
                </View>
                <View style={[
                  styles.row,
                  {justifyContent:"space-between",paddingHorizontal:15,paddingVertical:10}
                  ]}>
                  <View style={styles.row}>
                    <Ionicons style={{paddingRight:10}} name="notifications-outline" size={22} color={R.colors.color777} />
                    <Text style={[styles.txtGray,{fontSize:16}]}>Cuisines</Text>
                  </View>
                  <Text style={styles.txtInfo}>{i.cuisinies}</Text>
                </View>
                <View style={[
                  styles.row,
                  {justifyContent:"space-between",paddingHorizontal:15,paddingVertical:10}
                  ]}>
                  <View style={styles.row}>
                    <Ionicons style={{paddingRight:10}} name="ios-wallet-outline" size={22} color={R.colors.color777} />
                    <Text style={[styles.txtGray,{fontSize:16}]}>Average Cost</Text>
                  </View>
                  <Text style={styles.txtInfo}>{i.cost}</Text>
                </View>
              </View>
            )
          })}
          </>
        )}
      </View>
  );
};

const styles= StyleSheet.create({
  imgNearmeFood:{
    width:90,
    height:90,
    borderRadius:20,
  },
  txt:{
    fontSize:15,
    color:R.colors.black,
    lineHeight:22
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
  }
})


const mapStateToProps = (state) => {
  return {
    product: state.MyCartReaducer,
  };
};

export default connect(mapStateToProps, {
  addCart,
  increaseItem,
})(MaterialTopTabView)
