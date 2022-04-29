import React from "react";
import { View, Text, TextInput } from "react-native";
import { HEIGHTXD, WIDTHXD, getFontXD } from "../../Config/Functions";
import R from "../../assets/R";
import I18n from "../../helper/i18/i18n";
import Ionicons from "react-native-vector-icons/Ionicons"


const TextField = (props) => {
  const {
    title,
    onChangeText,
    isPassword,
    maxLength,
    isNumber,
    value,
    editable,
    error,
    onBlur,
    placeholder,
    keyboardType,
    placeHolderColor,
    textColor,
    tinColor,
    fontSize,
    containerStyle,
    isIcon,
    iconName,
    textAlign
  } = props;

  return (
    <View>
      
      <TextInput
        onBlur={onBlur}
        maxLength={maxLength ? maxLength : 256}
        placeholderTextColor={placeHolderColor}
        editable={editable != null ? editable : true}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        value={value}
        textAlign={textAlign}
        fontSize={16}
        keyboardType={keyboardType}
        onChangeText={(val) => onChangeText(val)}
        style={[
          {
          height: HEIGHTXD(109),
          color: textColor,
          fontSize: fontSize ? fontSize : getFontXD(46),
          paddingVertical: 5,
          paddingHorizontal: 5,
          backgroundColor:R.colors.gray5
          },
          { ...containerStyle },
        ]
      }
      />
      {isIcon ? 
      (
        <View style={{position:'absolute',top:10,left:10}}>
          <Ionicons name={iconName} size={25} color={R.colors.gray} />
        </View>
      )
        : null
      }
      <View
        style={{
          height: 20,
          marginTop: 5,
          paddingHorizontal: 5,
        }}
      >
        {error && (
          <Text
            style={{
              color: tinColor ? tinColor : R.colors.colorMain,
              fontSize: getFontXD(32),
            }}
          >
            {I18n.t("PleaseEnterField")}
          </Text>
        )}
      </View>
    </View>
  );
};

export default React.memo(TextField);
