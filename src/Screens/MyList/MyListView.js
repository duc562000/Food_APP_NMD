import React,{useEffect, useState} from "react";
import { View, Text,ScrollView,TouchableOpacity,StyleSheet, FlatList,Image, ImageBackground, Modal } from "react-native";
import R from "../../assets/R";
import { Searchbar } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import { ButtonGroup } from '@rneui/themed'
import { getWidth } from "../../Config/Functions";
import StarReview from "../../components/StarReview/StarReview"
import FoodMenu from "../home/SmallComponents/FoodMenu";
import FoodNearMe from "../home/SmallComponents/FoodNearMe";
import FoodBreakfast from "../home/SmallComponents/FoodBreakFast";
import Button from "../../components/Button";
import { toggleHeart } from "../../actions/FavoritesAction";
import { connect } from "react-redux";
import { FoodTypeData } from "../home/Home";
import { RESTAURANTDETAILSCREEN } from "../../routers/ScreenNames";
import { useNavigation } from "@react-navigation/native";


const MyListView = (props) => {
  const {
    favotiteList,
    search,
    filterData,
    serachFilter
  } = props
  const navigate = useNavigation();
  console.log(favotiteList)
  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={{flex:1,backgroundColor:R.colors.white}}
    >
      <View style={{ flex: 1,backgroundColor:R.colors.white}}>
            <View style={{
              flex:1,
              marginHorizontal:15,
              marginBottom:15,
              paddingTop:60
              }}>
              <Searchbar
                placeholder="Search"
                onChangeText={(text) => serachFilter(text)}
                value={search}
                style={{
                  backgroundColor:R.colors.gray5,
                  borderWidth:0.1,
                  height:50,
                  borderRadius:15,shadowColor: "#000",
                  shadowOffset: {
                      width: 0,
                      height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                }}
              />
            </View>
            {search ? (
              <>
              {filterData.map((item,index) => (
                  <View 
                        key={index}
                        style={{flexDirection:'row'}}
                      >
                        <TouchableOpacity
                          style={styles.btnFoodNearMe}
                          key={item.id} 
                          onPress={() => navigate.navigate(RESTAURANTDETAILSCREEN,{item})}
                        >
                          <View>
                            <Image 
                            style={styles.imgNearmeFood} 
                            source={item.img}/>
                          </View>
                        </TouchableOpacity>
                        <View>
                          <Text style={[styles.txtweight,{paddingVertical:10}]}>{item.type}</Text>
                          <Text style={[styles.txtGray,{paddingVertical:3}]}>📍 {item.address}</Text>
                          <Text style={[styles.txtGray,{paddingVertical:3}]}>🕒 {item.time} min · {item.km}km</Text>
                          <View style={{paddingVertical:5}}>
                            <StarReview rate={item.rate}/>
                          </View>
                        </View>
                      </View>
                
              ))
              }
              </>
            ) : (
              <>
                {favotiteList.map((item,index) => {
              return item.favorite == true && (
                <View 
                      key={index}
                      style={{flexDirection:'row'}}
                    >
                      <TouchableOpacity
                        style={styles.btnFoodNearMe}
                        key={item.id} 
                        onPress={() => navigate.navigate(RESTAURANTDETAILSCREEN,{item})}
                      >
                        <View>
                          <Image 
                          style={styles.imgNearmeFood} 
                          source={item.img}/>
                        </View>
                      </TouchableOpacity>
                      <View>
                        <Text style={[styles.txtweight,{paddingVertical:10}]}>{item.type}</Text>
                        <Text style={[styles.txtGray,{paddingVertical:3}]}>📍 {item.address}</Text>
                        <Text style={[styles.txtGray,{paddingVertical:3}]}>🕒 {item.time} min · {item.km}km</Text>
                        <View style={{paddingVertical:5}}>
                          <StarReview rate={item.rate}/>
                        </View>
                      </View>
                    </View>
              )
            })
            }
              </>
            )
            }
            
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  txt:{
    fontSize:15,
    color:R.colors.black
  },
  txtGray:{
    fontSize:13,
    color:R.colors.color777
  },
  btnType:{
    width:80,
    height:80,
    marginBottom:10,
    borderRadius:20,
    marginHorizontal:15,
    backgroundColor:'#ccc',
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width:45,
    height:45,
  },
  txtTitle:{
    fontSize:22,
    fontWeight:'600',
    color:R.colors.black,
    paddingHorizontal:15,
    paddingVertical:20
  },
  btnFood:{
    overflow:'hidden',
    width:120,
    height:120,
    borderRadius:20,
    marginHorizontal:15,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
  },
  txtweight:{
    fontSize:15,
    fontWeight:'500',
    color:R.colors.black
  },
  bg:{
    width:'100%',
    height:150,
    resizeMode:'cover',
    marginVertical:15,
  },
  centeredView: {
    flex: 1,
    paddingTop:70,
    backgroundColor:R.colors.white
  },
  modalView: {
    backgroundColor:R.colors.white
  },
  textStyle: {
    color:R.colors.color777,
    fontSize:16,
    textAlign:'center',
    paddingVertical:25
  },
  imgNearmeFood:{
    width:100,
    height:100,
    borderRadius:20,
  },
  txtweight:{
    fontSize:15,
    fontWeight:'600'
  },
  txtPrice:{
    fontSize:15,
    fontWeight:'600',
    color:R.colors.colorMain
  },
  btnFoodNearMe:{
    marginHorizontal:15,
    width:100,
    height:100,
    borderRadius:20,
    marginVertical:10,
    backgroundColor:'#ccc'
},
})

export default MyListView
