import React from "react";
import { Text, View } from "react-native";
import Amount from "../../../../components/Amount";
import { Button } from "../../../../components/Button";
import { t } from "../../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    amounts: number[];
    cancelFunc: () => void;
    confirmFunc: () => void;
}

type ComponentProps = OwnProps;

class InvestContent extends React.Component<ComponentProps, any> {
    render() {
        const { amounts, cancelFunc, confirmFunc } = this.props;
        return (
            <View style={theme.container}>
                <View style={[theme.row, theme.amountRow]}>
                    <Text style={theme.amountTitle}>{t("initial_amount")}</Text>
                    <Amount
                        value={amounts[0].toString()}
                        unit={"€"}
                        showPlus={false}
                        styles={{
                            integer: theme.amount,
                            fractional: theme.amount
                        }}
                    />
                </View>
                <View style={[theme.row, theme.amountRow]}>
                    <Text style={theme.amountTitle}>{t("monthly_amount")}</Text>
                    <Amount
                        value={amounts[1].toString()}
                        unit={"€"}
                        showPlus={false}
                        styles={{
                            integer: theme.amount,
                            fractional: theme.amount
                        }}
                    />
                </View>
                <View style={theme.row}>
                    <Button
                        content={t("btn_content_cancel").toLocaleUpperCase()}
                        onPress={cancelFunc}
                        buttonStyle={theme.cancelBtnWrapper}
                        textStyle={theme.cancelBtnContent}
                    />
                    <Button
                        content={t("btn_content_confirm").toLocaleUpperCase()}
                        onPress={confirmFunc}
                        buttonStyle={theme.confirmBtnWrapper}
                        textStyle={theme.confirmBtnContent}
                    />
                </View>
            </View>
        );
    }
}

export default InvestContent;
