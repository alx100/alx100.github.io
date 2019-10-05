import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { theme } from "./theme";

export interface ChatMessageProps {
    content: string | React.ReactNode;
    autor: "user" | "bot";
}

const ChatMessage = (props: ChatMessageProps) => (
    <View
        style={
            props.autor === "bot" ? theme.botMsgWrapper : theme.userMsgWrapper
        }
    >
        <Image
            style={theme.avatar}
            source={
                props.autor === "bot"
                    ? require("../../../assets/common/user_icon.png")
                    : require("../../../assets/common/Bitmap.png")
            }
        />
        <View style={props.autor === "bot" ? theme.botMsg : theme.userMsg}>
            {typeof props.content === "string" ? (
                <Text style={theme.content}>{props.content}</Text>
            ) : (
                props.content
            )}
        </View>
    </View>
);

export default ChatMessage;
