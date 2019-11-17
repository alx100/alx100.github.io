import React from "react";
import { Text, View } from "react-native";
import { theme } from "./theme";

export interface TableRowProps {
    name: string;
    value: string | number;
}

const UserOptionsTableRow = (props: TableRowProps) => (
    <View style={theme.wrapper}>
        <Text style={theme.name}>{props.name}</Text>
        <Text style={theme.value}>{props.value}</Text>
    </View>
);

export default UserOptionsTableRow;
