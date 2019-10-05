import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/Button";
import { router } from "../../../services/router";
import { t } from "../../../utils/t";
import { theme } from "./theme";

const TransactionInfoBlock = () => (
    <View style={theme.wrapper}>
        <Text style={theme.paragraph}>
            {t("activities_infoBlock_paragraph_top")}
        </Text>
        <Text style={theme.paragraph}>
            {t("activities_infoBlock_paragraph_middle")}
        </Text>
        <Text style={theme.paragraph}>
            {t("activities_infoBlock_paragraph_bottom")}
        </Text>
        <Button
            buttonStyle={theme.btnWrapper}
            textStyle={theme.btnContent}
            onPress={() => router.replaceRoute("depositInfo")}
            content={t("btn_content_info")}
        />
    </View>
);

export default TransactionInfoBlock;
