import React,{useState} from "react";
import { View, Text,ScrollView,TouchableOpacity,StyleSheet, FlatList,Image, ImageBackground } from "react-native";
import R from "../../../assets/R";
import { Searchbar } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo"
import { ButtonGroup } from '@rneui/themed'
import StarReview from "../../../components/StarReview/StarReview"

const FoodBreakfast = (props) => {
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
            numColumns={4}
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
                        style={styles.btnFoodBreakfast}
                        key={item.id} 
                        // onPress={() => setSelectedFoodMenu(item)}
                      >
                          <Image 
                          style={styles.imgFoodBreakFast} 
                          source={item.img}/>
                      </TouchableOpacity>
                      <Text
                          style={styles.txt}
                        >{item.type}
                      </Text>
                    </View>
              )
                      }}
          />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnFoodBreakfast:{
        marginHorizontal:15,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
    },
    imgFoodBreakFast:{
        width:80,
        height:80,
        borderRadius:20
    },
    txt:{
        fontSize:15,
        color:R.colors.black
    },
})

export default FoodBreakfast;