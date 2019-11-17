import React from "react";
import { SafeAreaView, View } from "react-native";
import AssistantInfo from "./AssistantInfo";
import Chat from "./Chat";
import { theme } from "./theme";

class ChatBot extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={theme.safeAreaView}>
                {/* <View style={theme.border} /> */}
                <View style={theme.wrapper}>
                    <AssistantInfo
                        avatarUrl={require("../../assets/common/user_icon.png")}
                        name="Antoine"
                        description="Personal Financial assistant"
                    />
                    <Chat />
                </View>
                {/* <View style={theme.border} /> */}
            </SafeAreaView>
        );
    }
}

export default ChatBot;
