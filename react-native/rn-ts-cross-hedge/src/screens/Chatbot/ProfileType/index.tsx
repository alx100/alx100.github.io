import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { fetchChatbotData } from "../../../redux/asyncActions/chatbot";
import { router } from "../../../services/router";
import { AsyncDispatcher } from "../../../types/dispatch";
import { theme } from "./theme";

interface OwnProps {
    profileType: "bold" | "safe" | "dynamic" | "trader";
}

type ComponentProps = OwnProps & DispatchProp & AsyncDispatcher;

class ProfileType extends React.PureComponent<ComponentProps> {
    render() {
        return (
            <View style={theme.wrapper}>
                <View style={{ alignItems: "center" }}>
                    <Text style={theme.description}>
                        {"YOUR RISK \nPROFILE IS"}
                    </Text>
                    <Text style={theme.type}>
                        {this.props.profileType.toUpperCase()}
                    </Text>
                    <TouchableOpacity onPress={this.stopChatBot}>
                        <Image
                            source={require("../../../assets/BottomBarIcon/centerButton.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    stopChatBot = () => {
        this.props.dispatch(fetchChatbotData());
        router.replaceRoute("activities");
    };
}

export default connect()(ProfileType);
