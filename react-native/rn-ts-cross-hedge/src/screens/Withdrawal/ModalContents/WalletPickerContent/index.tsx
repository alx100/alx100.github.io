import React from "react";
import { Text, View } from "react-native";
import { Wallets } from "..";
import { Button } from "../../../../components/Button";
import { RadioButton } from "../../../../components/RadioButton";
import { colors } from "../../../../constants/colors";
import { t } from "../../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    amount: number;
    wallet: Wallets;
    confirmFunc: () => void;
    getWallet: (wallet: Wallets) => void;
}

type ComponentProps = OwnProps;

class WalletPickerContent extends React.Component<ComponentProps> {
    render() {
        const { amount, wallet } = this.props;
        return (
            <View style={theme.container}>
                <Text style={theme.title}>Transfer {amount}€ to</Text>
                <View style={theme.radioForm}>
                    <RadioButton
                        onPress={() => {
                            this.handleRadio("bank_account");
                        }}
                        label={"Your bank account"}
                        active={wallet === "bank_account"}
                        activeColor={colors.lightBlueCrossButton}
                    />
                    <RadioButton
                        onPress={() => {
                            this.handleRadio("crypto_wallet");
                        }}
                        label={"Your crypto wallet"}
                        active={wallet === "crypto_wallet"}
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

    handleRadio = (wallet: "bank_account" | "crypto_wallet") => {
        this.props.getWallet(wallet);
    };

    confirm = () => {
        this.props.confirmFunc();
    };
}

export default WalletPickerContent;
