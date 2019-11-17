import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { t } from "../../utils/t";
import PortfolioStatistic from "../PortfolioStatistic";
import { theme } from "./theme";

interface OwnProps {
    returnsValue: number;
    profitValue: number;
    btnContent: string;
    btnOnPress?: () => void;
}

type ComponentProps = OwnProps;

const WithdrawDropdownContent = (props: ComponentProps) => (
    <View style={theme.wrapper}>
        <PortfolioStatistic
            label={t("portfolioTypeTemplate_statisticBlock_returns")}
            value={props.returnsValue}
            unit="%"
            img={require("../../assets/Portfolio/returns_icon.png")}
        />
        <PortfolioStatistic
            label={t("portfolioTypeTemplate_statisticBlock_profitOrLoss")}
            value={props.profitValue}
            unit="€"
            img={require("../../assets/Portfolio/profit_icon.png")}
        />
        <TouchableOpacity onPress={props.btnOnPress}>
            <View style={theme.btnWrapper}>
                <Text style={theme.btnContent}>{props.btnContent}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export default WithdrawDropdownContent;
