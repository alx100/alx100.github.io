import React from "react";
import { fetchBoldChartData } from "../../../api/resources";
import { LinearChartData } from "../../../components/LineChart/index";
import PortfolioTypeTemplate from "../../../components/PortfolioTypeTemplate";
import { t } from "../../../utils/t";

interface State {
    chartData?: LinearChartData;
}

class PortfolioTypeBold extends React.PureComponent<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {};

        this.fetchChartData(1);
    }
    render() {
        return this.state.chartData ? (
            <PortfolioTypeTemplate
                onDateChange={this.fetchChartData}
                chartData={this.state.chartData!}
                descriptionProps={{
                    onSwitchChange: () => void 0,
                    descriptionContent: {
                        title: t("portfolioType_safe_description_title"),
                        content: t("portfolioType_safe_description_content")
                    },
                    statisticValues: {
                        returns: 30.5,
                        profitOrLoss: 50
                    }
                }}
            />
        ) : null;
    }

    fetchChartData = (range: number) => {
        fetchBoldChartData(range).then(res =>
            this.setState({ chartData: res })
        );
        return;
    };
}

export default PortfolioTypeBold;
