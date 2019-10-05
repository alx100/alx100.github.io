import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import SMSCode from "../../../components/SmsCode";
import { colors } from "../../../constants/colors";
import { NUMBER } from "../../../constants/validators";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    resetSteps: () => void;
}

interface State {
    code: string[];
    phone: string;
    disableBtn: boolean;
}

type ComponentProps = OwnProps;

class SyncPhoneStepOne extends React.Component<ComponentProps, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            code: [],
            disableBtn: true,
            phone: ""
        };
    }

    async componentDidMount() {
        storage
            .getStorageItem<User>("user")
            .then(res =>
                this.setState({ phone: res!.user_info!.new_phone_number! })
            );
    }

    render() {
        const { disableBtn } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: colors.lightGray }}>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={theme.container}>
                        <Text style={theme.title}>
                            {t("receive_code_title")}
                        </Text>
                        <SMSCode style="light" onPressCode={this.handleCode} />
                        <Button
                            disabled={disableBtn}
                            onPress={this.onConfirmCode}
                            content={t("btn_content_confirm")}
                            buttonStyle={theme.buttonWrapper}
                            textStyle={theme.buttonContent}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }

    handleCode = (code: string[]) => {
        this.setState({
            disableBtn: !code.every(item => NUMBER.test(item)),
            code
        });
    };

    onConfirmCode = () => {
        const { code, phone } = this.state;
        if (phone && code) {
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        phone_number: phone
                    }
                })
                .then(() => this.props.resetSteps());
        }
    };
}

export default SyncPhoneStepOne;
