import React from "react";
import { View } from "react-native";
import { t } from "../../utils/t";
import AmountRange from "../AmountRange";
import { Button } from "../Button";
import { theme } from "./theme";

interface OwnProps {
    amount: number;
    cancelFunc: () => void;
    confirmFunc: () => void;
    amountTitle: string;
    handleAmount: (value: number) => void;
    forwardBtnContent?: string;
}

type ComponentProps = OwnProps;

class AmountRangeWithButtons extends React.Component<ComponentProps, any> {
    render() {
        const {
            cancelFunc,
            confirmFunc,
            amountTitle,
            handleAmount,
            amount,
            forwardBtnContent
        } = this.props;
        return (
            <View style={theme.container}>
                <AmountRange
                    value={amount}
                    title={amountTitle}
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
                        content={(
                            forwardBtnContent || t("btn_content_confirm")
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

export default AmountRangeWithButtons;
