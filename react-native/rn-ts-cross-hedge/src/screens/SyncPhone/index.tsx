import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import BottomBar from "../../components/BottomBar";
import CustomHeader from "../../components/CustomHeader";
import Block from "../../components/InnerPagesBlock";
import { router } from "../../services/router";
import { t } from "../../utils/t";
import SyncPhoneStepFour from "./SyncPhoneStepFour";
import SyncPhoneStepOne from "./SyncPhoneStepOne";
import SyncPhoneStepThree from "./SyncPhoneStepThree";
import SyncPhoneStepTwo from "./SyncPhoneStepTwo";
import { theme } from "./theme";

interface State {
    step: number;
}

class Test extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            step: 1
        };
    }

    render() {
        return (
            <SafeAreaView style={theme.container}>
                <View style={{ flex: 1 }}>
                    <CustomHeader
                        theme={"dark"}
                        title={t("syncPhone_header")}
                        leftTitle={t("btn_content_back")}
                        leftPress={this.stepBack}
                    />
                    {this.state.step !== 1 && (
                        <Block style={theme.headBlock}>
                            <Text style={theme.headText}>
                                {this.renderTitle()}
                            </Text>
                        </Block>
                    )}
                    {this.renderSteps()}
                </View>
                <BottomBar screen={"Profile"} />
            </SafeAreaView>
        );
    }

    renderTitle = () => {
        switch (this.state.step) {
            case 2:
                return t("sync_phone_step_two");
            case 3:
                return t("sync_phone_step_three");
            case 4:
                return t("sync_phone_step_four");
        }
        return;
    };

    renderSteps = () => {
        switch (this.state.step) {
            case 1:
                return <SyncPhoneStepOne stepForward={this.stepForward} />;
            case 2:
                return <SyncPhoneStepTwo stepForward={this.stepForward} />;
            case 3:
                return (
                    <SyncPhoneStepThree
                        stepForward={this.stepForward}
                        stepBack={this.stepBack}
                    />
                );
            case 4:
                return <SyncPhoneStepFour resetSteps={this.resetSteps} />;
        }
        return;
    };

    stepForward = () => this.setState({ step: this.state.step + 1 });

    stepBack = () => {
        this.state.step === 1
            ? router.replaceRoute("profile")
            : this.setState({ step: this.state.step - 1 });
    };

    resetSteps = () => this.setState({ step: 1 });
}

export default Test;
