import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../../../components/Button";
import { RadioButton } from "../../../../components/RadioButton";
import { colors } from "../../../../constants/colors";
import { t } from "../../../../utils/t";
import { theme } from "./theme";

interface State {
    wallet: "bank_account_label" | "crypto_wallet_label";
}

interface OwnProps {
    amount: number;
    confirmFunc: () => void;
    getWallet: (wallet: "bank_account_label" | "crypto_wallet_label") => void;
}

type ComponentProps = OwnProps;

class WalletPickerContent extends React.Component<ComponentProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            wallet: "bank_account_label"
        };
    }
    render() {
        const { wallet } = this.state;
        const { amount, confirmFunc } = this.props;
        return (
            <View style={theme.container}>
                <Text style={theme.title}>Transfer {amount}€ to</Text>
                <View style={theme.radioForm}>
                    <RadioButton
                        onPress={() => {
                            this.handleRadio("bank_account_label");
                        }}
                        label={"Your bank account"}
                        active={wallet === "bank_account_label"}
                        activeColor={colors.lightBlueCrossButton}
                    />
                    <RadioButton
                        onPress={() => {
                            this.handleRadio("crypto_wallet_label");
                        }}
                        label={"Your crypto wallet"}
                        active={wallet === "crypto_wallet_label"}
                        activeColor={colors.lightBlueCrossButton}
                    />
                </View>
                <Button
                    content={t("btn_content_confirm").toLocaleUpperCase()}
                    onPress={this.confirm}
                    buttonStyle={theme.confirmBtnWrapper}
                    textStyle={theme.confirmBtnContent}
                />
            </View>
        );
    }

    handleRadio = (wallet: "bank_account_label" | "crypto_wallet_label") => {
        this.setState({ wallet });
    };

    confirm = () => {
        this.props.getWallet(this.state.wallet);
        this.props.confirmFunc();
    };
}

export default WalletPickerContent;
