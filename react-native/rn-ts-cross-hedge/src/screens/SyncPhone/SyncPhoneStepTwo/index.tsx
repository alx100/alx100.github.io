import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import PhoneWithCode from "../../../components/PhoneWithCode";
import Warning from "../../../components/Warning";
import { colors } from "../../../constants/colors";
import { NUMBER } from "../../../constants/validators";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
}

interface State {
    code: string;
    phone: string;
    errMsg?: string;
}

type ComponentProps = OwnProps;

class SyncPhoneStepOne extends React.Component<ComponentProps, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            code: "",
            phone: "",
            errMsg: undefined
        };
    }

    render() {
        const { code, phone, errMsg } = this.state;
        return (
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    backgroundColor: colors.lightGray
                }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={theme.container}>
                    <Text style={theme.title}>{t("change_phone_title")}</Text>
                    <PhoneWithCode
                        theme="light"
                        codeProps={{
                            value: code,
                            onChangeText: value => {
                                this.handleInputs("code", value);
                            },
                            onFocus: this.concatWithPlus
                        }}
                        phoneProps={{
                            value: phone,
                            onChangeText: value => {
                                this.handleInputs("phone", value);
                            }
                        }}
                    />
                    {errMsg ? <Warning content={errMsg} /> : null}
                    <Button
                        disabled={errMsg === undefined || Boolean(errMsg)}
                        onPress={this.onPress}
                        content={t("btn_content_sync")}
                        buttonStyle={theme.buttonWrapper}
                        textStyle={theme.buttonContent}
                    />
                </View>
            </ScrollView>
        );
    }

    handleInputs = (name: "phone" | "code", value: string) => {
        switch (name) {
            case "phone":
                return this.setState({
                    phone: value,
                    errMsg: this.validation(this.state.code, value)
                });
            case "code":
                return this.setState({
                    code: value,
                    errMsg: this.validation(value, this.state.phone)
                });
        }
    };

    validation = (code: string, phone: string) => {
        if (!code || !phone) return "Required";

        if (phone.length < 7) {
            return "Phone number must be at least 7 numbers long";
        }
        if (!NUMBER.test(code.slice(1)) || !NUMBER.test(phone)) {
            return "Enter the valid phone number";
        }
        return "";
    };

    onPress = () => {
        const { code, phone } = this.state;
        const phoneNumber: string = code + phone;

        !this.validation(code, phone) &&
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        new_phone_number: phoneNumber
                    }
                })
                .then(() => this.props.stepForward());
    };

    concatWithPlus = () => this.setState({ code: "+" });
}

export default SyncPhoneStepOne;
