import React from "react";
import { Text, View } from "react-native";
import Amount from "../../../components/Amount";
import Block from "../../../components/InnerPagesBlock";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface Item {
    title: string;
    amount: number;
    unit: string;
    showPlus: boolean;
}

class PortfolioStats extends React.Component<any, any> {
    private Blocks: Item[] = [
        {
            title: "INVESTED",
            amount: 500,
            unit: "€",
            showPlus: false
        },
        {
            title: "PERFORMANCE",
            amount: 23,
            unit: "%",
            showPlus: true
        },
        {
            title: "INTERESTS",
            amount: 2030.5,
            unit: "€",
            showPlus: false
        }
    ];
    render() {
        return (
            <Block style={theme.thirdBlock}>{this.renderInnerBlocks()}</Block>
        );
    }

    renderInnerBlocks = () => {
        return this.Blocks.map((block, i) => (
            <View key={i} style={theme.thirdInnerBlocks}>
                <Text style={theme.innerBlocksTitle}>{block.title}</Text>
                <Amount
                    value={block.amount.toString()}
                    unit={block.unit}
                    showPlus={block.showPlus}
                    styles={{
                        integer: theme.innerBlocksAmount,
                        fractional: theme.innerBlocksAmount
                    }}
                />
            </View>
        ));
    };
}

export default PortfolioStats;
