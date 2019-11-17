import React from "react";
import {
    RegisteredStyle,
    Text,
    TextStyle,
    View,
    ViewStyle
} from "react-native";
import { theme } from "./theme";

interface OwnProps {
    value: string;
    unit?: string;
    styles?: {
        wrapper?: RegisteredStyle<ViewStyle>;
        integer?: RegisteredStyle<TextStyle>;
        fractional?: RegisteredStyle<TextStyle>;
    };
    showPlus: boolean;
}

const Amount = (props: OwnProps) => {
    const splittedValue: string[] = props.value.split(".");
    return (
        <View
            style={[theme.wrapper, props.styles ? props.styles.wrapper : null]}
        >
            <Text
                style={[
                    theme.integer,
                    props.styles ? props.styles.integer : null
                ]}
            >
                {+splittedValue[0] > 0
                    ? props.showPlus
                        ? `+${splittedValue[0]}`
                        : splittedValue[0]
                    : splittedValue[0]}
                <Text
                    style={[
                        theme.fractional,
                        props.styles ? props.styles.fractional : null
                    ]}
                >
                    {splittedValue[1]
                        ? splittedValue[1].length < 2
                            ? `.${splittedValue[1]}0`
                            : `.${splittedValue[1]}`
                        : ".00"}
                    {props.unit}
                </Text>
            </Text>
        </View>
    );
};

export default Amount;
