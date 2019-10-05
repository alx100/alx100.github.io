import React from "react";
import { Text, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import RenderRightTitle from "../../../components/RightScreenTitle";
import { router } from "../../../services/router";
import { t } from "../../../utils/t";
import RestorePasswordStepOne from "./stepOne/index";
import RestorePasswordStepTwo from "./stepTwo";
import { theme } from "./theme";

interface OwnProps {
    cancelRestore: () => void;
}

interface State {
    restoreLinkRecieved: boolean;
}

type ComponentProps = OwnProps & DispatchProp;

class RestorePassword extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            restoreLinkRecieved: true
        };
    }
    render() {
        return (
            <React.Fragment>
                <View style={theme.cancelButtonWrapper}>
                    <RenderRightTitle
                        theme="light"
                        rightTitle={t("btn_content_cancel")}
                        press={this.props.cancelRestore}
                    />
                </View>
                <Text style={theme.restorePasswordTitle}>
                    {!this.state.restoreLinkRecieved
                        ? "Enter your email"
                        : "Hi, \nLet's create your new password!"}
                </Text>
                {this.renderSteps()}
            </React.Fragment>
        );
    }

    login = () => router.replaceRoute("activities");

    renderSteps = () => {
        return !this.state.restoreLinkRecieved ? (
            <RestorePasswordStepOne cancelRestore={this.props.cancelRestore} />
        ) : (
            <RestorePasswordStepTwo login={this.login} />
        );
    };
}

export default connect()(RestorePassword);
