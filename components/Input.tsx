import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { InputProps } from "@/constants/Const";

const Input = ({
  isPassword,
  editable,
  multiline,
  keyboardType,
  iconName,
  placeholder,
}: InputProps) => {
  const [eyeOff, setEyeOff] = useState(isPassword);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name={iconName}
          size={25}
          style={{ top: -50, left: 10 }}
          color={"#bbb"}
        />
        <TextInput
          editable={editable}
          multiline={multiline}
          className="border-2 w-80 m-4"
          placeholder={placeholder}
          style={{ top: -50, borderColor: "#f37921", borderRadius: 50 }}
          secureTextEntry={eyeOff}
          keyboardType={keyboardType}
          // onChangeText={text => onChangeText(text)}
          // value={value}
          // style={styles.textInput}
        />
      </View>
      {isPassword && eyeOff && (
        <TouchableOpacity
          style={{ top: -100, left: 270 }}
          onPress={() => setEyeOff(!eyeOff)}
        >
          <Icon name="eye" size={30} color={"#bbb"} />
        </TouchableOpacity>
      )}
      {isPassword && !eyeOff && (
        <TouchableOpacity
          style={{ top: -100, left: 270 }}
          onPress={() => setEyeOff(!eyeOff)}
        >
          <Icon name="eye-with-line" size={30} color={"#bbb"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
