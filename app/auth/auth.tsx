import { Text, Animated, StyleSheet, PanResponder } from "react-native";
import React, { useRef } from "react";
import { AuthProps, gestHandler } from "@/constants/Const";

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
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Formulaire de connexion
      </Text>
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
