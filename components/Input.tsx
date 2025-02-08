import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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
  label,
  value,
  onChange,
}: InputProps) => {
  const [eyeOff, setEyeOff] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          { borderColor: isFocused ? "#194072" : "#bbb", borderWidth: 2 },
        ]}
      >
        <Text
          style={[
            styles.label,
            {
              top: isFocused || value ? -10 : 20,
              fontSize: isFocused || value ? 12 : 16,
              color: isFocused ? "#194072" : "#bbb",
            },
          ]}
        >
          {label}
        </Text>

        <Icon
          name={iconName}
          size={25}
          style={styles.icon}
          color={isFocused ? "#194072" : "#bbb"}
        />

        <TextInput
          editable={editable}
          multiline={multiline}
          style={styles.textInput}
          placeholder={isFocused ? placeholder : ""}
          secureTextEntry={eyeOff}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChange}
          value={value}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setEyeOff(!eyeOff)}
          >
            <Icon
              name={eyeOff ? "eye" : "eye-with-line"}
              size={25}
              color={"#bbb"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 42,
    width: 300,
    position: "relative",
  },
  label: {
    position: "absolute",
    left: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    top: 5,
  },
  eyeIcon: {
    marginLeft: 10,
  },
});

export default Input;
