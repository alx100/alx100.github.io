import React from "react";
import { Text, View, ViewProperties } from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    content: string;
}

type ComponentProps = OwnProps & ViewProperties;

const Warning = (props: ComponentProps) => (
    <View style={[theme.warningWrapper, props.style]}>
        <Icon
            style={theme.icon}
            size={1.5 * RH}
            name="warning_icon"
            color={colors.lightBlueCrossButton}
        />
        <Text style={theme.warningContent}>{props.content}</Text>
    </View>
);

export default Warning;
