import React from "react";
import { Platform, Switch } from "react-native";
import { colors } from "../../constants/colors";
interface OwnProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const DefaultSwitch = (props: OwnProps) => {
    return (
        <Switch
            thumbTintColor={
                Platform.OS === "android" ? colors.white : undefined
            }
            onTintColor={colors.lightBlueCrossButton}
            tintColor={
                Platform.OS === "android" ? colors.globalCircle : undefined
            }
            value={props.value}
            onValueChange={props.onValueChange}
            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        />
    );
};

export default DefaultSwitch;
