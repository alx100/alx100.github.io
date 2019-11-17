import React from "react";
import { Text, View } from "react-native";
import Amount from "../../../components/Amount";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    type: "invested" | "remained";
    amount: number;
}

type ComponentProps = OwnProps;

const FinanceBlock = (props: ComponentProps) => {
    const amountStyle =
        props.type === "invested" ? theme.investTitle : theme.remainedTitle;
    return (
        <View
            style={
                props.type === "invested"
                    ? theme.investWrapper
                    : theme.remainedWrapper
            }
        >
            <View style={theme.description}>
                <View
                    style={
                        props.type === "invested"
                            ? theme.investIcon
                            : theme.remainedIcon
                    }
                />
                <Text
                    style={
                        props.type === "invested"
                            ? theme.investTitle
                            : theme.remainedTitle
                    }
                >
                    {props.type === "invested"
                        ? t("financeBlock_invested")
                        : t("financeBlock_remained")}
                </Text>
            </View>
            <Amount
                value={props.amount.toString()}
                showPlus={true}
                unit={"€"}
                styles={{
                    integer: amountStyle,
                    fractional: amountStyle
                }}
            />
        </View>
    );
};

export default FinanceBlock;
