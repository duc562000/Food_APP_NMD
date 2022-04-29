import React,{useState} from "react";
import { View, Text,ScrollView,TouchableOpacity,StyleSheet, FlatList,Image, ImageBackground } from "react-native";
import R from "../../../assets/R";
import { Searchbar } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo"
import { ButtonGroup } from '@rneui/themed'
import StarReview from "../../../components/StarReview/StarReview"

const FoodMenu = (props) => {
    const {data} = props
    return(
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{alignSelf: 'flex-start'}}
            numColumns={3}
            data={data}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item,index}) => {
                return(
                    <View
                      style={{flexDirection:'column',alignItems:"center"}}
                    >
                      <TouchableOpacity
                        style={[styles.btnFood,{backgroundColor:item.bgColor}]}
                        key={item.id} 
                        // onPress={() => setSelectedFoodMenu(item)}
                      >
                        <Text
                          style={[styles.txtweight,{
                            alignSelf:'flex-start',
                            top:-30,
                            paddingHorizontal:15,
                          }]}
                        >{item.type}</Text>
                        <View
                          style={{
                            right:-20,
                            position:'absolute',
                            bottom:-15
                          }}
                        >
                          <Image 
                          style={styles.imgFoodMenu} 
                          source={item.img}/>
                        </View>
                      </TouchableOpacity>
                    </View>
              )
                      }}
          />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    imgFoodMenu:{
        width:120,
        height:80,
    },
})

export default FoodMenu;