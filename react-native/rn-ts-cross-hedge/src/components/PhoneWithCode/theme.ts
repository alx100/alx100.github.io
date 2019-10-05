import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { darkInput, lightInput } from "../../constants/inputStyles";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    darkInput: ViewStyle;
    lightInput: ViewStyle;
    phoneNumberWrapper: ViewStyle;
    codeWrapper: ViewStyle;
    codeWrapper_description: TextStyle;
    light_codeWrapper_description: TextStyle;
    phoneWrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    darkInput: {
        ...darkInput,
        marginBottom: 0,
        marginTop: 0.8 * RH
    },
    lightInput: {
        ...lightInput,
        marginBottom: 0,
        marginTop: 0.8 * RH
    },
    phoneNumberWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 1.8 * RH
    },
    codeWrapper: {
        width: "25%",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    codeWrapper_description: {
        color: colors.white,
        fontSize: 1.2 * RFS
    },
    light_codeWrapper_description: {
        color: colors.globalCircle,
        fontSize: 1.2 * RFS
    },
    phoneWrapper: {
        width: "70%"
    }
});
