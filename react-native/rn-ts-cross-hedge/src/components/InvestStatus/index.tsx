import React from "react";
import { Text, View } from "react-native";
import { theme } from "./theme";

interface OwnProps {
    status: string;
    title: string;
}

const InvestStatus = (props: OwnProps) => {
    return (
        <View style={theme.container}>
            <Text style={theme.content}>
                {props.status} {props.title}
            </Text>
        </View>
    );
};

export default InvestStatus;
