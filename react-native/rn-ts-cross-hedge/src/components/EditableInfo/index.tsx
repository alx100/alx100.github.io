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
    title: string;
    value?: string;
    divider?: boolean;
    editable: boolean;
    onEdit?: () => void;
    theme: "dark" | "light";
    titleColor?: string;
    titleStyle?: TextStyle | RegisteredStyle<TextStyle>;
    iconColor?: string;
    wrapperStyle?: ViewStyle;
    valueRegular?: boolean;
    titleRegular?: boolean;
}

type ComponentProps = OwnProps;

const EditableInfo = (props: ComponentProps) => (
    <React.Fragment>
        <View style={[theme.wrapper, props.wrapperStyle]}>
            <View>
                <Text
                    style={[
                        theme.text,
                        props.titleColor ? { color: props.titleColor } : null,
                        props.titleStyle!
                    ]}
                >
                    {`${
                        props.titleRegular
                            ? props.title
                            : props.title.toUpperCase()
                    }${props.value ? ":" : ""}`}
                </Text>
                {props.value ? (
                    <Text
                        style={
                            props.theme === "dark" ? theme.textDark : theme.text
                        }
                    >
                        {props.valueRegular
                            ? props.value
                            : props.value.toUpperCase()}
                    </Text>
                ) : null}
            </View>
            {props.editable ? (
                <TouchableOpacity
                    onPress={props.onEdit ? props.onEdit : void 0}
                >
                    <Icon
                        size={1.5 * RH}
                        name={"pen_icon"}
                        color={props.iconColor || colors.textLight}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
        {props.divider ? <View style={theme.divider} /> : null}
    </React.Fragment>
);

export default EditableInfo;
