import React, { Component } from "react";
import { Text, TextInput, TextInputProperties, View } from "react-native";
import { t } from "../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    codeProps: TextInputProperties;
    phoneProps: TextInputProperties;
    theme: string;
}

type ComponentProps = OwnProps;

class PhoneWithCode extends Component<ComponentProps> {
    private phoneRef!: TextInput;
    render() {
        return (
            <View style={theme.phoneNumberWrapper}>
                <View style={theme.codeWrapper}>
                    <Text
                        style={
                            this.props.theme === "light"
                                ? theme.light_codeWrapper_description
                                : theme.codeWrapper_description
                        }
                    >
                        {t("phone_with_code_countryCode")}
                    </Text>
                    <TextInput
                        {...this.props.codeProps}
                        keyboardType={"numeric"}
                        maxLength={3}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        style={
                            this.props.theme === "light"
                                ? theme.lightInput
                                : theme.darkInput
                        }
                        onChange={this.handleAutoFocus}
                    />
                </View>
                <View style={theme.phoneWrapper}>
                    <TextInput
                        {...this.props.phoneProps}
                        ref={(ref: TextInput) => (this.phoneRef = ref)}
                        keyboardType={"numeric"}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        style={
                            this.props.theme === "light"
                                ? theme.lightInput
                                : theme.darkInput
                        }
                        maxLength={10}
                    />
                </View>
            </View>
        );
    }

    handleAutoFocus = ({ nativeEvent: { text } }) => {
        if (text.length === 3) {
            this.phoneRef.focus();
            this.phoneRef.clear();
        }
    };
}

export default PhoneWithCode;
