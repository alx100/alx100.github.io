import React from "react";
import { Text, View } from "react-native";
import { theme } from "./theme";

interface OwnProps {
    name: string;
    value: string;
}

const DetailViewInfoRow = (props: OwnProps) => (
    <View style={theme.wrapper}>
        <Text style={theme.name}>{props.name}</Text>
        <View style={theme.divider} />
        <Text style={theme.value}>{props.value}</Text>
    </View>
);

export default DetailViewInfoRow;
