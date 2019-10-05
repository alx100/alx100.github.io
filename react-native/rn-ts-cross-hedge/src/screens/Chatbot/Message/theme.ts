import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    botMsgWrapper: ViewStyle;
    userMsgWrapper: ViewStyle;
    avatar: ImageStyle;
    botMsg: ViewStyle;
    userMsg: ViewStyle;
    content: TextStyle;
}

const MsgMixin: ViewStyle = {
    maxWidth: "75%",
    paddingHorizontal: 2 * RW,
    paddingVertical: 0.6 * RH,
    borderRadius: 10
};

export const theme = StyleSheet.create<ComponentStyles>({
    botMsgWrapper: {
        marginHorizontal: RW,
        flexDirection: "row",
        marginVertical: 0.5 * RH
    },
    userMsgWrapper: {
        marginHorizontal: RW,
        flexDirection: "row-reverse",
        marginVertical: 0.5 * RH
    },
    avatar: {
        width: 2.6 * RH,
        height: 2.6 * RH
    },
    botMsg: {
        ...MsgMixin,
        backgroundColor: "rgba(79,228,236,0.15)",
        marginLeft: RW
    },
    userMsg: {
        ...MsgMixin,
        backgroundColor: colors.lightGray,
        marginRight: RW
    },
    content: {
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS,
        textAlign: "left"
    }
});
