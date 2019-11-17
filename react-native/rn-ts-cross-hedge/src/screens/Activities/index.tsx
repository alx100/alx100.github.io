import React from "react";
import { SafeAreaView, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import BottomBar from "../../components/BottomBar/index";
import News from "../../components/containerForNews";
import YouBalanceToday from "../../components/containerForYouBalanceToday";
import { colors } from "../../constants/colors";
import {
    showActivitiesBalance,
    showActivitiesNews
} from "../../redux/actions/activities";
import { fetchOperations } from "../../redux/asyncActions/activities";
import { ActivitiesStore } from "../../redux/reducers/activitiesReducer/index";
import { AsyncDispatcher } from "../../types/dispatch";
import TransactionInfoBlock from "./InfoBlock";
import { theme } from "./theme";
import TransactionList from "./Transactions";

interface StoreProps {
    activities: ActivitiesStore;
}

type ComponentProps = StoreProps & AsyncDispatcher & DispatchProp;

class Activities extends React.Component<ComponentProps> {
    async componentDidMount() {
        this.props.dispatch(fetchOperations());
    }

    render() {
        const { operationList } = this.props.activities;
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.backgroundLight }}
            >
                <View style={theme.container}>
                    {this.props.activities.showNews ? (
                        <News onClose={this.hideNews} />
                    ) : null}
                    {operationList ? (
                        <React.Fragment>
                            {this.props.activities.showBalanse ? (
                                <YouBalanceToday onClose={this.hideBalance} />
                            ) : null}
                            <TransactionList list={operationList.list} />
                        </React.Fragment>
                    ) : (
                        <TransactionInfoBlock />
                    )}
                </View>
                <BottomBar screen={"Activities"} />
            </SafeAreaView>
        );
    }

    hideNews = () => this.props.dispatch(showActivitiesNews());

    hideBalance = () => this.props.dispatch(showActivitiesBalance());
}

export default connect((store: StoreProps) => ({
    activities: store.activities
}))(Activities);
