import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { connect, DispatchProp } from "react-redux";
import { InvestTypes } from "..";
import { fetchBoldChartData } from "../../../api/resources";
import AmountRange, { AmountName } from "../../../components/AmountRange";
import DatePicker from "../../../components/DatePicker";
import DropdownButton from "../../../components/DropdownButton";
import { Icon } from "../../../components/Icons";
import Block from "../../../components/InnerPagesBlock";
import InvestHeadBalance from "../../../components/InvestHeadBalanceTemplate";
import InvestStatus from "../../../components/InvestStatus";
import LinearChart, { LinearChartData } from "../../../components/LineChart";
import PortfolioStatistic from "../../../components/PortfolioStatistic";
import { colors } from "../../../constants/colors";
import { RH } from "../../../constants/window";
import { showModal } from "../../../redux/actions/modal";
import { router } from "../../../services/router";
import { t } from "../../../utils/t";
import ModalContents from "../ModalContents";
import { theme } from "./theme";

interface State {
    oneTime: number;
    monthly: number;
    dropdown: boolean;
    chartData: LinearChartData;
}

export interface InvestHistoryProps {
    investType: InvestTypes;
}

type ComponentProps = InvestHistoryProps & DispatchProp;

class InvestHistory extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            oneTime: 1000,
            monthly: 200,
            dropdown: false,
            chartData: {
                data: [],
                XAxisContent: []
            }
        };
        this.fetchChartData(1);
    }
    render() {
        const { dropdown, oneTime, monthly } = this.state;
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
                            status={t(this.props.investType)}
                            title={t("invest_history_title")}
                        />
                    </View>
                    <Block style={theme.graphicBlock}>
                        <View style={theme.detailsWrapper}>
                            <Text style={theme.text}>
                                {t("returns_text")} 3,80%
                            </Text>
                            <DropdownButton
                                status={this.state.dropdown}
                                getValue={this.handleDropdown}
                            />
                        </View>
                        {dropdown && (
                            <View style={theme.detailsWrapper}>
                                <PortfolioStatistic
                                    label={t(
                                        "portfolioTypeTemplate_statisticBlock_returns"
                                    )}
                                    value={3.8}
                                    unit="%"
                                    img={require("../../../assets/Portfolio/returns_icon.png")}
                                />
                                <PortfolioStatistic
                                    label={t(
                                        "portfolioTypeTemplate_statisticBlock_profitOrLoss"
                                    )}
                                    value={19.96}
                                    unit="€"
                                    img={require("../../../assets/Portfolio/profit_icon.png")}
                                />
                                <TouchableOpacity>
                                    <View style={theme.downloadBtnWrapper}>
                                        <Icon
                                            style={theme.downloadIcon}
                                            name={"download_icon"}
                                            size={1.6 * RH}
                                            color={colors.white}
                                        />
                                        <Text style={theme.downloadBtnContent}>
                                            PROSPECTUS
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        <DatePicker loadData={this.fetchChartData} />
                        <LinearChart {...this.state.chartData!} />
                    </Block>
                    <Block style={theme.amountRangeBlock}>
                        <AmountRange
                            value={oneTime}
                            title={t("one_time_amount")}
                            name={"oneTime"}
                            step={10}
                            getValue={this.handleInvestAmount}
                        />
                        <AmountRange
                            value={monthly}
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

    handleDropdown = (value: boolean) => {
        this.setState({ dropdown: value });
    };

    handleInvestAmount = (name: AmountName, value: number) => {
        name === "oneTime"
            ? this.setState({ oneTime: value })
            : this.setState({ monthly: value });
    };

    fetchChartData = (range: number) => {
        fetchBoldChartData(range).then(res =>
            this.setState({ chartData: res })
        );
        return;
    };

    openModal = () => {
        const { oneTime, monthly } = this.state;
        this.props.dispatch(
            showModal({
                showBackground: true,
                elements: (
                    <ModalContents
                        title={[
                            t(this.props.investType),
                            t("invest_confirmed_title")
                        ]}
                        subtitle={[t("confirm_invest_amount")]}
                        amounts={[oneTime, monthly]}
                    />
                ),
                onClose: () => {
                    router.replaceRoute("invest");
                },
                closeType: "default"
            })
        );
    };
}

export default connect()(InvestHistory);
