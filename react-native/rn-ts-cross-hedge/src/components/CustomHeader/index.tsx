import * as React from "react";
import { Text, View } from "react-native";
import RenderLeftTitle from "../LeftScreenTitle";
import RenderRightTitle from "../RightScreenTitle";
import { theme } from "./theme";

interface ComponentProps {
    title?: string;
    leftTitle?: string;
    leftPress?: () => void;
    rightTitle?: string;
    rightPress?: () => void;
    theme: "light" | "dark";
}

const CustomHeader = (props: ComponentProps) => (
    <View
        style={
            props.theme === "dark" ? theme.darkContainer : theme.lightContainer
        }
    >
        {props.leftTitle && props.leftPress && (
            <RenderLeftTitle
                press={props.leftPress}
                titleLeft={props.leftTitle}
                styleBackTitle={props.theme}
            />
        )}
        {props.rightTitle && (
            <RenderRightTitle
                theme={props.theme}
                rightTitle={props.rightTitle}
                press={props.rightPress}
            />
        )}
        {props.title && <Text style={theme.title}>{props.title}</Text>}
    </View>
);

export default CustomHeader;
