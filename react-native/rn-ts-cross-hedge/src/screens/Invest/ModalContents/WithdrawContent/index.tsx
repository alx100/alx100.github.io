import React from "react";
import { View } from "react-native";
import AmountRange from "../../../../components/AmountRange";
import { Button } from "../../../../components/Button";
import { t } from "../../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    amount: number;
    cancelFunc: () => void;
    confirmFunc: () => void;
    type: "withdraw" | "disinvest";
    handleAmount: (value: number) => void;
}

type ComponentProps = OwnProps;

class WithdrawContent extends React.Component<ComponentProps, any> {
    render() {
        const {
            cancelFunc,
            confirmFunc,
            type,
            handleAmount,
            amount
        } = this.props;
        return (
            <View style={theme.container}>
                <AmountRange
                    value={amount}
                    title={
                        type === "withdraw"
                            ? t("withdraw_amount_range_title")
                            : t("disinvest_amount_range_title")
                    }
                    name={type}
                    step={10}
                    getValue={(name, value) => {
                        handleAmount(value);
                    }}
                    hideBorder={true}
                    sizeBig={true}
                />
                <View style={theme.row}>
                    <Button
                        content={t("btn_content_cancel").toLocaleUpperCase()}
                        onPress={cancelFunc}
                        buttonStyle={theme.cancelBtnWrapper}
                        textStyle={theme.cancelBtnContent}
                    />
                    <Button
                        content={(type === "withdraw"
                            ? t("btn_content_continue")
                            : t("btn_content_confirm")
                        ).toLocaleUpperCase()}
                        onPress={confirmFunc}
                        buttonStyle={theme.confirmBtnWrapper}
                        textStyle={theme.confirmBtnContent}
                    />
                </View>
            </View>
        );
    }
}

export default WithdrawContent;
