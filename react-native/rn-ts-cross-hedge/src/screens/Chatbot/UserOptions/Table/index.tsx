import React from "react";
import { View } from "react-native";
import UserOptionsTableRow, { TableRowProps } from "./TableRow";
import { theme } from "./theme";

interface OwnProps {
    fields: TableRowProps[];
}

const UserOptionTable = (props: OwnProps) => (
    <View style={theme.wrapper}>
        {props.fields.map(el => (
            <UserOptionsTableRow key={el.name} {...el} />
        ))}
    </View>
);

export default UserOptionTable;
