import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import BottomBar from "../../../components/BottomBar";
import Block from "../../../components/InnerPagesBlock";
import ProfileLink from "../../../components/ProfileLink";
import { router } from "../../../services/router";
import { t } from "../../../utils/t";
import { theme } from "./theme";

class ProfileSettings extends React.Component {
    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                <ScrollView>
                    <Block>
                        <ProfileLink
                            content={t("personal_info_title")}
                            redirect={() =>
                                router.replaceRoute("personal_info")
                            }
                        />
                        <ProfileLink
                            content={t("bank_details_title")}
                            redirect={() => router.replaceRoute("bank_details")}
                        />
                        <ProfileLink
                            content={t("modify_password_title")}
                            redirect={() =>
                                router.replaceRoute("modify_password")
                            }
                        />
                        <ProfileLink content={t("risk_profile_title")} />
                    </Block>
                    <Block style={theme.appSettingsBlock}>
                        <Text style={theme.appSettingsTitle}>
                            {t("profile_app_settings_label")}
                        </Text>
                        <ProfileLink
                            content={t("profile_settings_notifications_title")}
                            redirect={() =>
                                router.replaceRoute("notifications_setting")
                            }
                        />
                        <ProfileLink
                            content={t("syncPhone_header")}
                            redirect={() => router.replaceRoute("syncphone")}
                        />
                        <ProfileLink
                            content={t("profile_settings_language_title")}
                            redirect={() =>
                                router.replaceRoute("change_language")
                            }
                        />
                    </Block>
                </ScrollView>
                <BottomBar screen="Profile" />
            </SafeAreaView>
        );
    }
}

export default ProfileSettings;
