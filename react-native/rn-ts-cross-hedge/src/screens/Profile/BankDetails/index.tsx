import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import BottomBar from "../../../components/BottomBar";
import EditableInfo from "../../../components/EditableInfo";
import Block from "../../../components/InnerPagesBlock";
import { colors } from "../../../constants/colors";
import { RH } from "../../../constants/window";
import { router } from "../../../services/router";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface State {
    bankAccount: string;
    publicKey: string;
}

interface OwnProps {}

type ComponentProps = OwnProps;

class BankDetails extends React.Component<ComponentProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount: "",
            publicKey: ""
        };

        storage.getStorageItem<User>("user").then(res =>
            this.setState({
                bankAccount: res!.user_info!.bank_account!,
                publicKey: res!.user_info!.public_key!
            })
        );
    }

    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                <ScrollView>
                    <Block style={theme.container}>
                        <EditableInfo
                            editable={true}
                            theme={"light"}
                            title={t("bank_info_title")}
                            divider={true}
                            titleColor={colors.activeTitleColor}
                            iconColor={colors.activeTitleColor}
                            onEdit={() =>
                                router.replaceRoute("edit_bank_account")
                            }
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={t("bank_account_label")}
                            value={this.state.bankAccount}
                            wrapperStyle={{ marginBottom: 2 * RH }}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={t("bank_account_status_label")}
                            value={
                                this.state.bankAccount ? "Validated" : "Invalid"
                            }
                            wrapperStyle={{ marginBottom: 3 * RH }}
                        />
                        <EditableInfo
                            editable={true}
                            theme={"light"}
                            title={t("wallet_info_title")}
                            divider={true}
                            titleColor={colors.activeTitleColor}
                            iconColor={colors.activeTitleColor}
                            onEdit={() => router.replaceRoute("edit_wallet")}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={t("public_key_label")}
                            value={this.state.publicKey}
                            wrapperStyle={{ marginBottom: 3 * RH }}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"light"}
                            title={t("currency_title")}
                            divider={true}
                            titleColor={colors.activeTitleColor}
                            iconColor={colors.activeTitleColor}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={t("currency_label")}
                            value={"EURO"}
                            wrapperStyle={{ marginBottom: 2 * RH }}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={t("crypto_label")}
                            value={"BTC"}
                        />
                    </Block>
                </ScrollView>
                <BottomBar screen={"Profile"} />
            </SafeAreaView>
        );
    }
}

export default BankDetails;
