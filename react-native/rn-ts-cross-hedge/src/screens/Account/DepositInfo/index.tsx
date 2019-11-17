import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import BottomBar from "../../../components/BottomBar";
import DepositInfoRow from "../../../components/DepositInfoRow";
import Block from "../../../components/InnerPagesBlock";
import Warning from "../../../components/Warning";
import { t } from "../../../utils/t";
import { theme } from "./theme";

const DepositInfo = () => (
    <SafeAreaView style={theme.safeAreaView}>
        <ScrollView>
            <Block style={theme.depositInfo_block}>
                <Text style={theme.title}>
                    {t("depositInfo_topBlock_title")}
                </Text>
                <DepositInfoRow
                    title={t("depositInfo_depositRow_iban_title")}
                    value={"FR20 6789 4567 8765 4565 1433 F80"}
                />
                <DepositInfoRow
                    title={t("depositInfo_depositRow_name_title")}
                    value={"CROSS HEDGE"}
                />
                <DepositInfoRow
                    title={t("depositInfo_depositRow_ref_title")}
                    value={"ABKI0956"}
                />
                <Warning
                    style={theme.warning}
                    content={t("depositInfo_topBlock_warning")}
                />
            </Block>
            <Block style={theme.depositInfo_block}>
                <Text style={theme.title}>
                    {t("depositInfo_bottomBlock_title")}
                </Text>
                <DepositInfoRow
                    title={t("depositInfo_depositRow_key_title")}
                    value={"EG76HYJ980LOIKJULI9087KHFDDS76"}
                />
                <DepositInfoRow
                    title={t("depositInfo_depositRow_memo_title")}
                    value={"ABKI0956"}
                />
                <Warning
                    style={theme.warning}
                    content={t("depositInfo_bottomBlock_warning")}
                />
            </Block>
            <Block style={theme.lastBlock}>
                <Text style={theme.title}>
                    {t("depositInfo_infoBlock_title")}
                </Text>
                <Text style={theme.description}>
                    {t("depositInfo_infoBlock_content")}
                </Text>
            </Block>
        </ScrollView>
        <BottomBar screen={"Account"} />
    </SafeAreaView>
);

export default DepositInfo;
