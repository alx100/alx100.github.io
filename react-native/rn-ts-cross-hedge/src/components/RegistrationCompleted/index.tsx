import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { colors } from "../../constants/colors";
import { setRegType } from "../../redux/actions/user";
import { router } from "../../services/router";
import RegistrationTemplate from "../RegistrationScreenTemplate";
import { theme } from "./theme";

type ComponentProps = DispatchProp;

class RegistrationCompleted extends React.PureComponent<ComponentProps> {
    render() {
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.backgroundDark }}
            >
                <View style={theme.wrapper}>
                    <RegistrationTemplate
                        isBtnActive={true}
                        isWarning={false}
                        isDefaultContinueButton={true}
                        isDefaultTitle={true}
                        title={"Congratulations!"}
                        btnContent={"Proceed"}
                        onStepForward={this.completeRegistration}
                    >
                        <Text style={theme.text}>
                            You've finished the registration process.
                        </Text>
                        <Text style={theme.text}>
                            Now you can access the full functionality of the
                            app.
                        </Text>
                        <Text style={theme.text}>Good luck!</Text>
                    </RegistrationTemplate>
                </View>
            </SafeAreaView>
        );
    }

    completeRegistration = (): void => {
        this.props.dispatch(setRegType({ reg_type: "full" }));

        router.replaceRoute("activities");
    };
}

export default connect()(RegistrationCompleted);
