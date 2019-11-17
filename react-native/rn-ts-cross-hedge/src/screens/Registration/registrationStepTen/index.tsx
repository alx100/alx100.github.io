import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
}

interface State {
    code: string;
    active: boolean;
}

type ComponentProps = OwnProps;

class RegistrationStepTen extends React.PureComponent<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            code: "",
            active: true
        };
    }
    render() {
        const { active } = this.state;
        return (
            <RegistrationTemplate
                isBtnActive={true}
                isDefaultContinueButton={true}
                isDefaultTitle={true}
                isWarning={false}
                title={"Choose your ID"}
                btnContent={t("btn_content_continue")}
                onStepForward={this.props.stepForward}
            >
                <TouchableOpacity
                    style={theme.containerFirst}
                    onPress={() =>
                        !active ? this.setState({ active: !active }) : null
                    }
                >
                    <View
                        style={
                            active
                                ? theme.globalCircleActive
                                : theme.globalCirclePassive
                        }
                    >
                        <View style={active ? theme.centerCircle : null} />
                    </View>
                    <Text
                        style={
                            active
                                ? theme.textContainerActive
                                : theme.textContainerPassive
                        }
                    >
                        {"ID card"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={theme.containerSecond}
                    onPress={() =>
                        active ? this.setState({ active: !active }) : null
                    }
                >
                    <View
                        style={
                            !active
                                ? theme.globalCircleActive
                                : theme.globalCirclePassive
                        }
                    >
                        <View style={!active ? theme.centerCircle : null} />
                    </View>
                    <Text
                        style={
                            !active
                                ? theme.textContainerActive
                                : theme.textContainerPassive
                        }
                    >
                        {"Passport"}
                    </Text>
                </TouchableOpacity>
            </RegistrationTemplate>
        );
    }
}

export default RegistrationStepTen;
