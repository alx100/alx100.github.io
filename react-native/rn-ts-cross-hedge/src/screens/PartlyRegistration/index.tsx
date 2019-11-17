import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import {
    checkSmsCode,
    login,
    registerUser,
    sendSmsRequest
} from "../../api/resources";
import { Button } from "../../components/Button";
import FormBuilder from "../../components/FormBuilder";
import RegistrationTemplate from "../../components/RegistrationScreenTemplate/index";
import { EMAIL, NUMBER, PASSWORD } from "../../constants/validators";
import { parseErrors } from "../../redux/actions/errorHandler";
import { setRegType } from "../../redux/actions/user";
import { loginUser } from "../../redux/asyncActions/user";
import { router } from "../../services/router";
import { storage } from "../../services/storage";
import { AsyncDispatcher } from "../../types/dispatch";
import { User } from "../../types/userInfo";
import { theme } from "./theme";

interface FormItem {
    value: string;
    errMsg: string | undefined;
}

interface State {
    step: number;
    phoneNumberForm: FormItem;
    smsNumberForm: FormItem;
    email: FormItem;
    password: FormItem;
}

type ComponentProps = DispatchProp & AsyncDispatcher;

class PartlyRegistration extends React.PureComponent<ComponentProps, State> {
    public state: State = {
        step: 1,
        phoneNumberForm: {
            value: "",
            errMsg: undefined
        },
        smsNumberForm: {
            value: "",
            errMsg: undefined
        },
        email: {
            value: "",
            errMsg: undefined
        },
        password: {
            value: "",
            errMsg: undefined
        }
    };

    private phoneForm!: FormBuilder;
    private smsCodeForm!: FormBuilder;
    private loginInfoForm!: FormBuilder;

    render() {
        const {
            phoneNumberForm,
            step,
            smsNumberForm,
            email,
            password
        } = this.state;
        return (
            <SafeAreaView style={theme.safeArea}>
                <RegistrationTemplate
                    isDefaultContinueButton={false}
                    isDefaultTitle={false}
                    isBtnActive={false}
                    isWarning={false}
                >
                    <ScrollView contentContainerStyle={theme.wrapper}>
                        <View style={{ width: "75%", alignSelf: "center" }}>
                            <View style={theme.block}>
                                <FormBuilder
                                    onRef={ref => (this.phoneForm = ref)}
                                    fields={[
                                        {
                                            name: "phone",
                                            props: {
                                                value: phoneNumberForm.value,
                                                placeholder:
                                                    "Mobile Phone Number",
                                                getValue: this
                                                    .handlePhoneNumber,
                                                errorMsg:
                                                    phoneNumberForm.errMsg,
                                                editable: step < 2,
                                                maxLength: 12,
                                                keyboardType: "numeric"
                                            }
                                        }
                                    ]}
                                />
                                <Button
                                    content={"Send SMS"}
                                    onPress={this.sendSms}
                                    buttonStyle={
                                        phoneNumberForm.errMsg === undefined ||
                                        phoneNumberForm.errMsg ||
                                        step > 1
                                            ? theme.btnDisabled
                                            : theme.btnActive
                                    }
                                    textStyle={
                                        phoneNumberForm.errMsg === undefined ||
                                        phoneNumberForm.errMsg ||
                                        step > 1
                                            ? theme.btnContentDisabled
                                            : theme.btnContentActive
                                    }
                                />
                            </View>
                            {step > 1 ? (
                                <View style={theme.block}>
                                    <FormBuilder
                                        onRef={ref => (this.smsCodeForm = ref)}
                                        fields={[
                                            {
                                                name: "sms",
                                                props: {
                                                    value: smsNumberForm.value,
                                                    placeholder: "SMS code",
                                                    getValue: this
                                                        .handleSmsCode,
                                                    errorMsg:
                                                        smsNumberForm.errMsg,
                                                    maxLength: 4,
                                                    editable: step < 3,
                                                    keyboardType: "numeric"
                                                }
                                            }
                                        ]}
                                    />
                                    <Button
                                        content={"Next"}
                                        onPress={this.checkSms}
                                        buttonStyle={
                                            smsNumberForm.errMsg ===
                                                undefined ||
                                            smsNumberForm.errMsg ||
                                            step > 2
                                                ? theme.btnDisabled
                                                : theme.btnActive
                                        }
                                        textStyle={
                                            smsNumberForm.errMsg ===
                                                undefined ||
                                            smsNumberForm.errMsg ||
                                            step > 2
                                                ? theme.btnContentDisabled
                                                : theme.btnContentActive
                                        }
                                    />
                                </View>
                            ) : null}
                            {step > 2 ? (
                                <View style={theme.block}>
                                    <FormBuilder
                                        onRef={ref =>
                                            (this.loginInfoForm = ref)
                                        }
                                        fields={[
                                            {
                                                name: "email",
                                                props: {
                                                    value: email!.value,
                                                    placeholder: "Email",
                                                    getValue: this.handleEmail,
                                                    errorMsg: email!.errMsg,
                                                    autoCapitalize: "none"
                                                }
                                            },
                                            {
                                                name: "pass",
                                                props: {
                                                    value: password!.value,
                                                    placeholder: "Password",
                                                    getValue: this.handlePass,
                                                    errorMsg: password!.errMsg,
                                                    secureTextEntry: true
                                                }
                                            }
                                        ]}
                                    />
                                    <Button
                                        content={"Login"}
                                        onPress={this.login}
                                        buttonStyle={
                                            email.errMsg === undefined ||
                                            email.errMsg ||
                                            password.errMsg === undefined ||
                                            password.errMsg
                                                ? theme.btnDisabled
                                                : theme.btnActive
                                        }
                                        textStyle={
                                            email.errMsg === undefined ||
                                            email.errMsg ||
                                            password.errMsg === undefined ||
                                            password.errMsg
                                                ? theme.btnContentDisabled
                                                : theme.btnContentActive
                                        }
                                    />
                                </View>
                            ) : null}
                        </View>
                    </ScrollView>
                </RegistrationTemplate>
            </SafeAreaView>
        );
    }

