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


const MyListView = (props) => {
  const historySearch = [
    {
      id:1,
      name:'Hamsazda'
    },
    {
      id:2,
      name:'fdasfas'
    },
    {
      id:3,
      name:'asdsadsa'
    },
    {
      id:4,
      name:'weqweqw'
    },
    {
      id:5,
      name:'asdwqeqwewasda'
    },
  ]
  const {
    FoodTypeData,
    searchQuery,
    onChangeSearch,
    selectedFoodType,
    OnChangFoodType
  } = props
  const [modalSeacrh, setModalSearch] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
      <View style={{ flex: 1,backgroundColor:R.colors.white}}>
        <View>
            <Button
              title={'Search'}
              backgroundColor={R.colors.gray5}
              containerStyle={{
                  height:50,
                  marginHorizontal:15,
                  borderRadius:15,
                  alignItems:'flex-start',
                  marginTop:70,
              }}
              txtStyle={{
                  color:R.colors.color777,
                  fontWeight:'400',
                  left:55
              }}
              isIcon ={true}
              iconName = {'md-search-outline'}
              onPress = {() => setModalSearch(true)}
            />
            <Modal
              animationType="fade"
              transparent={false}
              visible={modalSeacrh}
            >
              <ScrollView>
                <View style={styles.centeredView}>
                  <View style={{marginHorizontal:15,marginBottom:15}}>
                    <TouchableOpacity
                      style={{ width: 35, height: 30,position:'absolute',bottom:10,left:-5 }}
                      onPress={() => setModalSearch(!modalSeacrh)}
                    >
                      <Ionicons name="chevron-back-outline" size={26} color="black" />
                    </TouchableOpacity>
                    <Searchbar
                      placeholder="Search"
                      onChangeText={onChangeSearch}
                      value={searchQuery}
                      style={{
                        marginLeft:35,
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
                  <View>
                    <View style={{
                      flexDirection:'row',
                      justifyContent:'space-between',
                      paddingHorizontal:15,
                      paddingVertical:15
                      }}>
                        <Text style={styles.txtGray}>🕒  Search history</Text>
                        <TouchableOpacity>
                          <Text style={[styles.txtGray,{fontSize:15}]}>Clear all</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                      scrollEnabled={false}
                      data={historySearch}
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={item => item.id}
                      renderItem={({item,index}) => {
                        return(
                          <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between',
                            paddingHorizontal:15
                            }}>
                              <TouchableOpacity>
                                <Text style={[styles.txt,{paddingVertical:10,fontWeight:"300"}]}>{item.name}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Ionicons style={{color:R.colors.color777}} name="close-outline" size={23} color="black" />
                              </TouchableOpacity>
                          </View>
                        )
                      }}
                    />
                    <Text style={styles.txtTitle}>Popular</Text>
                    <FoodBreakfast
                      data={FoodTypeData[1].menuBreakfast}
                    />
                  </View>
                </View>
              </ScrollView>
            </Modal>
            
            <FlatList
              data={FoodTypeData}
              horizontal
              pagingEnabled
              scrollEnabled
              snapToAlignment='center'
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item,index}) => {
                  return(
                      <View
                        style={{flexDirection:'column',alignItems:"center",paddingVertical:20}}
                      >
                        <TouchableOpacity
                          style={[
                            styles.btnType,
                            {backgroundColor:selectedFoodType ?.id === item.id ? R.colors.colorMain : R.colors.gray4}
                          ]}
                          key={item.id} 
                          onPress={() => OnChangFoodType(item)}
                        >
                          <Image 
                          style={[
                            styles.img,
                            {tintColor:selectedFoodType ?.id === item.id ? R.colors.white : R.colors.black}
                          ]} 
                          source={item.img}/>
                        </TouchableOpacity>
                        <Text style={styles.txt}>{item.type}</Text>
                      </View>
                )
              }}
            />
            <FlatList
            horizontal
            scrollEnabled={true}
            data={selectedFoodType?.menuNearMe[0]?.food}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item,index}) => {
                return(
                    <View
                        style={{
                            backgroundColor:R.colors.white,
                            flex:1,
                            alignItems:'center',
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
                              }}>
                        <View>
                          <Text style={[styles.txtweight,{paddingVertical:8}]}>{item.type}</Text>
                          <Text style={styles.txtPrice}>${item.price}</Text>
                        </View>
                      </View>
                    </View>
              )
                      }}
          />
            <FoodNearMe
              data={selectedFoodType?.menuNearMe}
            />
          </View>
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
    width:90,
    height:90,
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
})

export default MyListView;
