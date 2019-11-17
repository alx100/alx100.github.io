import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import BarChart from "../../../components/BarChart";
import BottomBar from "../../../components/BottomBar";
import { t } from "../../../utils/t";
import PortfolioRadialChart, {
    PortfolioRadialChartProps
} from "../PortfolioRadialChart";
import PortfolioChartBlock from "./PortfolioChartBlock";
import { theme } from "./theme";

interface TestData {
    top: PortfolioRadialChartProps[];
    middle: PortfolioRadialChartProps[];
    bottom: PortfolioRadialChartProps[];
}

class PortfolioGlobalView extends React.PureComponent<any, any> {
    private TestData: TestData = {
        top: [
            {
                chartContent: "2.2k",
                description: "Safe",
                fill: 0.5
            },
            {
                chartContent: "1.1k",
                description: "Bold",
                fill: 0.25
            },
            {
                chartContent: "2.4k",
                description: "Dynamic",
                fill: 0.55
            },
            {
                chartContent: "1k",
                description: "Trader",
                fill: 0.23
            }
        ],
        middle: [
            {
                chartContent: "2.2%",
                description: "Safe",
                fill: 1
            },
            {
                chartContent: "",
                description: "Bold",
                fill: 0
            },
            {
                chartContent: "2.4%",
                description: "Dynamic",
                fill: 0.55
            },
            {
                chartContent: "1%",
                description: "Trader",
                fill: 0.23
            }
        ],
        bottom: [
            {
                chartContent: "2.2k",
                description: "Safe",
                fill: 0.5
            },
            {
                chartContent: "1.1k",
                description: "Bold",
                fill: 0.25
            },
            {
                chartContent: "2.4k",
                description: "Dynamic",
                fill: 0.55
            },
            {
                chartContent: "1k",
                description: "Trader",
                fill: 0.23
            }
        ]
    };

    render() {
        return (
            <SafeAreaView style={theme.safeAreaView}>
                <ScrollView>
                    <PortfolioChartBlock
                        title={t("portfolioGlobalView_blockOne_title")}
                    >
                        {this.TestData.top.map((el, i) => (
                            <PortfolioRadialChart key={i} {...el} />
                        ))}
                    </PortfolioChartBlock>
                    <PortfolioChartBlock
                        title={t("portfolioGlobalView_blockTwo_title")}
                    >
                        {this.TestData.middle.map((el, i) => (
                            <BarChart key={i} {...el} />
                        ))}
                    </PortfolioChartBlock>
                    <PortfolioChartBlock
                        title={t("portfolioGlobalView_blockThree_title")}
                    >
                        {this.TestData.bottom.map((el, i) => (
                            <PortfolioRadialChart key={i} {...el} />
                        ))}
                    </PortfolioChartBlock>
                </ScrollView>
                <BottomBar screen={"Portfolio"} />
            </SafeAreaView>
        );
    }
}

export default PortfolioGlobalView;
