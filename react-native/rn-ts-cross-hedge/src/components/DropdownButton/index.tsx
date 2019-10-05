import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { t } from "../../utils/t";
import DropdownArrowAnimation from "../DropdownArrowAnimation";
import { theme } from "./theme";

interface OwnProps {
    status: boolean;
    getValue: (value: boolean) => void;
}

class DropdownButton extends Component<OwnProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.handleDropdown} activeOpacity={1}>
                <View style={theme.detailsBtnWrapper}>
                    <Text style={theme.detailsBtnContent}>
                        {t("btn_content_more_details")}
                    </Text>
                    <DropdownArrowAnimation up={this.props.status} />
                </View>
            </TouchableOpacity>
        );
    }

    handleDropdown = () => {
        this.props.getValue(!this.props.status);
    };
}

export default DropdownButton;
