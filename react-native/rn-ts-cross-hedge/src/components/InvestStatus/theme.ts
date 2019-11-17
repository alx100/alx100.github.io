import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    content: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        position: "absolute",
        bottom: -1.25 * RH,
        width: 15 * RW,
        height: 2.5 * RH,
        borderRadius: 1.25 * RH,
        borderWidth: 1,
        borderColor: colors.globalCircle,
        backgroundColor: colors.backgroundLight,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2
    },
    content: {
        fontFamily: "SF UI Text",
        color: colors.textLight,
        fontSize: 1.2 * RFS
    }
});
