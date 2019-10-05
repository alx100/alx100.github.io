import React from "react";
import { SafeAreaView } from "react-native";
import BottomBar from "../../../components/BottomBar";
import Block from "../../../components/InnerPagesBlock";
import SwitchWithLabel from "../../../components/SwitchWithLabel";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface State {
    alert: boolean;
    news: boolean;
    feed: boolean;
}

type ComponentProps = any;

class NotificationSettings extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            alert: true,
            news: false,
            feed: true
        };
    }

    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                <Block style={theme.container}>
                    <SwitchWithLabel
                        content={t("profile_notifications_alert_label")}
                        onSwitchChange={value =>
                            this.setState({ alert: value })
                        }
                        value={this.state.alert}
                    />
                    <SwitchWithLabel
                        content={t("profile_notifications_news_label")}
                        onSwitchChange={value => this.setState({ news: value })}
                        value={this.state.news}
                    />
                    <SwitchWithLabel
                        content={t("profile_notifications_feed_label")}
                        onSwitchChange={value => this.setState({ feed: value })}
                        value={this.state.feed}
                    />
                </Block>
                <BottomBar screen="Profile" />
            </SafeAreaView>
        );
    }
}

export default NotificationSettings;
