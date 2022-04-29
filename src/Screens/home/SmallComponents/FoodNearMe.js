import React,{useState} from "react";
import { View, Text,ScrollView,TouchableOpacity,StyleSheet, FlatList,Image, ImageBackground } from "react-native";
import R from "../../../assets/R";
import { Searchbar } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo"
import { ButtonGroup } from '@rneui/themed'
import StarReview from "../../../components/StarReview/StarReview"
import { useNavigation } from "@react-navigation/native";
import { RESTAURANTDETAILSCREEN } from "../../../routers/ScreenNames";

const FoodNearMe = (props) => {
    const {data,onPress} = props
    const navigate = useNavigation();
    return(
        <FlatList
            scrollEnabled={false}
            data={data}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item,index}) => {
                return(
                    <View
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
                      }}
          />
    )
}

const styles = StyleSheet.create({
    btnFoodNearMe:{
        marginHorizontal:15,
        width:100,
        height:100,
        borderRadius:20,
        marginVertical:10,
        backgroundColor:'#ccc'
    },
    imgNearmeFood:{
        width:100,
        height:100,
        borderRadius:20,
    },
    txtweight:{
        fontSize:15,
        fontWeight:'500',
        color:R.colors.black
    },
    txtGray:{
        fontSize:13,
        color:R.colors.color777
    },
})

export default FoodNearMe;