import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../../constants/colors";
import { RFS, RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    text: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        padding: 2 * RH,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "SF UI Text",
        color: colors.textLight,
        fontSize: 1.6 * RFS,
        marginTop: 1.5 * RH
    }
});
