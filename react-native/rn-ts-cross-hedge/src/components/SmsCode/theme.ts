import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { darkInput, lightInput } from "../../constants/inputStyles";
import { RFS, RH, RW } from "../../constants/window";
import { InputStyle } from "../../types/inputStyle";

interface ComponentStyles {
    smsFieldWrapperLight: ViewStyle;
    smsFieldWrapperDark: ViewStyle;
    darkInput: InputStyle;
    lightInput: InputStyle;
    position_input: ViewStyle;
}

const FieldWrapperMixin: ViewStyle = {
    width: "18%",
    marginTop: 3 * RH,
    marginBottom: 3 * RH
};

export const theme = StyleSheet.create<ComponentStyles>({
    position_input: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },

    smsFieldWrapperLight: {
        ...FieldWrapperMixin,
        backgroundColor: colors.backgroundLight
    },

    smsFieldWrapperDark: {
        ...FieldWrapperMixin,
        backgroundColor: colors.backgroundDark
    },

    darkInput: {
        ...darkInput,
        textAlign: "center"
    },
    lightInput: {
        ...lightInput,
        textAlign: "center"
    }
});
