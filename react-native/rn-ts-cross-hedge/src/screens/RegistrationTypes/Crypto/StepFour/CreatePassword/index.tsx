import React from "react";
import { Text } from "react-native";
import FormBuilder from "../../../../../components/FormBuilder/index";
import RegistrationTemplate from "../../../../../components/RegistrationScreenTemplate";
import { PASSWORD } from "../../../../../constants/validators";
import { router } from "../../../../../services/router";
import { t } from "../../../../../utils/t";
import { theme } from "./theme";

interface State {
    pass: string;
    confirm: string;
    errorMsg: {
        password?: string;
        confirmPass?: string;
    };
}

class CreatePassword extends React.Component<any, State> {
    private form!: FormBuilder;
    constructor(props) {
        super(props);
        this.state = {
            pass: "",
            confirm: "",
            errorMsg: {}
        };
    }
    render() {
        const { pass, confirm } = this.state;
        return (
            <RegistrationTemplate
                isDefaultTitle={true}
                isDefaultContinueButton={true}
                isWarning={false}
                isBtnActive={Boolean(
                    !this.validatePass(pass) &&
                        !this.validateConfirmation(confirm)
                )}
                btnContent={t("btn_content_continue")}
                title={"Welcome back John!"}
                onStepForward={this.login}
                style={{ width: "75%" }}
            >
                <Text style={theme.title}>
                    {
                        "This is the very last step :-) \nLet's create your password"
                    }
                </Text>
                <FormBuilder
                    onRef={ref => (this.form = ref)}
                    fields={[
                        {
                            name: "pass",
                            props: {
                                placeholder: "Password",
                                secureTextEntry: true,
                                errorMsg: this.state.errorMsg.password,
                                getValue: value =>
                                    this.setValuesToState(value, "pass")
                            }
                        },
                        {
                            name: "confirm",
                            props: {
                                placeholder: "Confirmation",
                                secureTextEntry: true,
                                errorMsg: this.state.errorMsg.confirmPass,
                                title: "Please confirm it",
                                getValue: value =>
                                    this.setValuesToState(value, "confirm")
                            }
                        }
                    ]}
                />
            </RegistrationTemplate>
        );
    }

    isActive = () => {
        if (Object.keys(this.state.errorMsg).length < 2) return false;
        const {
            errorMsg: { password, confirmPass }
        } = this.state;
        return !password && !confirmPass;
    };

    login = () => {
        this.form.validate();
        this.isActive() && router.replaceRoute("activities");
    };

    setValuesToState = (value: string, name: "pass" | "confirm") => {
        switch (name) {
            case "pass":
                return this.setState({
                    pass: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        password: this.validatePass(value)
                    }
                });
            case "confirm":
                return this.setState({
                    confirm: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        confirmPass: this.validateConfirmation(value)
                    }
                });
        }
    };

    validatePass = (value: string) => {
        if (!value) {
            return "Field is required!";
        }

        if (!PASSWORD.test(value)) {
            return "Enter the valid password";
        }

        return "";
    };

    validateConfirmation = (value: string) => {
        if (!value) {
            return "Field is required!";
        }
        if (value !== this.form.getValues()[0].pass) {
            return "Password and confirmation do not match!";
        }

        return "";
    };
}

export default CreatePassword;
