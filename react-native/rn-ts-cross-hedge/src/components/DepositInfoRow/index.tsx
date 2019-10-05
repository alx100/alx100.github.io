import React from "react";
import { Clipboard, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    title: string;
    value: string;
}

class DepositInfoRow extends React.PureComponent<OwnProps> {
    render() {
        return (
            <View style={theme.wrapper}>
                <Text style={theme.title}>{this.props.title}</Text>
                <View style={theme.valueWrapper}>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit={true}
                        allowFontScaling={true}
                        style={theme.value}
                    >
                        {this.props.value}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={this.copyToClipboard}
                    style={theme.iconWrapper}
                >
                    <Icon
                        size={1.5 * RH}
                        name={"copy_icon"}
                        color={colors.textLight}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    copyToClipboard = async () => {
        await Clipboard.setString(this.props.value);
    };
}

export default DepositInfoRow;
