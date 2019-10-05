import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeAreaView: ViewStyle;
    title: TextStyle;
    warning: ViewStyle;
    depositInfo_block: ViewStyle;
    description: TextStyle;
    lastBlock: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    },
    title: {
        margin: RH,
        width: "85%",
        textAlign: "left",
        fontSize: 2.2 * RFS,
        color: colors.textLight,
        fontFamily: "SF UI Text",
        alignSelf: "center"
    },
    warning: {
        marginTop: 0,
        marginBottom: 0,
        alignSelf: "center",
        width: "60%"
    },
    depositInfo_block: {
        borderBottomWidth: 0.3 * RH
    },
    description: {
        fontFamily: "SF UI Text",
        color: colors.textLight,
        width: "85%",
        textAlign: "left",
        alignSelf: "center",
        paddingBottom: RH,
        fontSize: 1.4 * RFS
    },
    lastBlock: {
        borderBottomWidth: 0,
        paddingBottom: 4 * RH
    }
});
