import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate";
import { router } from "../../../services/router";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
}

interface State {
    code: string;
    bankAccount: boolean;
    cryptoWallet: boolean;
    both: boolean;
}

type ComponentProps = OwnProps;

class RegistrationStepTen extends React.PureComponent<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            code: "",
            bankAccount: true,
            cryptoWallet: false,
            both: false
        };
    }

    render() {
        const { bankAccount, cryptoWallet, both } = this.state;
        return (
            <RegistrationTemplate
                isBtnActive={true}
                isDefaultContinueButton={true}
                isDefaultTitle={true}
                isWarning={false}
                title={"What do you want to work with?"}
                btnContent={t("btn_content_continue")}
                onStepForward={this.actionWay}
            >
                <TouchableOpacity
                    style={theme.containerFirst}
                    onPress={() =>
                        !bankAccount
                            ? this.setState({
                                  bankAccount: true,
                                  cryptoWallet: false,
                                  both: false
                              })
                            : null
                    }
                >
                    <View
                        style={
                            bankAccount
                                ? theme.globalCircleActive
                                : theme.globalCirclePassive
                        }
                    >
                        <View style={bankAccount ? theme.centerCircle : null} />
                    </View>
                    <Text
                        style={
                            bankAccount
                                ? theme.textContainerActive
                                : theme.textContainerPassive
                        }
                    >
                        Bank account
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={theme.containerSecond}
                    onPress={() =>
                        !cryptoWallet
                            ? this.setState({
                                  bankAccount: false,
                                  cryptoWallet: true,
                                  both: false
                              })
                            : null
                    }
                >
                    <View
                        style={
                            cryptoWallet
                                ? theme.globalCircleActive
                                : theme.globalCirclePassive
                        }
                    >
                        <View
                            style={cryptoWallet ? theme.centerCircle : null}
                        />
                    </View>
                    <Text
                        style={
                            cryptoWallet
                                ? theme.textContainerActive
                                : theme.textContainerPassive
                        }
                    >
                        Crypto Wallet
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={theme.containerThird}
                    onPress={() =>
                        !both
                            ? this.setState({
                                  bankAccount: false,
                                  cryptoWallet: false,
                                  both: true
                              })
                            : null
                    }
                >
                    <View
                        style={
                            both
                                ? theme.globalCircleActive
                                : theme.globalCirclePassive
                        }
                    >
                        <View style={both ? theme.centerCircle : null} />
                    </View>
                    <Text
                        style={
                            both
                                ? theme.textContainerActive
                                : theme.textContainerPassive
                        }
                    >
                        Both
                    </Text>
                </TouchableOpacity>
            </RegistrationTemplate>
        );
    }

    actionWay = () => {
        const { bankAccount, cryptoWallet, both } = this.state;
        switch (true) {
            case bankAccount:
                storage
                    .setStorageItem<User>("user", {
                        step: 13,
                        user_info: {
                            registration_type: "bank"
                        }
                    })
                    .then(() => router.replaceRoute("regTypes_bank_step_one"));
                break;
            case cryptoWallet:
                storage
                    .setStorageItem<User>("user", {
                        step: 13,
                        user_info: {
                            registration_type: "crypto"
                        }
                    })
                    .then(() =>
                        router.replaceRoute("regTypes_crypto_step_one")
                    );
                break;
            case both:
                storage
                    .setStorageItem<User>("user", {
                        step: 13,
                        user_info: {
                            registration_type: "both"
                        }
                    })
                    .then(() => router.replaceRoute("regTypes_both_step_one"));
                break;
            default:
                break;
        }
    };
}

export default RegistrationStepTen;
