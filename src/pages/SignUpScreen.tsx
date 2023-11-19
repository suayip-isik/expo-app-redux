import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalStyles } from "../hooks";
import { CustomButton, CustomTextInput } from "../components";

const SignUpScreen = () => {
  return (
    <View style={[useGlobalStyles.page, styles.page]}>
      <CustomTextInput placeholder="Name" />
      <CustomTextInput placeholder="Surname" />
      <CustomTextInput placeholder="Age" />
      <CustomTextInput placeholder="E-mail" />
      <CustomTextInput placeholder="Username" />
      <CustomTextInput placeholder="Password" type="password" />
      <CustomTextInput placeholder="Try Password" type="password" />
      <CustomButton
        title="Register"
        onPress={() => {}}
        customButtonStyle={{ alignSelf: "center", marginTop: 20 }}
      />
    </View>
  );
};

export { SignUpScreen };

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    gap: 20,
    justifyContent: "center",
  },
});
