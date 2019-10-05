import { timeThursday } from "d3-time";
import { any } from "prop-types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import Amount from "../Amount";
import { Icon } from "../Icons";
import { theme } from "./theme";

export type AmountName = "monthly" | "oneTime";

interface OwnProps {
    value: number;
    title?: string;
    step: number;
    name?: AmountName;
    getValue: (name: AmountName, value: number) => void;
    hideBorder?: boolean;
    sizeBig?: boolean;
}

const refreshIntervalPlus = 0;
const refreshIntervalMinus = 0;

class AmountRange extends React.Component {
    handleClickOutPlus = (): void => {
        clearInterval(refreshIntervalPlus);
    };

    handleClickInPlus = (): void => {
        this.props.getValue(
            this.props.name!,
            this.props.value + this.props.step
        );
        refreshIntervalPlus = setInterval(() => this.updateValuePlus(), 200);
    };

    updateValuePlus = (): void => {
        this.props.getValue(
            this.props.name!,
            this.props.value + this.props.step
        );
    };

    handleClickOutMinus = (): void => {
        clearInterval(refreshIntervalMinus);
    };

    handleClickInMinus = (): void => {
        this.props.getValue(
            this.props.name!,
            this.props.value - this.props.step
        );
        refreshIntervalMinus = setInterval(() => this.updateValueMinus(), 200);
    };

    updateValueMinus = (): void => {
        this.props.getValue(
            this.props.name!,
            this.props.value - this.props.step
        );
    };

    render() {
        return (
            <View
                style={[
                    theme.wrapper,
                    this.props.hideBorder ? { borderRightWidth: 0 } : null
                ]}
            >
                {this.props.title && (
                    <Text
                        style={
                            this.props.sizeBig ? theme.titleBig : theme.title
                        }
                    >
                        {this.props.title}
                    </Text>
                )}
                <View style={theme.amountRangeWrapper}>
                    <TouchableOpacity
                        onPressIn={() =>
                            this.handleClickInMinus(this.props.name!)
                        }
                        onPressOut={() =>
                            this.handleClickOutMinus(this.props.name!)
                        }
                    >
                        <Icon
                            size={this.props.sizeBig ? 3 * RH : 2.2 * RH}
                            name={"minus_icon"}
                            color={colors.lightBlueCrossButton}
                        />
                    </TouchableOpacity>
                    <Amount
                        value={this.props.value.toString()}
                        unit={"€"}
                        showPlus={false}
                        styles={{
                            wrapper: theme.amountWrapper,
                            integer: this.props.sizeBig
                                ? theme.amountTextBig
                                : theme.amountText,
                            fractional: this.props.sizeBig
                                ? theme.amountTextBig
                                : theme.amountText
                        }}
                    />
                    <TouchableOpacity
                        onPressIn={() =>
                            this.handleClickInPlus(this.props.name!)
                        }
                        onPressOut={() =>
                            this.handleClickOutPlus(this.props.name!)
                        }
                    >
                        <Icon
                            size={this.props.sizeBig ? 3 * RH : 2.2 * RH}
                            name={"plus_icon"}
                            color={colors.lightBlueCrossButton}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AmountRange;
