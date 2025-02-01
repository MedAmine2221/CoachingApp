import {
  Text,
  Animated,
  StyleSheet,
  PanResponder,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { AuthProps, gestHandler } from "@/constants/Const";
import Input from "@/components/Input";
import { LinearGradient } from "expo-linear-gradient";
const Auth: React.FC<AuthProps> = ({ slideHeight, slideAnim }) => {
  const panResponder = gestHandler({ slideHeight, slideAnim });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.animatedView,
        {
          height: slideHeight,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Input
        keyboardType={"email-address"}
        iconName={"user"}
        placeholder={"Username"}
      />
      <Input isPassword={true} iconName={"key"} placeholder={"Password"} />
      <LinearGradient
        colors={["#dbeafe", "#ffffff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          className="border-2 border-blue-100 rounded-xl w-72 h-10"
        >
          <Text className="text-blue-900 font-bold text-xl">Login</Text>
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -2 },
    elevation: 5,
  },
});

export default Auth;
