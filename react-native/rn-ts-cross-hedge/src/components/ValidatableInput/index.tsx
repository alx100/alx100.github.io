import React, { Fragment } from "react";
import {
    Text,
    TextInput,
    TextInputProperties,
    TouchableOpacity,
    View
} from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { Omit } from "../../types/omit";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    onRef?: (context: FormField) => void;
    getValue?: (value: string) => void;
    title?: string;
    errorMsg?: string;
    lightStyle?: boolean;
}

interface State {
    value: string;
    errorMsg: string;
    hasError: boolean;
    secure: boolean;
}

type InitialState = Omit<State, "secure">;

const InitialState: InitialState = {
    value: "",
    errorMsg: "",
    hasError: true
};

export type FormElement = OwnProps & TextInputProperties;

class FormField extends React.Component<FormElement, State> {
    constructor(props: FormElement) {
        super(props);

        this.state = {
            value: "",
            errorMsg: props.errorMsg!,
            hasError: true,
            secure: this.props.secureTextEntry
                ? this.props.secureTextEntry
                : false
        };
    }

    componentDidMount() {
        this.props.onRef && this.props.onRef(this);
    }

    render() {
        return (
            <View>
                {this.props.title ? (
                    <Text
                        style={[
                            theme.title,
                            this.props.lightStyle
                                ? { color: colors.textLight }
                                : null
                        ]}
                    >
                        {this.props.title}
                    </Text>
                ) : null}
                <View style={theme.passwordWrapper}>
                    <TextInput
                        {...this.props}
                        value={this.state.value}
                        style={
                            this.props.lightStyle
                                ? theme.lightInput
                                : theme.input
                        }
                        placeholderTextColor={
                            this.props.lightStyle
                                ? colors.textLight
                                : colors.white
                        }
                        onChangeText={value => this.handleChange(value)}
                        onBlur={this.validateValue}
                        secureTextEntry={this.state.secure}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                    />
                    <View style={theme.icon}>
                        {this.props.secureTextEntry && this.state.value ? (
                            <TouchableOpacity onPress={this.revealPassword}>
                                <Icon
                                    size={2.2 * RH}
                                    name={"eye_icon"}
                                    color={
                                        this.props.lightStyle
                                            ? this.state.secure
                                                ? colors.globalCircle
                                                : colors.lightBlueCrossButton
                                            : this.state.secure
                                            ? colors.lightBlueCrossButton
                                            : colors.white
                                    }
                                />
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>
                {this.state.errorMsg ? (
                    <View style={theme.messageWrapper}>
                        <Icon
                            name={"warning_icon"}
                            size={1.2 * RH}
                            color={colors.lightBlueCrossButton}
                        />
                        <Text style={theme.message}>{this.state.errorMsg}</Text>
                    </View>
                ) : null}
            </View>
        );
    }

    hasError = () => this.state.hasError;

    resetField = () => this.setState({ ...InitialState });

    getValue = () => this.state.value;

    handleChange = (value: string) => {
        this.setState({ value });

        if (this.props.getValue) {
            this.props.getValue(value);
        }
    };

    validateValue = () => {
        this.setState({
            hasError: Boolean(this.props.errorMsg),
            errorMsg: this.props.errorMsg!
        });
    };

    revealPassword = () => this.setState({ secure: !this.state.secure });
}

export default FormField;
