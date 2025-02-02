import {
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useRef } from "react";
import { AuthProps, gestHandler } from "@/constants/Const";
import Input from "@/components/Input";
import { LinearGradient } from "expo-linear-gradient";
import DontHaveAccount from "@/components/DontHaveAccount";
import { signUpFormType, signUpSchema } from "@/schema/schemaSignUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
const SignUp: React.FC<AuthProps> = ({ slideHeight, slideAnim }) => {
  const panResponder = gestHandler({ slideHeight, slideAnim });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<signUpFormType> = (data: signUpFormType) => {
    console.log(data);
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
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text className="m-4 font-bold text-4xl" style={{ color: "#194072" }}>
          Sign Up
        </Text>
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              iconName={"user"}
              placeholder={"First Name"}
              label={"First Name"}
              value={value}
              onChange={onChange}
            />
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={{ color: "#ff8566" }}>{errors.firstName.message}</Text>
        )}
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              iconName={"user"}
              placeholder={"Last Name"}
              label={"Last Name"}
              value={value}
              onChange={onChange}
            />
          )}
          name="lastName"
        />
        {errors.lastName && (
          <Text style={{ color: "#ff8566" }}>{errors.lastName.message}</Text>
        )}
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
              keyboardType={"email-address"}
              iconName={"mail"}
              placeholder={"E-mail"}
              label={"E-mail"}
              value={value}
              onChange={onChange}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={{ color: "#ff8566" }}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              keyboardType={"phone-pad"}
              iconName={"phone"}
              placeholder={"Phone Number"}
              label={"Phone Number"}
              value={value}
              onChange={onChange}
            />
          )}
          name="phone"
        />
        {errors.phone && (
          <Text style={{ color: "#ff8566" }}>{errors.phone.message}</Text>
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
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              isPassword={true}
              iconName={"key"}
              placeholder={"Confirm password"}
              label={"Confirm password"}
              value={value}
              onChange={onChange}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text style={{ color: "#ff8566" }}>
            {errors.confirmPassword.message}
          </Text>
        )}
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
            <Text className="text-white font-bold text-xl">Enregistrer</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View>
          <DontHaveAccount />
        </View>
      </ScrollView>
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

export default SignUp;
