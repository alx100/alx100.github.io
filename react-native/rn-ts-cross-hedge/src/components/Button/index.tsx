import React from "react";
import {
    RegisteredStyle,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProperties,
    ViewStyle
} from "react-native";

interface OwnProps {
    content: string;
    onPress: () => void;
    buttonStyle: RegisteredStyle<ViewStyle>;
    textStyle: RegisteredStyle<TextStyle>;
}

export type Button = OwnProps & TouchableOpacityProperties;

export const Button = (props: Button) => (
    <TouchableOpacity
        {...props}
        onPress={props.onPress}
        style={props.buttonStyle}
    >
        <Text style={props.textStyle}>{props.content}</Text>
    </TouchableOpacity>
);
