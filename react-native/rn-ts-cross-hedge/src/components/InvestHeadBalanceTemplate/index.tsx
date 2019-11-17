import React, { Fragment } from "react";
import { Text } from "react-native";
import Amount from "../Amount";
import { theme } from "./theme";

interface OwnProps {
    balance: number;
    title: string;
}

const InvestHeadBalance = (props: OwnProps) => {
    return (
        <Fragment>
            <Text style={theme.title}>{props.title}</Text>
            <Amount
                value={props.balance.toString()}
                unit={"€"}
                showPlus={false}
            />
        </Fragment>
    );
};

export default InvestHeadBalance;
