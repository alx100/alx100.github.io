import React from "react";
import {
    RegisteredStyle,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    active: boolean;
    label: string;
    onPress: () => void;
    styles?: {
        wrapper?: RegisteredStyle<ViewStyle>;
        iconSize?: number;
        label?: RegisteredStyle<TextStyle>;
    };
    color?: string;
    activeColor?: string;
}

export const RadioButton = (props: OwnProps) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[theme.wrapper, props.styles && props.styles.wrapper]}>
            {props.active ? (
                <Icon
                    name={"radio_button_checked"}
                    size={(props.styles && props.styles.iconSize) || 2 * RH}
                    color={props.activeColor || colors.textLight}
                    style={theme.radioIcon}
                />
            ) : (
                <Icon
                    name={"radio_button_unchecked"}
                    size={(props.styles && props.styles.iconSize) || 2 * RH}
                    color={props.color || colors.textLight}
                    style={theme.radioIcon}
                />
            )}
            <Text style={[theme.label, props.styles && props.styles.label]}>
                {props.label}
            </Text>
        </View>
    </TouchableOpacity>
);
