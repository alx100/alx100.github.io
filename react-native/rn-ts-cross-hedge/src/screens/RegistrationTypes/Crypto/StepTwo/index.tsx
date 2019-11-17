import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import RegistrationTemplate from "../../../../components/RegistrationScreenTemplate";
import { isPhoneRestoration } from "../../../../redux/actions/registration";
import { router } from "../../../../services/router";
import { storage } from "../../../../services/storage";
import { User } from "../../../../types/userInfo";
import { t } from "../../../../utils/t";
import { RegistrationProps } from "../../../Registration";
import { theme } from "./theme";

interface State {
    key: string;
    phone_number: string;
    activeYes: boolean;
    activeNo: boolean;
}

type ComponentProps = DispatchProp;

class CryptoStepTwo extends React.PureComponent<ComponentProps, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            key: "",
            phone_number: "",
            activeYes: true,
            activeNo: false
        };
    }

    async componentDidMount() {
        storage
            .getStorageItem<User>("user")
            .then(res =>
                this.setState({ phone_number: res!.user_info!.phone_number! })
            );
    }

    onPress(active: number) {
        switch (active) {
            case 1:
                router.replaceRoute("regTypes_crypto_step_three");
                break;
            case 2:
                this.props.dispatch(
                    isPhoneRestoration({ phoneRestoreActive: true })
                );

                router.replaceRoute<RegistrationProps>("registration", {
                    step: 9
                });
                break;
            default:
                break;
        }
    }

    render() {
        const { phone_number, activeYes, activeNo } = this.state;
        return (
            <SafeAreaView style={theme.safeArea}>
                <RegistrationTemplate
                    isDefaultContinueButton={false}
                    isDefaultTitle={true}
                    isWarning={false}
                    isBtnActive={false}
                    title={t("registration_type_crypto_title_accept_phone")}
                    // tslint:disable-next-line:no-empty
                    style={{ width: "80%", justifyContent: "flex-start" }}
                >
                    <Text style={theme.title}>
                        {t(
                            "registration_type_crypto_descriptions_accept_phone"
                        )}
                    </Text>

                    <Text style={theme.phone_number}>{phone_number}</Text>

                    <View style={theme.positionBothButton}>
                        <TouchableOpacity
                            onPress={() => this.onPress(1)}
                            style={
                                activeYes
                                    ? theme.buttonWrapperActive
                                    : theme.buttonWrapper
                            }
                        >
                            <Text
                                style={
                                    activeYes
                                        ? theme.buttonContentActive
                                        : theme.buttonContent
                                }
                            >
                                YES
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.onPress(2)}
                            style={
                                activeNo
                                    ? theme.buttonWrapperActive
                                    : theme.buttonWrapper
                            }
                        >
                            <Text
                                style={
                                    activeNo
                                        ? theme.buttonContentActive
                                        : theme.buttonContent
                                }
                            >
                                NO
                            </Text>
                        </TouchableOpacity>
                    </View>
                </RegistrationTemplate>
            </SafeAreaView>
        );
    }
}

export default connect()(CryptoStepTwo);
