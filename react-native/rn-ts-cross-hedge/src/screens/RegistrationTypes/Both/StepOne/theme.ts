import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../../constants/colors";
import { darkInput } from "../../../../constants/inputStyles";
import { RFS, RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    title: TextStyle;
    input: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundDark
    },
    title: {
        fontFamily: "SF UI Text",
        color: colors.white,
        fontSize: 1.6 * RFS,
        marginBottom: 5 * RH,
        alignSelf: "flex-start"
    },
    input: {
        ...darkInput
    }
});
