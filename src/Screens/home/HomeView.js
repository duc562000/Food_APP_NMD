import React,{useEffect, useState} from "react";
import { View, Text,ScrollView,TouchableOpacity,StyleSheet, FlatList,Image, ImageBackground, Modal } from "react-native";
import ModalEnableLocation from "./SmallComponents/ModalEnableLocationComponent";
import R from "../../assets/R";
import { Searchbar } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import { ButtonGroup } from '@rneui/themed'
import { getWidth } from "../../Config/Functions";
import StarReview from "../../components/StarReview/StarReview"
import FoodMenu from "./SmallComponents/FoodMenu";
import FoodNearMe from "./SmallComponents/FoodNearMe";
import FoodBreakfast from "./SmallComponents/FoodBreakFast";
import Button from "../../components/Button";
import Header from "../../components/Header/Header";
import { connect } from 'react-redux';
import { increase,decrease } from "../../actions/CountAction";


const HomeView = (props) => {
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
  const menuFood = FoodTypeData[1].menuFood
  const [modalSeacrh, setModalSearch] = useState(false);
  const [search, setSearch ] = useState('');
  const [filterData,setfilterData] = useState([]);
  const [masterData,setmasterData] = useState ([]);
  useEffect(() => {
          const fetchData = async() =>{
          setmasterData(menuFood)
          };
          fetchData();
      },[]);
  const serachFilter = (text) => {
      let matches = []
      if(text.length > 0){
        matches = masterData.filter(i => {
          const regax = new RegExp(`${text}`,'gi');
          return i.type.match(regax)
        })
      }
      console.log(matches)
      setfilterData(matches)
      setSearch(text)
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:R.colors.white}}>
      <View style={{ flex: 1,backgroundColor:R.colors.white}}>
        <ModalEnableLocation />
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
              
                <View style={styles.centeredView}>
                  <View style={{marginHorizontal:15,marginBottom:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <TouchableOpacity
                        style={{ width: 35, height: 30}}
                        onPress={() => setModalSearch(!modalSeacrh)}
                      >
                        <Ionicons name="chevron-back-outline" size={26} color="black" />
                      </TouchableOpacity>
                      <Searchbar
                              placeholder="Search"
                              onChangeText={(text) => serachFilter(text)}
                              value={search}
                              style={{
                                width:315,
                                marginLeft:10,
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
                    
                    {
                      search ? (
                        <FlatList
                        style={{marginTop:10}}
                        data={filterData}
                        renderItem={({item}) => {
                          return(
                            <View
                            style={{
                              marginVertical:5,
                              alignItems:'center'
                            }}
                          >
                            <Text
                                style={styles.txtSearch}
                              >{item.type}
                            </Text>
                          </View>
                          ) }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        />
                      ) : (
                        <View>
                          <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
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
                            <Text style={[styles.txtTitle,{paddingHorizontal:0}]}>Popular</Text>
                            <FoodBreakfast
                              data={FoodTypeData[1].menuBreakfast}
                            />
                        </View>
                      )
                      
                    }
                  </View>
                  
                </View>
            </Modal>
            
            <TouchableOpacity
              style={{
                flexDirection:'row',
                paddingHorizontal:15,
                paddingVertical:20,
                alignItems:'center',
              }}
            >
              <Entypo style={{paddingRight:10}} name="location" size={23} color="black" />
              <Text style={styles.txt}>9 West 46th Street,New York city</Text>
            </TouchableOpacity>

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
                        style={{flexDirection:'column',alignItems:"center"}}
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
            <Text style={styles.txtTitle}>{selectedFoodType?.type} Menu</Text>
            <FoodMenu
              data={selectedFoodType?.menuFood}
            />
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={styles.txtTitle}>Near me</Text>
              <TouchableOpacity>
                <Text style={[styles.txtweight,
                  {paddingHorizontal:15,paddingVertical:20,}
                  ]}>See all</Text>
              </TouchableOpacity>
            </View>
            <FoodNearMe
              data={selectedFoodType?.menuNearMe}
            />
            <ImageBackground
              source={R.images.bgHambergerDiscount}
              style={styles.bg}
            />
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={styles.txtTitle}>For breakfast</Text>
              <TouchableOpacity>
                <Text style={[styles.txtweight,
                  {paddingHorizontal:15,paddingVertical:20}
                ]}>See all</Text>
              </TouchableOpacity>
            </View>
            <FoodBreakfast
              data={selectedFoodType?.menuBreakfast}
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
  txtSearch:{
    fontSize:16,
    fontWeight:'500',
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
    paddingVertical:20,
    paddingHorizontal:15
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
  btnFoodBreakfast:{
    marginHorizontal:15,
    marginVertical:10,
},
imgFoodBreakFast:{
    width:80,
    height:80,
    borderRadius:20
},
})

const mapStateToProps = (state) => {
  return {
    count : state.CountReaducer
  };
};
export default connect(mapStateToProps, {increase,decrease})(HomeView);
