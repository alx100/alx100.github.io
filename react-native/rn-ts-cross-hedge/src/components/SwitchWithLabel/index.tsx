import React from "react";
import { Text, View } from "react-native";
import DefaultSwitch from "../DefaultSwitch";
import { theme } from "./theme";

interface OwnProps {
    content: string;
    onSwitchChange: (value: boolean) => void;
    value: boolean;
}

type ComponentProps = OwnProps;

const SwitchWithLabel = (props: ComponentProps) => (
    <View style={theme.switchWrapper}>
        <Text style={theme.switchLabel}>{props.content}</Text>
        <DefaultSwitch
            value={props.value}
            onValueChange={props.onSwitchChange}
        />
    </View>
);

export default SwitchWithLabel;
