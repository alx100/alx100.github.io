import React, { Component } from "react";
import { Keyboard, TextInput, View } from "react-native";
import { NUMBER } from "../../constants/validators";
import { theme } from "./theme";

interface State {
    verification_code: string[];
}

interface OwnProps {
    style: "light" | "dark";
    onPressCode: (code: string[]) => void;
}

type ComponentProps = OwnProps;

class SmsCodeField extends React.PureComponent<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            verification_code: new Array(4).fill(null)
        };
    }

    onChange = (slot, value) => {
        const { verification_code } = this.state;
        verification_code[slot] = value;
        this.setState({ verification_code });
        if (!NUMBER.test(value)) {
            return this.handleLangChange(verification_code);
        }

        if (slot + 1 !== verification_code.length && value !== "") {
            this[`_${slot + 1}`].focus();
        } else {
            Keyboard.dismiss();
            verification_code[slot] = value;
            this.handleLangChange(verification_code);
        }
        this.setState({ verification_code });
    };

    handleLangChange = code => {
        this.props.onPressCode(code);
    };

    render() {
        const { verification_code } = this.state;
        return (
            <View style={theme.position_input}>
                {[0, 1, 2, 3].map((key, i) => (
                    <View
                        key={i}
                        style={
                            this.props.style === "light"
                                ? theme.smsFieldWrapperLight
                                : theme.smsFieldWrapperDark
                        }
                    >
                        <TextInput
                            style={
                                this.props.style === "light"
                                    ? theme.lightInput
                                    : theme.darkInput
                            }
                            maxLength={1}
                            underlineColorAndroid={"transparent"}
                            keyboardType="numeric"
                            ref={ref => (this[`_${key}`] = ref)}
                            value={verification_code[key]}
                            onChangeText={value => this.onChange(key, value)}
                            onBlur={() =>
                                this.handleLangChange(verification_code)
                            }
                        />
                    </View>
                ))}
            </View>
        );
    }
}

export default SmsCodeField;
