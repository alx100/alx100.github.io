import React from "react";
import FormBuilder from "../../../../components/FormBuilder";
import RegistrationTemplate from "../../../../components/RegistrationScreenTemplate";
import { PASSWORD } from "../../../../constants/validators";
import { t } from "../../../../utils/t";

interface State {
    password: string;
    confirmPass: string;
    errorMsg: {
        password?: string;
        confirmPass?: string;
    };
}

interface OwnProps {
    login: () => void;
}

type ComponentProps = OwnProps;

class RestorePasswordStepTwo extends React.PureComponent<
    ComponentProps,
    State
> {
    private form!: FormBuilder;
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            password: "",
            confirmPass: "",
            errorMsg: {}
        };
    }
    render() {
        return (
            <RegistrationTemplate
                isDefaultTitle={false}
                isDefaultContinueButton={true}
                isBtnActive={this.isActive()}
                isWarning={false}
                btnContent={t("btn_content_send")}
                onStepForward={this.login}
                style={{ flex: 0, paddingTop: 0 }}
            >
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
                                    this.handleForm("pass", value)
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
                                    this.handleForm("confirm", value)
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

    handleForm = (name: "pass" | "confirm", value: string) => {
        switch (name) {
            case "pass":
                return this.setState({
                    password: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        password: this.validatePass(value)
                    }
                });
            case "confirm":
                return this.setState({
                    confirmPass: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        confirmPass: this.validateConfirmation(value)
                    }
                });
        }
    };

    login = () => {
        this.form.validate();
        this.isActive() && this.props.login();
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
        if (value !== this.state.password) {
            return "Password and confirmation do not match!";
        }

        return "";
    };
}

export default RestorePasswordStepTwo;
