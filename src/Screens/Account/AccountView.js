import React, { useEffect } from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import R from "../../assets/R";
import { getFontXD } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import PickerDate from "../../components/Picker/PickerDate";
import { showAlert, TYPE } from "../../components/DropdownAlert";
import AntDesign from "react-native-vector-icons/AntDesign"
import { CHANGE_PASS_SCREEN, MY_PROFILE_SCREEN, PAYMENT_SETTING_SCREEN } from "../../routers/ScreenNames";


const AccountView = (props) => {
  const navigation = useNavigation();
  const {dataProfile} = props
  return (
    <View style={{ flex: 1,backgroundColor:R.colors.white }}>
      {dataProfile.myProfile.map((i)=>{
        return(
        <View style={{alignItems:'center',flex:0.3,paddingTop:100,paddingBottom:30}}>
          <Image style={styles.img} source={R.images.avtNam}/>
          <Text style={styles.txtTitle}>{i.name}</Text>
          <Text style={styles.txtGrayPhone}>{i.phone}</Text>
        </View>
        )
      })
      }
      <View style={{flex:0.7}}>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => navigation.navigate(MY_PROFILE_SCREEN,dataProfile.myProfile)}
        >
          <Text style={styles.txtGray}>My profile</Text>
          <AntDesign name="right" size={20} color={R.colors.gray5b71} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => navigation.navigate(CHANGE_PASS_SCREEN)}
        >
          <Text style={styles.txtGray}>Change Password</Text>
          <AntDesign name="right" size={20} color={R.colors.gray5b71} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => navigation.navigate(PAYMENT_SETTING_SCREEN)}
        >
          <Text style={styles.txtGray}>Payment Settings</Text>
          <AntDesign name="right" size={20} color={R.colors.gray5b71} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtGray}>My Voucher</Text>
          <AntDesign name="right" size={20} color={R.colors.gray5b71} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtGray}>Notification</Text>
          <AntDesign name="right" size={20} color={R.colors.gray5b71} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtGray}>About Us</Text>
          <AntDesign name="right" size={20} color={R.colors.gray5b71} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtGray}>Contact Us</Text>
          <AntDesign name="right" size={20} color={R.colors.gray5b71} />
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',paddingVertical:20}}>
          <Text style={[styles.txtTitle,{color:"red"}]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  txtTitle:{
    fontSize:16,
    fontWeight:'600',
    color:R.colors.black,
    paddingTop:10
  },  
  txtGrayPhone:{
    fontSize:15,
    fontWeight:'300',
    color:R.colors.color777,
    paddingVertical:2
  },
  txtGray:{
    fontSize:16,
    fontWeight:'500',
    color:R.colors.gray5b71
  },
  img:{
    width:150,
    height:150,
    borderRadius:150
  },
  btn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:15
  }
});

export default AccountView;
