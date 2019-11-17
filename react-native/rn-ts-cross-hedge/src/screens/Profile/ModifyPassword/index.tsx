import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import BottomBar from "../../../components/BottomBar";
import { Button } from "../../../components/Button";
import FormBuilder from "../../../components/FormBuilder";
import Block from "../../../components/InnerPagesBlock";
import { PASSWORD } from "../../../constants/validators";
import { router } from "../../../services/router";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface State {
    errorMsg: {
        oldPass?: string;
        newPass?: string;
        confirmPass?: string;
    };
    oldPass: string;
    newPass: string;
    confirmPass: string;
}

// interface OwnProps {}

type ComponentProps = any;

class ModifyPassword extends React.Component<ComponentProps, State> {
    private form!: FormBuilder;
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            errorMsg: {},
            oldPass: "",
            newPass: "",
            confirmPass: ""
        };
    }

    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <Block style={theme.container}>
                        <FormBuilder
                            onRef={ref => (this.form = ref)}
                            fields={[
                                {
                                    name: "oldPass",
                                    props: {
                                        title: t(
                                            "profile_settings_old_password_label"
                                        ).toLocaleUpperCase(),
                                        placeholder: t(
                                            "profile_settings_old_password_label"
                                        ),
                                        errorMsg: this.state.errorMsg.oldPass,
                                        lightStyle: true,
                                        getValue: value => {
                                            this.handleForm("oldPass", value);
                                        },
                                        secureTextEntry: true
                                    }
                                },
                                {
                                    name: "newPass",
                                    props: {
                                        title: t(
                                            "profile_settings_new_password_label"
                                        ).toLocaleUpperCase(),
                                        placeholder: t(
                                            "profile_settings_new_password_label"
                                        ),
                                        errorMsg: this.state.errorMsg.newPass,
                                        lightStyle: true,
                                        getValue: value => {
                                            this.handleForm("newPass", value);
                                        },
                                        secureTextEntry: true
                                    }
                                },
                                {
                                    name: "confirmPass",
                                    props: {
                                        title: t(
                                            "profile_settings_confirm_password_label"
                                        ).toLocaleUpperCase(),
                                        placeholder: t(
                                            "profile_settings_confirm_password_label"
                                        ),
                                        errorMsg: this.state.errorMsg
                                            .confirmPass,
                                        lightStyle: true,
                                        getValue: value => {
                                            this.handleForm(
                                                "confirmPass",
                                                value
                                            );
                                        },
                                        secureTextEntry: true
                                    }
                                }
                            ]}
                        />
                        <Button
                            disabled={!this.isActive()}
                            content={t("btn_content_save")}
                            onPress={this.submit}
                            buttonStyle={theme.btnWrapper}
                            textStyle={theme.btnContent}
                        />
                    </Block>
                </ScrollView>
                <BottomBar screen="Profile" />
            </SafeAreaView>
        );
    }

    isActive = () => {
        if (Object.keys(this.state.errorMsg).length < 3) return false;
        const {
            errorMsg: { oldPass, newPass, confirmPass }
        } = this.state;
        return !oldPass && !newPass && !confirmPass;
    };

    handleForm = (
        name: "oldPass" | "newPass" | "confirmPass",
        value: string
    ) => {
        switch (name) {
            case "oldPass":
                return this.setState(prevState => ({
                    oldPass: value,
                    errorMsg: {
                        ...prevState.errorMsg,
                        oldPass: this.validatePassword(value),
                        confirmPass: this.validateConfirmation(
                            prevState.confirmPass
                        )
                    }
                }));
            case "newPass":
                return this.setState(prevState => ({
                    newPass: value,
                    errorMsg: {
                        ...prevState.errorMsg,
                        newPass: this.validatePassword(value),
                        confirmPass: this.validateConfirmation(
                            prevState.confirmPass
                        )
                    }
                }));

            case "confirmPass":
                return this.setState(prevState => ({
                    confirmPass: value,
                    errorMsg: {
                        ...prevState.errorMsg,
                        confirmPass: this.validateConfirmation(value)
                    }
                }));
        }
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

    validateConfirmation = (value: string) => {
        if (!value) {
            return "Field is required!";
        }
        if (value !== this.state.newPass) {
            return "Password and confirmation do not match!";
        }

        return "";
    };

    submit = () => {
        this.form.validate();
        this.isActive() && router.replaceRoute("profile_settings");
    };
}

export default ModifyPassword;