    handlePhoneNumber = (value: string): void => {
        this.setState({
            phoneNumberForm: {
                value,
                errMsg: this.validatePhone(value)
            }
        });
    };

    validatePhone = (phone: string): string => {
        if (!phone) return "Required";

        if (phone.length < 10 || !NUMBER.test(phone)) {
            return "Enter the valid phone number";
        }

        return "";
    };

    sendSms = (): void => {
        if (!this.phoneForm.hasError() && this.state.step < 2) {
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        phone_number: this.state.phoneNumberForm.value
                    }
                })
                .then(() => sendSmsRequest(this.state.phoneNumberForm.value))
                .then(res => (res.isProved ? this.setState({ step: 2 }) : null))
                .catch((e: Error) =>
                    this.props.dispatch(
                        parseErrors({
                            currentErrMsg: e.message,
                            handlersList: {}
                        })
                    )
                );
        }
    };

    handleSmsCode = (value: string): void => {
        this.setState({
            smsNumberForm: {
                value,
                errMsg: this.validateSmsCode(value)
            }
        });
    };

    validateSmsCode = (code: string): string => {
        if (!code) return "Required";

        if (code.length < 4 || !NUMBER.test(code)) {
            return "Enter the valid sms code";
        }

        return "";
    };

    checkSms = (): void => {
        if (!this.smsCodeForm.hasError() && this.state.step < 3) {
            checkSmsCode(this.state.smsNumberForm.value).then(res =>
                res.isEquals ? this.setState({ step: 3 }) : null
            );
        }
    };

    handleEmail = (value: string): void => {
        this.setState({
            email: {
                value,
                errMsg: this.validateEmail(value)
            }
        });
    };

    validateEmail = (email: string): string => {
        if (!email) return "Required";

        if (!EMAIL.test(email)) return "Enter the valid email";

        return "";
    };

    handlePass = (value: string): void => {
        this.setState({
            password: {
                value,
                errMsg: this.validatePass(value)
            }
        });
    };

    validatePass = (pass: string): string => {
        if (!pass) return "Required";

        if (!PASSWORD.test(pass)) return "Enter the valid password";

        return "";
    };

    login = (): void => {
        const email = this.state.email.value;
        const password = this.state.password.value;

        if (!this.loginInfoForm.hasError()) {
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        email
                    }
                })
                .then(() =>
                    registerUser({
                        email,
                        password
                    })
                )
                .then(() =>
                    this.props.dispatch(setRegType({ reg_type: "partly" }))
                )
                .then(() => this.props.dispatch(loginUser({ email, password })))
                .then(() => router.replaceRoute("activities"))
                .catch((e: Error) =>
                    this.props.dispatch(
                        parseErrors({
                            currentErrMsg: e.message,
                            handlersList: {
                                "User already exists": {
                                    msg:
                                        "User already exists. \n\nSelect another credentials or try to login.",
                                    onClose: () => router.replaceRoute("login")
                                },
                                "User does not exist": {
                                    msg:
                                        "The user doesn't exist. \n\nPlease, try another credentials."
                                }
                            }
                        })
                    )
                );
        }
    };
}

export default connect()(PartlyRegistration);
