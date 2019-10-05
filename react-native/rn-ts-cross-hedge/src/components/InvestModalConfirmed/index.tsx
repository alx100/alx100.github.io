import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { Icon } from "../../components/Icons";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { hideModal } from "../../redux/actions/modal";
import { router } from "../../services/router";
import { theme } from "./theme";

interface OwnProps {
    purpose: string;
    amount: number;
    towards?: string;
}

type ComponentProps = OwnProps & DispatchProp;

class InvestModalConfirmed extends React.Component<ComponentProps, any> {
    render() {
        const { purpose, amount, towards } = this.props;
        return (
            <View style={theme.container}>
                <TouchableOpacity onPress={this.redirectToActivities}>
                    <Icon
                        name={"checked_circle_icon"}
                        size={7 * RH}
                        color={colors.lightBlueCrossButton}
                    />
                </TouchableOpacity>
                <Text style={theme.text}>
                    Your {purpose} of {amount}€{" "}
                    {towards && `towards ${towards}`} has been confirmed. You
                    will soon receive an e-mail and a confirmation message.
                </Text>
            </View>
        );
    }

    redirectToActivities = (): void => {
        this.props.dispatch(hideModal());
        router.replaceRoute("activities");
    };
}

export default connect()(InvestModalConfirmed);
