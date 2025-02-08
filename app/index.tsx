import { View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const RootPage = () => {
  return (
    <View>
      <Redirect href={"/app/dashboard"}></Redirect>
    </View>
  );
};

export default RootPage;
