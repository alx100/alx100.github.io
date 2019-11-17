import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";
interface ComponentStyles {
    wrapper: ViewStyle;
    chartWrapper: ViewStyle;
    chartContent: TextStyle;
    description: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center"
    },
    chartWrapper: {
        position: "relative",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: 0.3 * RH,
        borderWidth: 0.1 * RH,
        borderStyle: "dotted",
        borderColor: colors.textLight,
        borderRadius: 50 * RH
    },
    chartContent: {
        position: "absolute",
        fontFamily: "SF UI Text",
        color: colors.textLight,
        fontSize: 1.2 * RFS
    },
    description: {
        fontSize: 1.2 * RFS,
        fontFamily: "SF UI Text",
        color: colors.textLight,
        marginTop: RH
    }
});
