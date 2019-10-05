import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { darkInput } from "../../../constants/inputStyles";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    input: ViewStyle;
    text: TextStyle;
    container: ViewStyle;
    underLine: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    input: {
        ...darkInput,
        marginTop: RH
    },

    container: {
        marginVertical: 2 * RH,
        borderRadius: 3,
        width: "100%",
        height: 16 * RH,
        backgroundColor: colors.inputBackgroundDark
    },

    text: {
        color: colors.white,
        fontSize: 1.6 * RFS,
        fontFamily: "SF UI Text"
    },

    underLine: {
        borderBottomWidth: 0.1 * RH,
        borderBottomColor: colors.white,
        marginHorizontal: 1.5 * RW,
        paddingVertical: 1.5 * RH
    }
});
