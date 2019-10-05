import React from "react";
import { connect, DispatchProp } from "react-redux";
import AmountRangeWithButtons from "../../../components/AmountRangeWithButtons";
import InvestModalConfirmed from "../../../components/InvestModalConfirmed";
import InvestModalTemplate from "../../../components/InvestModalTemplate";
import { hideModal } from "../../../redux/actions/modal";
import { t } from "../../../utils/t";
import WalletPickerContent from "./WalletPickerContent";

export type Wallets = "bank_account" | "crypto_wallet";
interface State {
    step: number;
    amount: number;
    wallet: Wallets;
}

interface OwnProps {
    title: string[];
    subtitle?: string[];
    defaultAmount?: number;
}

type ComponentProps = OwnProps & DispatchProp;

class ModalContents extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            step: 0,
            amount: props.defaultAmount || 100,
            wallet: "bank_account"
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
                    <AmountRangeWithButtons
                        amount={this.state.amount}
                        cancelFunc={() => {
                            this.props.dispatch(hideModal());
                        }}
                        confirmFunc={this.stepForward}
                        handleAmount={this.handleAmount}
                        amountTitle={t("withdraw_amount_range_title")}
                        forwardBtnContent={t("btn_content_continue")}
                    />
                );
            case 1:
                return (
                    <WalletPickerContent
                        wallet={this.state.wallet}
                        amount={this.state.amount}
                        getWallet={this.handleToward}
                        confirmFunc={this.stepForward}
                    />
                );
            case 2:
                return (
                    <InvestModalConfirmed
                        purpose={t("withdraw_header").toLocaleLowerCase()}
                        amount={this.state.amount}
                        towards={t(this.state.wallet).toLocaleLowerCase()}
                    />
                );
            default:
                return;
        }
    };

    handleAmount = (value: number) => {
        this.setState({ amount: value });
    };

    handleToward = (wallet: Wallets) => {
        this.setState({ wallet });
    };

    stepForward = () => {
        this.setState({
            step: this.state.step + 1
        });
    };
}

export default connect()(ModalContents);
