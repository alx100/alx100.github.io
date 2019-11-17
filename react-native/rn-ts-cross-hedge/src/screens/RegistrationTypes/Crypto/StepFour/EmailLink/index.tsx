import React from "react";
import { Image, Text } from "react-native";
import RegistrationTemplate from "../../../../../components/RegistrationScreenTemplate";
import { t } from "../../../../../utils/t";
import { theme } from "./theme";

const EmailRedirectScreen = () => (
    <RegistrationTemplate
        isDefaultContinueButton={true}
        btnContent={"EMAIL"}
        isDefaultTitle={false}
        isBtnActive={true}
        isWarning={false}
        style={{ width: "80%" }}
    >
        <Image
            style={theme.image}
            source={require("../../../../../assets/common/cross_logo.png")}
        />
        <Text style={theme.titleTop}>
            {t("registration_type_crypto_stepFour_email_titleTop")}
        </Text>
        <Text style={theme.titleBottom}>
            {t("registration_type_crypto_stepFour_email_titleBottom")}
        </Text>
    </RegistrationTemplate>
);

export default EmailRedirectScreen;
