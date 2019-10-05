import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { Icon } from "../../../components/Icons";
import { RH } from "../../../constants/window";
import {
    showActivitiesBalance,
    showActivitiesNews
} from "../../../redux/actions/activities";
import { ActivitiesStore } from "../../../redux/reducers/activitiesReducer";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface StoreProps {
    activities: ActivitiesStore;
}

type ComponentProps = StoreProps & DispatchProp;

const ActivitiesTitleButtons = (props: ComponentProps) => (
    <View style={theme.wrapper}>
        {!props.activities.showNews ? (
            <TouchableOpacity
                onPress={() => props.dispatch(showActivitiesNews())}
            >
                <View style={theme.buttonWrapper}>
                    <Icon name="news_icon" size={1.8 * RH} />
                    <Text style={theme.btnContent}>
                        {t("activities_headerButtons_news")}
                    </Text>
                </View>
            </TouchableOpacity>
        ) : null}
        {props.activities.operationList && !props.activities.showBalanse ? (
            <TouchableOpacity
                onPress={() => props.dispatch(showActivitiesBalance())}
            >
                <View style={theme.buttonWrapper}>
                    <Icon name="balance_icon" size={1.8 * RH} />
                    <Text style={theme.btnContent}>
                        {t("activities_headerButtons_balance")}
                    </Text>
                </View>
            </TouchableOpacity>
        ) : null}
    </View>
);

export default connect((store: StoreProps) => ({
    activities: store.activities
}))(ActivitiesTitleButtons);
