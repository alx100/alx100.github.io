import React from "react";
import { Text, View } from "react-native";
import Amount from "../../../components/Amount";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    isActive: boolean;
    balance: number;
}

type ComponentProps = OwnProps;

const MainBalance = (props: ComponentProps) => (
    <View style={props.isActive ? theme.activeWrapper : theme.disabledWrapper}>
        <View style={theme.innerWrapper}>
            <Text style={theme.text}>{t("mainBalance_title")}</Text>
            <Amount
                value={props.balance.toString()}
                showPlus={true}
                unit={"€"}
                styles={{
                    integer: theme.text,
                    fractional: theme.text
                }}
            />
        </View>
    </View>
);

export default MainBalance;
