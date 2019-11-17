import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { connect, DispatchProp } from "react-redux";
import { Action } from "redux";
import AmountRange, { AmountName } from "../../components/AmountRange";
import FinanceChart from "../../components/FinanceChart";
import { Icon } from "../../components/Icons";
import Block from "../../components/InnerPagesBlock";
import InvestHeadBalance from "../../components/InvestHeadBalanceTemplate";
import InvestStatus from "../../components/InvestStatus";
import InvestTypesPicker from "../../components/InvestTypesPicker";
import { colors } from "../../constants/colors";
import { RH, RW } from "../../constants/window";
import { showModal } from "../../redux/actions/modal";
import { router } from "../../services/router";
import { t } from "../../utils/t";
import FinanceChartDetailedView from "./DetailedInfo";
import { InvestHistoryProps } from "./History";
import ModalContents from "./ModalContents";
import { theme } from "./theme";

export type InvestTypes = "safe" | "bold" | "dynamic" | "trader";

interface State {
    oneTime: number;
    monthly: number;
    potential: InvestTypes;
}

type ComponentProps = DispatchProp;

class Invest extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            oneTime: 100,
            monthly: 200,
            potential: "safe"
        };
    }

    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                <ScrollView
                    style={theme.scroll}
                    showsVerticalScrollIndicator={false}
                >
                    <Block style={theme.balanceBlock}>
                        <InvestHeadBalance
                            title={t("balance_title")}
                            balance={400}
                        />
                    </Block>
                    <View style={theme.absoluteWrapper}>
                        <InvestStatus
                            status={t(this.state.potential)}
                            title={t("invest_potential_title")}
                        />
                    </View>

                    <Block style={theme.graphicBlock}>
                        <InvestTypesPicker
                            loadData={this.handlePotential}
                            access={3}
                        />
                        <View style={theme.detailsWrapper}>
                            <Text style={theme.text}>
                                Your potential fund in 10 years 6 407€
                            </Text>
                            <TouchableOpacity onPress={this.moveToHistory}>
                                <View style={theme.historyBtnWrapper}>
                                    <Text style={theme.historyBtnContent}>
                                        {t("invest_history_title")}
                                    </Text>
                                    <Icon
                                        size={1 * RH}
                                        name="arrow_right"
                                        color={colors.textLight}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <FinanceChartDetailedView />
                        <FinanceChart
                            data={[
                                {
                                    value: 10,
                                    percentage: "10",
                                    year: 2020
                                },
                                {
                                    value: 7,
                                    percentage: "25",
                                    year: 2021
                                },
                                {
                                    value: 13,
                                    percentage: "14.5",
                                    year: 2022
                                },
                                {
                                    value: 25,
                                    percentage: "1",
                                    year: 2023
                                }
                            ]}
                        />
                    </Block>
                    <Block style={theme.amountRangeBlock}>
                        <AmountRange
                            value={this.state.oneTime}
                            title={t("one_time_amount")}
                            name={"oneTime"}
                            step={10}
                            getValue={this.handleInvestAmount}
                        />
                        <AmountRange
                            value={this.state.monthly}
                            title={t("monthly_amount")}
                            name={"monthly"}
                            step={10}
                            getValue={this.handleInvestAmount}
                        />
                    </Block>

                    <Block style={theme.investBtnBlock}>
                        <TouchableOpacity
                            style={theme.investBtnWrapper}
                            onPress={this.openModal}
                        >
                            <Text style={theme.investBtnContent}>
                                {t("btn_content_invest")}
                            </Text>
                        </TouchableOpacity>
                    </Block>
                </ScrollView>
            </SafeAreaView>
        );
    }

    moveToHistory = () =>
        router.replaceRoute<InvestHistoryProps>("invest_history", {
            investType: this.state.potential
        });

    handlePotential = (potential: InvestTypes) => {
        this.setState({
            potential
        });
    };

    handleInvestAmount = (name: AmountName, value: number) => {
        name === "oneTime"
            ? this.setState({ oneTime: value })
            : this.setState({ monthly: value });
    };

    openModal = () => {
        const { oneTime, monthly, potential } = this.state;
        this.props.dispatch(
            showModal({
                showBackground: true,
                elements: (
                    <ModalContents
                        title={[t(potential), t("invest_confirmed_title")]}
                        subtitle={[t("confirm_invest_amount")]}
                        amounts={[oneTime, monthly]}
                    />
                ),
                closeType: "default"
            })
        );
    };
}

export default connect()(Invest);
