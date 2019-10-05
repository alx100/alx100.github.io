import React from "react";
import { Image, Text } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { Button } from "../../../components/Button";
import { isPhoneRestoration } from "../../../redux/actions/registration";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
}

type ComponentProps = OwnProps & DispatchProp;

class RegistrationStepOne extends React.PureComponent<ComponentProps> {
    componentDidMount() {
        this.props.dispatch(isPhoneRestoration({ phoneRestoreActive: false }));
    }
    render() {
        return (
            <React.Fragment>
                <Image
                    style={theme.image}
                    source={require("../../../assets/common/cross_logo.png")}
                />
                <Text style={theme.title}>{"Welcome \n to Cross Hedge!"}</Text>
                <Text style={theme.text}>
                    Create an account in only 5 minutes.
                </Text>
                <Text style={theme.text}>
                    You will need your ID card or passport.
                </Text>
                <Text style={theme.text}>
                    Don't worry, you'll be able to edit your information at any
                    time afterwards.
                </Text>
                <Button
                    onPress={this.props.stepForward}
                    buttonStyle={theme.createButtonWrapper}
                    textStyle={theme.createButtonContent}
                    content={"Create my account"}
                />
            </React.Fragment>
        );
    }
}

export default connect()(RegistrationStepOne);
