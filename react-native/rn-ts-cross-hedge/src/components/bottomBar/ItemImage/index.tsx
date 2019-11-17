import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../constants/colors";
import { RH } from "../../../constants/window";
import { RouteNames } from "../../../services/router";
import { Icon } from "../../Icons";
import { theme } from "./theme";

interface OwnProps {
    onPress: (routeName: keyof RouteNames) => void;
    title: string;
    iconName: string;
    routeName: keyof RouteNames;
}

type ComponentProps = OwnProps;

const ItemImage = (props: ComponentProps) => (
    <TouchableOpacity onPress={() => props.onPress(props.routeName)}>
        <View style={theme.flexColumn}>
            <View style={theme.icon}>
                <Icon
                    name={props.iconName}
                    size={2.5 * RH}
                    color={colors.white}
                />
            </View>
            <Text style={theme.text}> {props.title} </Text>
        </View>
    </TouchableOpacity>
);

export default ItemImage;
