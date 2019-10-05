import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import BottomBar from "../../../components/BottomBar";
import { Button } from "../../../components/Button";
import FormBuilder from "../../../components/FormBuilder";
import Block from "../../../components/InnerPagesBlock";
import { router } from "../../../services/router";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface State {
    newInfo: string;
    errorMsg?: string;
}

interface OwnProps {
    placeholder?: string;
    title?: string;
    inputName?: string;
}

type ComponentProps = OwnProps;

class EditBankForm extends React.Component<ComponentProps, State> {
    private form!: FormBuilder;
    constructor(props) {
        super(props);
        this.state = {
            newInfo: "",
            errorMsg: undefined
        };
    }

    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                <Block style={theme.headBlock}>
                    <Text style={theme.headText}>
                        {t("bank_edit_head_text")}
                    </Text>
                </Block>

                <ScrollView>
                    <Block style={theme.container}>
                        <FormBuilder
                            onRef={ref => (this.form = ref)}
                            fields={[
                                {
                                    name:
                                        this.props.inputName || "bank_account",
                                    props: {
                                        title:
                                            this.props.title ||
                                            t("account_input_label"),
                                        placeholder:
                                            this.props.placeholder ||
                                            t("account_input_placeholder"),
                                        errorMsg: this.state.errorMsg,
                                        lightStyle: true,
                                        getValue: value => {
                                            this.setState({
                                                newInfo: value,
                                                errorMsg: this.validate(value)
                                            });
                                        }
                                    }
                                }
                            ]}
                        />
                        <Button
                            content={t("btn_content_save")}
                            onPress={this.save}
                            buttonStyle={theme.btnWrapper}
                            textStyle={theme.btnContent}
                        />
                    </Block>
                </ScrollView>
                <BottomBar screen={"Profile"} />
            </SafeAreaView>
        );
    }

    validate = (value: string) => {
        if (!value) return "Required";

        return "";
    };

    save = () => {
        const name = this.props.inputName || "bank_account";
        this.form.validate();
        !this.validate(this.state.newInfo) &&
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        [name]: this.state.newInfo
                    }
                })
                .then(() => {
                    router.replaceRoute("bank_details");
                });
    };
}

export default EditBankForm;
