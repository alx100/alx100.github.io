import React from "react";
import { Text, View } from "react-native";
import { RH } from "../../constants/window";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    descriptionTitle: string;
    descriptionText: string;
}

class DescriptionBlock extends React.Component<OwnProps, any> {
    render() {
        const { descriptionText, descriptionTitle } = this.props;

        return (
            <View style={theme.descriptionWrapper}>
                <View style={theme.titleWrapper}>
                    <Text style={theme.descriptionTitle}>
                        {descriptionTitle}
                    </Text>
                    <Icon
                        size={1.5 * RH}
                        name={"leaf_icon"}
                        color={"#149A0A"}
                        style={theme.icon}
                    />
                </View>
                <Text style={theme.descriptionText}>{descriptionText}</Text>
            </View>
        );
    }
}

export default DescriptionBlock;
