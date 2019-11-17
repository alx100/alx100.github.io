import { TextInputProps, ViewStyle } from "react-native";

export interface InputStyle extends ViewStyle {
    textAlign?: "auto" | "center" | "left" | "right" | "justify";
}

export interface TextInput extends TextInputProps {
    style: InputStyle;
}
