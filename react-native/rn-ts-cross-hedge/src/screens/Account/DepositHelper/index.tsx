import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "../../../services/router";
import { t } from "../../../utils/t";
import { theme } from "./theme";

const DepositHelper = () => (
    <View style={theme.wrapper}>
        <View style={theme.content}>
            <Text style={theme.title}>John</Text>
            <Text style={theme.description}>
                {t("depositHelper_description")}
            </Text>
        </View>
        <TouchableOpacity
            onPress={() => router.replaceRoute("depositInfo")}
            style={theme.btn}
        >
            <Text style={theme.btnContent}>{t("depositHelper_btn")}</Text>
        </TouchableOpacity>
    </View>
);

export default DepositHelper;
