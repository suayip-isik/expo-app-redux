import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLOR_IOS_BLUE, COLOR_WHITE } from "../theme";
import { ICustomButton } from "./types";

const CustomButton: React.FC<ICustomButton> = ({
  onPress,
  title,
  customButtonStyle,
  customTitleStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, customButtonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.title, customTitleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export { CustomButton };

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_IOS_BLUE,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  title: {
    color: COLOR_WHITE,
  },
});
