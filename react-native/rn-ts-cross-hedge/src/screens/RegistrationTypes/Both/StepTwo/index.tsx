import React from "react";
import { SafeAreaView, Text } from "react-native";
import FormBuilder from "../../../../components/FormBuilder";
import RegistrationTemplate from "../../../../components/RegistrationScreenTemplate";
import { router } from "../../../../services/router";
import { storage } from "../../../../services/storage";
import { User } from "../../../../types/userInfo";
import { t } from "../../../../utils/t";
import { theme } from "./theme";

interface State {
    errorMsg?: string;
    bankAccount: string;
}

class BothStepTwo extends React.PureComponent<any, State> {
    private form!: FormBuilder;
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: undefined,
            bankAccount: ""
        };
    }
    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                <RegistrationTemplate
                    isDefaultContinueButton={true}
                    isDefaultTitle={false}
                    isBtnActive={
                        this.state.errorMsg !== undefined &&
                        !this.state.errorMsg
                    }
                    btnContent={t("btn_content_continue")}
                    isWarning={true}
                    warningContent={t("registration_type_bank_warning")}
                    // tslint:disable-next-line:no-empty
                    onStepForward={this.onStepForward}
                    style={{ width: "80%" }}
                >
                    <Text style={theme.title}>
                        {t("registration_type_bank_title")}
                    </Text>
                    <FormBuilder
                        onRef={ref => (this.form = ref)}
                        fields={[
                            {
                                name: "key",
                                props: {
                                    placeholder: t(
                                        "registration_type_bank_placeholder"
                                    ),
                                    errorMsg: this.state.errorMsg,
                                    getValue: this.handleInput
                                }
                            }
                        ]}
                    />
                </RegistrationTemplate>
            </SafeAreaView>
        );
    }

    handleInput = (value: string) => {
        this.setState({
            bankAccount: value,
            errorMsg: this.validateKey(value)
        });
    };

    validateKey = (value: string) => {
        if (!value) return "Required";
        return "";
    };

    onStepForward = () => {
        this.form.validate();
        !this.validateKey(this.state.bankAccount) &&
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        bank_account: this.state.bankAccount
                    }
                })
                .then(() => {
                    router.replaceRoute("registration_completed");
                });
    };
}

export default BothStepTwo;
