import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    chatbotInfoWrapper: ViewStyle;
    chatbotInfoContent: TextStyle;
    flexRow: ViewStyle;
    position_cross: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignContent: "flex-end",
        backgroundColor: "rgba(27, 38, 67, 0.8)",
        alignItems: "center",
        paddingTop: 2 * RH
    },

    chatbotInfoWrapper: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: RH,
        marginBottom: 8 * RH
    },

    chatbotInfoContent: {
        textAlign: "center",
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS,
        fontWeight: "200",
        marginBottom: 1.5 * RH
    },

    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center"
    },

    position_cross: {
        margin: 2 * RH,
        padding: 2 * RH,
        alignSelf: "center"
    }
});
