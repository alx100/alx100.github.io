import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    text: TextStyle;
    textDark: TextStyle;
    divider: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-start",
        marginBottom: 0.8 * RH
    },
    text: {
        color: colors.textLight,
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS
    },
    textDark: {
        color: colors.activeTitleColor,
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS
    },
    divider: {
        width: "100%",
        height: 0.1 * RH,
        backgroundColor: colors.textLight,
        marginTop: RH,
        marginBottom: 1.8 * RH
    }
});
