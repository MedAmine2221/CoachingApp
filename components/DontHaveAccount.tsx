import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DontHaveAccountProps } from "@/constants/Const";

const DontHaveAccount = ({ isLogin }: DontHaveAccountProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
      className="m-4"
    >
      <Text>
        {isLogin ? "Don't Have account ? " : "If you have account ? "}
      </Text>
      <TouchableOpacity>
        <Text style={{ color: "#194072" }} className="font-bold">
          {isLogin ? "Sign Up" : "Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DontHaveAccount;
