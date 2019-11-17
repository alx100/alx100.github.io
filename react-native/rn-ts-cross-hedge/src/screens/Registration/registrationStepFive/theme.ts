import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { darkInput } from "../../../constants/inputStyles";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    input: TextStyle;
    datepicker: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    input: {
        ...darkInput,
        marginTop: RH,
        textAlign: "center"
    },
    datepicker: {
        width: "100%",
        height: Platform.OS === "android" ? 170 : 18 * RH,
        marginVertical: 2 * RH,
        backgroundColor: colors.inputBackgroundDark,
        justifyContent: "center",
        alignItems: "center"
    }
});
