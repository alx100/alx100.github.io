import React from "react";
import { Text, View } from "react-native";
import DescriptionBlock from "../../\bDescriptionBlock";
import { t } from "../../../utils/t";
import DefaultSwitch from "../../DefaultSwitch";
import Block from "../../InnerPagesBlock";
import PortfolioStatistic from "../../PortfolioStatistic";
import SwitchWithLabel from "../../SwitchWithLabel";
import { theme } from "./theme";

export interface PortfolioTypeDescriptionProps {
    onSwitchChange: (val: boolean) => void;
    descriptionContent: {
        title: string;
        content: string;
    };
    statisticValues: {
        returns: number;
        profitOrLoss: number;
    };
}

interface State {
    status: boolean;
}

type ComponentProps = PortfolioTypeDescriptionProps;

class PortfolioTypeDescription extends React.PureComponent<
    ComponentProps,
    State
> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            status: false
        };
    }
    render() {
        return (
            <Block style={theme.blockWrapper}>
                <DescriptionBlock
                    descriptionTitle={this.props.descriptionContent.title}
                    descriptionText={this.props.descriptionContent.content}
                />
                <View style={theme.statisticWrapper}>
                    <PortfolioStatistic
                        label={t(
                            "portfolioTypeTemplate_statisticBlock_returns"
                        )}
                        value={this.props.statisticValues.returns}
                        unit="%"
                        img={require("../../../assets/Portfolio/returns_icon.png")}
                    />
                    <PortfolioStatistic
                        label={t(
                            "portfolioTypeTemplate_statisticBlock_profitOrLoss"
                        )}
                        value={this.props.statisticValues.profitOrLoss}
                        unit="€"
                        img={require("../../../assets/Portfolio/profit_icon.png")}
                    />
                </View>
                <SwitchWithLabel
                    content={t("portfolioTypeTemplate_switch_title")}
                    onSwitchChange={this.onSwitchChange}
                    value={this.state.status}
                />
            </Block>
        );
    }

    onSwitchChange = (status: boolean) => {
        this.setState({ status });

        this.props.onSwitchChange(status);
    };
}

export default PortfolioTypeDescription;
