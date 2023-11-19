import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation";
import { useGlobalStyles } from "./hooks";
import { SafeAreaView } from "react-native-safe-area-context";

const Router: React.FC = () => (
  <SafeAreaView style={useGlobalStyles.page}>
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  </SafeAreaView>
);

export default Router;
