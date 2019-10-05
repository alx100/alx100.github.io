import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { fetchProfileBalance } from "../../redux/asyncActions/finance";
import { FinanceStore } from "../../redux/reducers/financeReducer/index";
import { UserStore } from "../../redux/reducers/userReducer";
import { AsyncDispatcher } from "../../types/dispatch";
import Amount from "../Amount";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    onClose: () => void;
}

interface StoreProps {
    finance: FinanceStore;
    user: UserStore;
}

type ComponentProps = StoreProps & OwnProps & AsyncDispatcher;

class Balance extends React.PureComponent<ComponentProps> {
    async componentDidMount() {
        if (!this.props.finance.balance && this.props.user.user_id) {
            this.props.dispatch(
                fetchProfileBalance({ user_id: this.props.user.user_id })
            );
        }
    }
    render() {
        const date = new Date().toDateString();
        return (
            <View style={theme.wrapper}>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-around"
                    }}
                >
                    {this.props.finance.balance ? (
                        <React.Fragment>
                            <View style={theme.balanceWrapper}>
                                <Text style={theme.text}>
                                    Your balance today
                                </Text>
                                <Amount
                                    value={this.props.finance.balance.toString()}
                                    showPlus={true}
                                    unit="€"
                                    styles={{
                                        wrapper: theme.amountWrapper,
                                        integer: theme.text,
                                        fractional: theme.text
                                    }}
                                />
                            </View>

                            <TouchableOpacity
                                style={{ alignSelf: "center" }}
                                onPress={this.props.onClose}
                            >
                                <Icon
                                    size={1.6 * RH}
                                    name={"close_circle_icon"}
                                    color={colors.textLight}
                                />
                            </TouchableOpacity>
                        </React.Fragment>
                    ) : null}
                </View>
                <Text style={theme.date}>{date}</Text>
            </View>
        );
    }
}

export default connect((store: StoreProps) => ({
    finance: store.finance,
    user: store.user
}))(Balance);
