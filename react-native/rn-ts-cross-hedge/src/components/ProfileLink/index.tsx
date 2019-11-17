import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    content: string;
    redirect?: () => void;
}

type ComponentProps = OwnProps;

const ProfileLink = (props: ComponentProps) => (
    <TouchableOpacity
        onPress={props.redirect ? props.redirect : void 0}
        style={theme.wrapper}
    >
        <Text style={theme.text}>{props.content}</Text>
        <Icon size={1.4 * RH} name="arrow_right" color={colors.textLight} />
    </TouchableOpacity>
);

export default ProfileLink;
