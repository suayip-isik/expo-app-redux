import { GestureResponderEvent } from "react-native";

export interface ICustomTextInput {
  type: "userName" | "password";
}

export interface ICustomButton {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
