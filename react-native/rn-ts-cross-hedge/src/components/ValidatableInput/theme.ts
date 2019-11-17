import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { darkInput, lightInput } from "../../constants/inputStyles";
import { RFS, RH, RW } from "../../constants/window";
import { InputStyle } from "../../types/inputStyle";

interface ComponentStyles {
    input: InputStyle;
    lightInput: InputStyle;
    passwordWrapper: ViewStyle;
    icon: ViewStyle;
    imageEye: ImageStyle;
    messageWrapper: ViewStyle;
    message: TextStyle;
    title: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    input: {
        ...darkInput
    },
    lightInput: {
        ...lightInput
    },
    passwordWrapper: {
        flexDirection: "row",
        position: "relative"
    },
    icon: {
        position: "absolute",
        right: -4 * RW,
        top: 1 * RH
    },
    imageEye: {
        width: 2.8 * RW,
        height: 2.2 * RH
    },
    messageWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",
        marginBottom: RH
    },
    message: {
        fontFamily: "SF UI Text",
        color: colors.colorERRMassage,
        fontSize: 1.2 * RFS,
        marginLeft: 0.5 * RW
    },
    title: {
        fontFamily: "SF UI Text",
        fontSize: 1.2 * RFS,
        color: colors.white,
        marginBottom: RH
    }
});
