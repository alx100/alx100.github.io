import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import BottomBar from "../../components/BottomBar";
import DatePicker from "../../components/DatePicker";
import Block from "../../components/InnerPagesBlock";
import RadialChart from "../../components/RadialChart";
import { fetchOperations } from "../../redux/asyncActions/activities";
import { fetchProfileBalance } from "../../redux/asyncActions/finance";
import { ActivitiesStore } from "../../redux/reducers/activitiesReducer";
import { FinanceStore } from "../../redux/reducers/financeReducer/index";
import { UserStore } from "../../redux/reducers/userReducer";
import { AsyncDispatcher } from "../../types/dispatch";
import DepositHelper from "./DepositHelper";
import FinanceBlock from "./FinanceBlock";
import MainBalance from "./MainBalance";
import { theme } from "./theme";

interface StoreProps {
    activities: ActivitiesStore;
    finance: FinanceStore;
    user: UserStore;
}

type ComponentProps = StoreProps & AsyncDispatcher;

class Account extends React.PureComponent<ComponentProps> {
    async componentDidMount() {
        if (!this.props.activities.operationList) {
            this.props.dispatch(fetchOperations());
        }

        if (!this.props.finance.balance && this.props.user.user_id) {
            this.props.dispatch(
                fetchProfileBalance({ user_id: this.props.user.user_id })
            );
        }
    }

    render() {
        const { operationList } = this.props.activities;
        return (
            <SafeAreaView style={theme.safeAreaView}>
                <ScrollView>
                    <Block>
                        <DatePicker loadData={this.loadData} />
                        <View style={theme.chartWrapper}>
                            {operationList ? (
                                <RadialChart
                                    progress={0.3}
                                    content={{
                                        value: "50.45",
                                        description: "Hello, world"
                                    }}
                                />
                            ) : (
                                <DepositHelper />
                            )}
                        </View>
                        <FinanceBlock type={"invested"} amount={600} />
                        <FinanceBlock type={"remained"} amount={400} />
                    </Block>
                    <Block style={theme.mainBalanceBlock}>
                        <MainBalance
                            isActive={Boolean(this.props.finance.balance)}
                            balance={
                                this.props.finance.balance
                                    ? this.props.finance.balance
                                    : 0
                            }
                        />
                    </Block>
                </ScrollView>
                <BottomBar screen={"Account"} />
            </SafeAreaView>
        );
    }

    loadData = (value: number) => value;
}

export default connect((store: StoreProps) => ({
    activities: store.activities,
    finance: store.finance,
    user: store.user
}))(Account);
