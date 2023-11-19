import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation";
import { SafeAreaView } from "react-native";
import { useGlobalStyles } from "./hooks";

const Router: React.FC = () => (
  <SafeAreaView style={useGlobalStyles.page}>
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  </SafeAreaView>
);

export default Router;
