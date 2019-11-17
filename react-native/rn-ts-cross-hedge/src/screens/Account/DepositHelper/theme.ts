import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    content: ViewStyle;
    title: TextStyle;
    description: TextStyle;
    btn: ViewStyle;
    btnContent: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        position: "relative",
        borderWidth: 0.1 * RW,
        borderColor: "#878DAA",
        borderRadius: 50 * RH,
        padding: RH,
        width: 22 * RH,
        height: 22 * RH,
        alignSelf: "center",
        backgroundColor: "#F6F7F9",
        borderStyle: "dashed"
    },
    content: {
        width: "100%",
        height: "100%",
        borderWidth: RW,
        borderColor: colors.activeButton,
        borderRadius: 50 * RH,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: "SF UI Text",
        fontSize: 2.8 * RFS,
        fontWeight: "bold",
        color: colors.activeButton
    },
    description: {
        textAlign: "center",
        fontFamily: "SF UI Text",
        fontSize: 1.2 * RFS,
        color: colors.textLight
    },
    btn: {
        position: "absolute",
        bottom: -2 * RH,
        right: -2 * RH,
        backgroundColor: colors.activeButton,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 10 * RH,
        height: 10 * RH,
        borderRadius: 50 * RH
    },
    btnContent: {
        color: colors.white,
        fontFamily: "SF UI Text",
        fontSize: 2.2 * RFS
    }
});
