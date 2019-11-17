import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { RegistrationProps } from "../../screens/Registration";
import { router } from "../../services/router";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface ComponentProps {
    rightTitle?: string;
    theme: "dark" | "light";
    press?: () => void;
    closeIcon?: boolean;
}

const RenderRightTitle = (props: ComponentProps) => (
    <TouchableOpacity
        onPress={
            props.press ||
            (() =>
                router.replaceRoute<RegistrationProps>("registration", {
                    step: 1
                }))
        }
    >
        <View style={theme.btnWrapper}>
            {props.closeIcon ? (
                <Icon
                    size={1.4 * RH}
                    name={"close_icon"}
                    color={
                        props.theme === "light"
                            ? colors.white
                            : colors.activeTitleColor
                    }
                />
            ) : (
                <Text
                    style={
                        props.theme === "light"
                            ? theme.text_light
                            : theme.text_dark
                    }
                >
                    {props.rightTitle}
                </Text>
            )}
        </View>
    </TouchableOpacity>
);

export default RenderRightTitle;
