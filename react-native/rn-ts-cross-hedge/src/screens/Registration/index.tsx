import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { colors } from "../../constants/colors";
import { RegistrationTitles } from "../../constants/registrationTitles";
import { router } from "../../services/router";
import { t } from "../../utils/t";
import RegistrationStepEight from "./registrationStepEight";
import RegistrationStepEleven from "./registrationStepEleven";
import RegistrationStepFive from "./registrationStepFive";
import RegistrationStepFour from "./registrationStepFour";
import RegistrationStepOne from "./registrationStepOne";
import RegistrationStepSeven from "./registrationStepSeven/index";
import RegistrationStepTen from "./registrationStepTen";
import RegistrationStepThirteen from "./registrationStepThirteen";
import RegistrationStepThree from "./registrationStepThree";
import RegistrationStepTwelve from "./registrationStepTwelve";
import RegistrationStepTwo from "./registrationStepTwo";
import { theme } from "./theme";

export interface RegistrationProps {
    step?: number;
}

interface State {
    step: number;
}

type ComponentProps = RegistrationProps;

class Registration extends React.Component<ComponentProps, State> {
    constructor(props: any) {
        super(props);
        const { step } = this.props;
        this.state = {
            step: step ? step : 1
        };
    }

    render() {
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.backgroundDark }}
            >
                <View style={theme.container}>
                    <CustomHeader
                        theme="light"
                        leftTitle={
                            this.state.step > 1
                                ? RegistrationTitles[this.state.step].topBarText
                                : undefined
                        }
                        leftPress={this.stepBack}
                        rightTitle={
                            this.state.step !== 1
                                ? t("btn_content_cancel")
                                : undefined
                        }
                        rightPress={this.resetSteps}
                    />
                    <View style={theme.steps}>{this.renderSteps()}</View>
                </View>
            </SafeAreaView>
        );
    }

    renderSteps = () => {
        switch (this.state.step) {
            case 1:
                return <RegistrationStepOne stepForward={this.stepForward} />;

            case 2:
                return <RegistrationStepTwo stepForward={this.stepForward} />;

            case 3:
                return (
                    <ScrollView
                        style={{ width: "100%" }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <RegistrationStepThree stepForward={this.stepForward} />
                    </ScrollView>
                );

            case 4:
                return (
                    <ScrollView
                        style={{ width: "100%" }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <RegistrationStepFour stepForward={this.stepForward} />
                    </ScrollView>
                );

            case 5:
                return <RegistrationStepFive stepForward={this.stepForward} />;

            case 6:
                return (
                    <ScrollView
                        style={{ width: "100%" }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <RegistrationStepSeven stepForward={this.stepForward} />
                    </ScrollView>
                );

            case 7:
                return (
                    <ScrollView
                        style={{ width: "100%" }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <RegistrationStepEight stepForward={this.stepForward} />
                    </ScrollView>
                );

            case 8:
                return (
                    <ScrollView
                        style={{ width: "100%" }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <RegistrationStepTen stepForward={this.stepForward} />
                    </ScrollView>
                );

            case 9:
                return (
                    <ScrollView
                        style={{ width: "100%" }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <RegistrationStepEleven
                            stepForward={this.stepForward}
                        />
                    </ScrollView>
                );

            case 10:
                return (
                    <RegistrationStepTwelve stepForward={this.stepForward} />
                );

            case 11:
                return (
                    <RegistrationStepThirteen stepForward={this.stepForward} />
                );

            default:
                return null;
        }
    };

    stepBack = () => {
        if (this.state.step !== 1) {
            this.setState({ step: this.state.step - 1 });
        }
    };

    stepForward = () => this.setState({ step: this.state.step + 1 });

    resetSteps = () => router.replaceRoute("activities");
}

export default Registration;
