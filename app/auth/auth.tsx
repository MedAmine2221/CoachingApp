import {
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { AuthProps, gestHandler } from "@/constants/Const";
import Input from "@/components/Input";
import { LinearGradient } from "expo-linear-gradient";
import DontHaveAccount from "@/components/DontHaveAccount";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { authFormType, authSchema } from "@/schema/schemaAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";

const Auth: React.FC<AuthProps> = ({ slideHeight, slideAnim }) => {
  const panResponder = gestHandler({ slideHeight, slideAnim });
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<authFormType>({
    resolver: zodResolver(authSchema),
  });
  //     console.log(data);

  const onSubmit: SubmitHandler<authFormType> = (data: authFormType) => {
    router.push("/app/dashboard");
  };
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
      <Text
        className="bottom-16 font-bold text-4xl"
        style={{ color: "#194072" }}
      >
        Login
      </Text>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Input
            iconName={"user"}
            placeholder={"Username"}
            label={"Username"}
            value={value}
            onChange={onChange}
          />
        )}
        name="username"
      />
      {errors.username && (
        <Text style={{ color: "#ff8566" }}>{errors.username.message}</Text>
      )}

      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Input
            isPassword={true}
            iconName={"key"}
            placeholder={"Password"}
            label={"Password"}
            value={value}
            onChange={onChange}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={{ color: "#ff8566" }}>{errors.password.message}</Text>
      )}
      <TouchableOpacity onPress={() => {}}>
        <Text className="bottom-1 m-5 left-24 font-bold text-base">
          Forgot password ?
        </Text>
      </TouchableOpacity>

      <LinearGradient
        colors={["#194072", "#cbd5e1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ borderRadius: 100 }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          className="w-96 h-14"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-white font-bold text-xl">Se connecter</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View className="top-20 left-20">
        <DontHaveAccount isLogin={true} />
      </View>
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
