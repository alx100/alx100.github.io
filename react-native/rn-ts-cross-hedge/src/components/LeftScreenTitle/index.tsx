import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface ComponentProps {
    titleLeft: string;
    styleBackTitle: "light" | "dark";
    press?: () => void;
}

const RenderLeftTitle = (props: ComponentProps) => (
    <TouchableOpacity onPress={props.press || (() => Actions.pop())}>
        <View style={theme.positionLeftText}>
            <Icon
                size={1.4 * RH}
                name={"arrow_left"}
                color={
                    props.styleBackTitle === "light"
                        ? colors.white
                        : colors.backgroundDark
                }
            />
            <Text
                style={
                    props.styleBackTitle === "light"
                        ? theme.text_light
                        : theme.text_dark
                }
            >
                {props.titleLeft}
            </Text>
        </View>
    </TouchableOpacity>
);

export default RenderLeftTitle;
