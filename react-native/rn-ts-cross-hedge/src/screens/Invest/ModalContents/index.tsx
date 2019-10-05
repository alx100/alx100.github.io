import React from "react";
import { connect, DispatchProp } from "react-redux";
import InvestModalConfirmed from "../../../components/InvestModalConfirmed";
import InvestModalTemplate from "../../../components/InvestModalTemplate";
import { hideModal } from "../../../redux/actions/modal";
import { t } from "../../../utils/t";
import InvestContent from "./InvestContent";

interface State {
    step: number;
}

interface OwnProps {
    title: string[];
    subtitle?: string[];
    amounts: number[];
}

type ComponentProps = OwnProps & DispatchProp;

class ModalContents extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            step: 0
        };
    }

    render() {
        const { step } = this.state;
        const { title, subtitle } = this.props;
        return (
            <InvestModalTemplate step={step} title={title} subtitle={subtitle}>
                {this.renderMainContent()}
            </InvestModalTemplate>
        );
    }

    renderMainContent = () => {
        const { step } = this.state;
        switch (step) {
            case 0:
                return (
                    <InvestContent
                        amounts={this.props.amounts}
                        cancelFunc={() => {
                            this.props.dispatch(hideModal());
                        }}
                        confirmFunc={this.stepForward}
                    />
                );
            case 1:
                return (
                    <InvestModalConfirmed
                        purpose={t("invest_header").toLocaleLowerCase()}
                        amount={this.props.amounts[0]}
                    />
                );
            default:
                return;
        }
    };

    stepForward = () => {
        this.setState({
            step: this.state.step + 1
        });
    };
}

export default connect()(ModalContents);
