import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Amount from "../Amount";
import DropdownArrowAnimation from "../DropdownArrowAnimation";
import { theme } from "./theme";

interface OwnProps {
    status: boolean;
    content: string;
    amount: number;
    getValue: (value: boolean) => void;
}

type ComponentProps = OwnProps;

const WithdrawDropdown = (props: ComponentProps) => (
    <TouchableOpacity
        onPress={() => {
            props.getValue(!props.status);
        }}
        style={theme.wrapper}
    >
        <Text style={theme.text}>{props.content}</Text>
        <View style={theme.row}>
            <Amount
                value={props.amount.toString()}
                unit={"€"}
                showPlus={false}
                styles={{
                    wrapper: theme.amountWrapper,
                    integer: theme.amountText,
                    fractional: theme.amountText
                }}
            />
            <DropdownArrowAnimation up={props.status} />
        </View>
    </TouchableOpacity>
);

export default WithdrawDropdown;
