import React from "react";
import { Text, View, ViewProperties } from "react-native";
import { Button } from "../Button";
import Warning from "../Warning";
import { theme } from "./theme";

interface OwnProps {
    isDefaultTitle: boolean;
    title?: string;
    isBtnActive: boolean;
    isDefaultContinueButton: boolean;
    btnContent?: string;
    onStepForward?: () => void;
    isWarning: boolean;
    warningContent?: string;
}

type ComponentProps = OwnProps & ViewProperties;

class RegistrationTemplate extends React.Component<ComponentProps> {
    render() {
        const {
            isBtnActive,
            isDefaultTitle,
            isDefaultContinueButton,
            isWarning,
            title,
            btnContent,
            warningContent,
            children
        } = this.props;

        return (
            <View style={[theme.container, this.props.style]}>
                <View style={theme.content}>
                    {isDefaultTitle ? (
                        <Text style={theme.title}>{title ? title : null}</Text>
                    ) : null}
                    {children ? children : null}
                    {isDefaultContinueButton ? (
                        <Button
                            content={btnContent ? btnContent : ""}
                            buttonStyle={
                                isBtnActive
                                    ? theme.buttonWrapperActive
                                    : theme.buttonWrapper
                            }
                            textStyle={
                                isBtnActive
                                    ? theme.buttonContentActive
                                    : theme.buttonContent
                            }
                            onPress={this.onStepForward}
                        />
                    ) : null}
                    {isWarning && warningContent ? (
                        <Warning content={warningContent} />
                    ) : null}
                </View>
            </View>
        );
    }

    onStepForward = () =>
        this.props.onStepForward && this.props.onStepForward();
}

export default RegistrationTemplate;
