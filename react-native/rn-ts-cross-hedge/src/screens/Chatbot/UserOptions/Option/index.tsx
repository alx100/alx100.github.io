import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";

export interface ChatbotOptionItem {
    name: string;
    value: number;
    content: string | React.ReactNode;
    selected: boolean;
    onPress: (value: number) => void;
}

const UserOption = (props: ChatbotOptionItem) => (
    <TouchableOpacity
        style={theme.wrapper}
        onPress={() => props.onPress(props.value)}
    >
        {typeof props.content === "string" ? (
            <Text style={theme.value}>{props.content}</Text>
        ) : (
            <View>{props.content}</View>
        )}
        <View style={theme.checkboxOuter}>
            {props.selected ? <View style={theme.checkboxInner} /> : null}
        </View>
    </TouchableOpacity>
);

export default UserOption;
