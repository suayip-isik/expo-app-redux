import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface ICustomTextInput {
  type: "userName" | "password";
}

export interface ICustomButton {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  customTitleStyle?: StyleProp<TextStyle>;
}
