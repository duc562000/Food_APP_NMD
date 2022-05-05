import React,{useState} from 'react';
import {StyleSheet, Image, View,TouchableOpacity,Text,Modal} from 'react-native';
import R from '../../../assets/R';
import Button from '../../../components/Button';

const ModalEnableLocation = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
      <Modal
        backdropColor="transparent"
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.img} source={R.images.imgLocationMap}/>
            <Text style={styles.textStyle}>Set your location to start exploring restaurants around you</Text>
            <Button
                title={'Enable Location'}
                backgroundColor={R.colors.colorMain}
                containerStyle={{
                    height:50,
                    width:320,
                    borderRadius:15,
                }}
                txtStyle={{
                    color:'#fff',
                    fontWeight:'700'
                }}
                onPress={() => setModalVisible(!modalVisible)}
            />
            <Button
                onPress={() => setModalVisible(!modalVisible)}
                title={'No, I do it later'}
                backgroundColor={R.colors.white}
                containerStyle={{
                    height:50,
                    width:320,
                    borderRadius:15,
                }}
                txtStyle={{
                    color:R.colors.black,
                }}
            />
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 0,
    width:R.sizes.width,
    height:'90.61%',
    backgroundColor: "white",
  },
  modalView: {
    marginVertical:'10%',
    padding: 35,
    alignItems: "center",
  },
  textStyle: {
    color:R.colors.color777,
    fontSize:16,
    textAlign:'center',
    paddingVertical:25
  },
  img:{
    width:'90%',
    height:300,
    borderRadius:15
  }
});

export default ModalEnableLocation;
