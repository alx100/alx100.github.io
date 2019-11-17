import React from "react";
import { Text } from "react-native";
import Block from "../../../../components/InnerPagesBlock";
import { theme } from "./theme";

interface OwnProps {
    title: string;
}

class PortfolioChartBlock extends React.PureComponent<OwnProps> {
    render() {
        return (
            <React.Fragment>
                <Block style={theme.title_wrapper}>
                    <Text style={theme.title_content}>{this.props.title}</Text>
                </Block>
                <Block style={theme.contentWrapper}>
                    {this.props.children}
                </Block>
            </React.Fragment>
        );
    }
}

export default PortfolioChartBlock;
