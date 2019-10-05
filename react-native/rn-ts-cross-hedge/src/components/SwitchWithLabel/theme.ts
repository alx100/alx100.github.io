import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    switchWrapper: ViewStyle;
    switchLabel: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    switchWrapper: {
        paddingVertical: 1.5 * RH,
        borderBottomWidth: 0.1 * RH,
        borderBottomColor: colors.textLight,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    switchLabel: {
        fontFamily: "SF UI Text",
        color: colors.textLight,
        fontSize: 1.6 * RFS
    }
});
