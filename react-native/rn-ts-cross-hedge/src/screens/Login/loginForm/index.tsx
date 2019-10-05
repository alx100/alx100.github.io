import React from "react";
import { Image, Keyboard, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { Button } from "../../../components/Button";
import FormBuilder from "../../../components/FormBuilder/index";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate";
import RenderRightTitle from "../../../components/RightScreenTitle";
import { EMAIL, PASSWORD } from "../../../constants/validators";
import { parseErrors } from "../../../redux/actions/errorHandler";
import { loginUser } from "../../../redux/asyncActions/user";
import { router } from "../../../services/router";
import { AsyncDispatcher } from "../../../types/dispatch";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface State {
    showDetailedView: boolean;
    email: string;
    password: string;
    errorMsg: {
        email?: string;
        password?: string;
    };
}

interface OwnProps {
    restoreAccount: () => void;
}

type ComponentProps = OwnProps & AsyncDispatcher;

const InitialState = {
    showDetailedView: false
};

class LoginForm extends React.Component<ComponentProps, State> {
    private form!: FormBuilder;
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            ...InitialState,
            email: "",
            password: "",
            errorMsg: {}
        };
    }
    render() {
        return (
            <React.Fragment>
                {!this.state.showDetailedView ? (
                    <React.Fragment>
                        <Image
                            style={theme.image}
                            source={require("../../../assets/common/cross_logo.png")}
                        />
                        <Text style={theme.title_top}>{t("title")}</Text>
                        <Text style={theme.title_bottom}>
                            {t("loginForm_description")}
                        </Text>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <View style={theme.cancelButtonWrapper}>
                            <RenderRightTitle
                                theme="light"
                                rightTitle={t("btn_content_cancel")}
                                press={this.hideDetailedView}
                            />
                        </View>
                        <Text style={theme.detailedViewTitle}>Login</Text>
                    </React.Fragment>
                )}
                <RegistrationTemplate
                    isDefaultTitle={false}
                    isDefaultContinueButton={true}
                    isBtnActive={this.state.showDetailedView && this.isActive()}
                    isWarning={false}
                    btnContent={t("login_btn_content")}
                    onStepForward={this.login}
                    style={{
                        flex: 0,
                        paddingTop: 0
                    }}
                >
                    <FormBuilder
                        onRef={ref => (this.form = ref)}
                        fields={[
                            {
                                name: "email",
                                props: {
                                    placeholder: t(
                                        "login_loginForm_email_placeholder"
                                    ),
                                    autoCapitalize: "none",
                                    onFocus: this.openDetailedView,
                                    errorMsg: this.state.errorMsg.email,
                                    getValue: value =>
                                        this.handleForm("email", value)
                                }
                            },
                            {
                                name: "pass",
                                props: {
                                    placeholder: t(
                                        "login_loginForm_password_placeholder"
                                    ),
                                    onFocus: this.openDetailedView,
                                    secureTextEntry: true,
                                    errorMsg: this.state.errorMsg.password,
                                    getValue: value =>
                                        this.handleForm("password", value)
                                }
                            }
                        ]}
                    />
                </RegistrationTemplate>
                {!this.state.showDetailedView ? (
                    <Button
                        onPress={() =>
                            router.replaceRoute("partlyRegistration")
                        }
                        content={"Create an account"}
                        buttonStyle={theme.optionButtonWrapper}
                        textStyle={theme.optionButtonContent}
                    />
                ) : (
                    <Button
                        onPress={this.props.restoreAccount}
                        content={"Password forgotten?"}
                        buttonStyle={theme.optionButtonWrapper}
                        textStyle={theme.optionButtonContent}
                    />
                )}
                {!this.state.showDetailedView ? (
                    <TouchableOpacity>
                        <View style={theme.bottomButton}>
                            <Image
                                style={theme.bottomBtnContent}
                                source={require("../../../assets/common/cross_btn_icon.png")}
                            />
                        </View>
                    </TouchableOpacity>
                ) : null}
            </React.Fragment>
        );
    }

    isActive = () => {
        if (Object.keys(this.state.errorMsg).length < 2) return false;
        const {
            errorMsg: { email, password }
        } = this.state;
        return !email && !password;
    };

    handleForm = (name: "email" | "password", value: string) => {
        switch (name) {
            case "email":
                return this.setState({
                    email: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        email: this.validateEmail(value)
                    }
                });
            case "password":
                return this.setState({
                    password: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        password: this.validatePassword(value)
                    }
                });
        }
    };

    loginUser = (): Promise<void> =>
        this.props.dispatch(
            loginUser({
                email: this.state.email,
                password: this.state.password
            })
        );

    login = (): void => {
        this.form.validate();
        if (this.state.showDetailedView) {
            this.isActive() &&
                this.loginUser()
                    .then(() => router.replaceRoute("activities"))
                    .catch((e: Error) =>
                        this.props.dispatch(
                            parseErrors({
                                currentErrMsg: e.message,
                                handlersList: {}
                            })
                        )
                    );
        } else {
            this.openDetailedView();
        }
    };

    openDetailedView = () => this.setState({ showDetailedView: true });

    hideDetailedView = () => {
        this.form.reset();
        this.setState({ ...InitialState });
        Keyboard.dismiss();
    };

    validateEmail = (value: string) => {
        if (!value) {
            return "Email field is required*";
        }

        if (!EMAIL.test(value)) {
            return "Enter the valid email address";
        }

        return "";
    };

    validatePassword = (value: string) => {
        if (!value) {
            return "Password field is required*";
        }

        if (!PASSWORD.test(value)) {
            return "Enter the valid password";
        }

        return "";
    };
}

export default connect()(LoginForm);
