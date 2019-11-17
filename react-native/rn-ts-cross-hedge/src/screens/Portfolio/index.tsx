import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { connect } from "react-redux";
import Amount from "../../components/Amount";
import BottomBar from "../../components/BottomBar";
import { Icon } from "../../components/Icons";
import Block from "../../components/InnerPagesBlock";
import ProfileLink from "../../components/ProfileLink";
import RegistrationBlancScreen from "../../components/RegistrationBlancScreen";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { fetchProfileBalance } from "../../redux/asyncActions/finance";
import { FinanceStore } from "../../redux/reducers/financeReducer/index";
import { UserStore } from "../../redux/reducers/userReducer";
import { router } from "../../services/router";
import { AsyncDispatcher } from "../../types/dispatch";
import { t } from "../../utils/t";
import PortfolioStats from "./PortfolioStats/index";
import { theme } from "./theme";

interface StoreProps {
    user: UserStore;
    finance: FinanceStore;
}

type ComponentProps = AsyncDispatcher & StoreProps;

class Portfolio extends React.Component<ComponentProps> {
    async componentDidMount() {
        if (!this.props.finance.balance && this.props.user.user_id) {
            this.props.dispatch(
                fetchProfileBalance({ user_id: this.props.user.user_id })
            );
        }
    }

    render() {
        return (
            <SafeAreaView style={theme.container}>
                <View style={{ flex: 1 }}>
                    {this.props.user.reg_type !== "full" ? (
                        <RegistrationBlancScreen />
                    ) : null}
                    <Block style={theme.firstBlock}>
                        <Amount
                            showPlus={true}
                            value={
                                this.props.finance.balance
                                    ? this.props.finance.balance.toString()
                                    : ""
                            }
                            unit={"€"}
                            styles={{
                                wrapper: theme.amount
                            }}
                        />
                    </Block>
                    <Block style={theme.secondBlock}>
                        <Text style={theme.secondText}>
                            {t("portfolio_blockTwo_title")}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                router.replaceRoute("portfolio_globalView")
                            }
                        >
                            <View style={theme.secondBtn}>
                                <Text style={theme.secondBtnContent}>
                                    {t("portfolio_blockTwo_btnContent")}
                                </Text>
                                <Icon
                                    size={1 * RH}
                                    style={theme.arrowIcon}
                                    name={"arrow_right"}
                                    color={colors.darkGray}
                                />
                            </View>
                        </TouchableOpacity>
                    </Block>
                    <PortfolioStats />
                    <ScrollView>
                        <Block style={theme.lastBlock}>
                            <ProfileLink
                                redirect={() =>
                                    router.replaceRoute("portfolio_type_safe")
                                }
                                content={t("portfolio_links_safe")}
                            />
                            <ProfileLink
                                redirect={() =>
                                    router.replaceRoute("portfolio_type_bold")
                                }
                                content={t("portfolio_links_bold")}
                            />
                            <ProfileLink
                                redirect={() =>
                                    router.replaceRoute(
                                        "portfolio_type_dynamic"
                                    )
                                }
                                content={t("portfolio_links_dynamic")}
                            />
                            <ProfileLink
                                content={t("portfolio_links_trader")}
                            />
                        </Block>
                    </ScrollView>
                </View>
                <BottomBar screen="Portfolio" />
            </SafeAreaView>
        );
    }
}

export default connect((store: StoreProps) => ({
    user: store.user,
    finance: store.finance
}))(Portfolio);
