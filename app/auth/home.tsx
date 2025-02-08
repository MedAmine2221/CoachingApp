import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import Auth from "./auth";
import SignUp from "./signUp";
import { screenHeight } from "@/constants/Const";

export default function Home() {
  const [openSigninUp, setOpenSigninUp] = useState(false);
  const slideHeight = screenHeight / 1.5;

  const slideAnim = useRef(new Animated.Value(slideHeight)).current;

  const handleSignIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const slideHeightSignUp = screenHeight / 1.25;

  const slideAnimSignUp = useRef(new Animated.Value(slideHeightSignUp)).current;

  const handleSignUp = () => {
    Animated.timing(slideAnimSignUp, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setOpenSigninUp(true);
  };

  return (
    <LinearGradient
      colors={["#dbeafe", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
    >
      <Image
        source={require("../../assets/images/coaching.png")}
        className={openSigninUp ? "w-52 h-52" : "w-80 h-80"}
      />
      <View
        style={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text className="m-8 text-3xl font-bold">Welcome Back</Text>
        <TouchableOpacity
          onPress={handleSignIn}
          className="rounded-lg bg-orange-600 w-72 h-12 m-4"
          style={styles.buttons}
        >
          <Text className="font-bold text-lg text-white">SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          className="rounded-lg border-orange-600 border-2 w-72 h-12"
          style={styles.buttons}
        >
          <Text className="font-bold text-lg">SIGN UP</Text>
        </TouchableOpacity>
        <View
          className="my-40"
          style={{ alignItems: "center", flexDirection: "column" }}
        >
          <Text className="text-lg font-bold">login with social media</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/facebook-logo.png")}
                className="w-8 h-8"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/Gmail.png")}
                className="w-10 h-8 m-4"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Auth slideHeight={slideHeight} slideAnim={slideAnim} />
      <SignUp slideHeight={slideHeightSignUp} slideAnim={slideAnimSignUp} />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttons: { justifyContent: "center", alignItems: "center" },
});
