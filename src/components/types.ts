import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface ICustomTextInput {
  type?: "userName" | "password";
  placeholder: string | undefined;
}

export interface ICustomButton {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  customTitleStyle?: StyleProp<TextStyle>;
}
