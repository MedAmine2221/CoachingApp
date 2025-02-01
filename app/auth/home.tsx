import {
  Text,
  StyleSheet,
  Image,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <LinearGradient
      colors={["#dbeafe", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
    >
      <Image
        source={require("../../assets/images/coaching.png")}
        className="w-80"
      />
      <View
        style={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text className="m-8 text-3xl font-bold">Welcome Back</Text>
        <TouchableOpacity
          onPress={() => {}}
          className="rounded-lg bg-orange-600 w-72 h-12 m-4"
          style={styles.buttons}
        >
          <Text className="font-bold text-lg text-white">SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
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
