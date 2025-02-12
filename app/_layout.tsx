import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="auth/home"></Stack.Screen>
      
    </Stack>
  );
}
