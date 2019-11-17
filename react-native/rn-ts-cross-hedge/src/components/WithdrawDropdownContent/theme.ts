import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    btnWrapper: ViewStyle;
    btnContent: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 2 * RH
    },
    btnWrapper: {
        height: 2.5 * RH,
        width: 10 * RW,
        borderRadius: 1.3 * RH,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightBlueCrossButton
    },
    btnContent: {
        fontFamily: "SF UI Text",
        color: colors.white,
        fontSize: 1.2 * RFS,
        fontWeight: "600"
    }
});
