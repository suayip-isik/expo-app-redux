import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import UserIcon from "../../assets/icons/UserIcon.svg";
import PasswordIcon from "../../assets/icons/PasswordIcon.svg";
import { COLOR_BLACK, COLOR_LIGHT_GRAY } from "../theme";
import { ICustomTextInput } from "./types";

const CustomTextInput: React.FC<ICustomTextInput> = ({ type }) => {
  return (
    <View style={styles.container}>
      {type === "userName" ? (
        <UserIcon width={20} height={20} color={COLOR_BLACK} />
      ) : (
        <PasswordIcon width={20} height={20} color={COLOR_BLACK} />
      )}

      <TextInput
        secureTextEntry={type === "password"}
        style={styles.input}
        placeholder={type === "userName" ? "User Name" : "Password"}
      />
    </View>
  );
};

export { CustomTextInput };

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLOR_LIGHT_GRAY,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 4,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
  },
});
