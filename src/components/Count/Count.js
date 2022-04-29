import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import R from '../../assets/R';
import Ionicons from "react-native-vector-icons/Ionicons"


const Count = props => {
  const {count, onClickCount} = props
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10
    }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => onClickCount('+')}>
            <Ionicons name="add-circle" size={24} color="black" />
        </TouchableOpacity>
        <View style={{
          height: 30,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 0.5,
          borderColor: '#ccc'
        }}>
          <Text>{count}</Text>

        </View>
        <TouchableOpacity onPress={() => onClickCount('-')}>
            <Ionicons name="add-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({
  btnplusminus: {
    height: 30,
    width: 20,
  },
  txtGray: {
    fontSize: 18,
    color: R.colors.gray5b71,
    paddingVertical: 5
  },
});
