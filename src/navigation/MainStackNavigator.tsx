import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, ProfileScreen } from "../pages";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
