import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalStyles } from "../hooks";

const SignUpScreen = () => {
  return (
    <View style={useGlobalStyles.page}>
      <Text> SignUpScreen</Text>
    </View>
  );
};

export { SignUpScreen };

const styles = StyleSheet.create({});
