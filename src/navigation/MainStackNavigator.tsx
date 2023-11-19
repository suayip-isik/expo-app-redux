import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, ProfileScreen, SignUpScreen } from "../pages";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
      <Stack.Screen component={SignUpScreen} name="SignUpScreen" />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
