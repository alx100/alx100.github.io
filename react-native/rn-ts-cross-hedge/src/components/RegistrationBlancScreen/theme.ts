import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW, WINDOW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    button: ViewStyle;
    text: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        position: "absolute",
        zIndex: 200,
        elevation: 10,
        width: WINDOW.width,
        height: "100%",
        backgroundColor: "rgba(27, 35, 69, 0.85)",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 10 * RH,
        height: 10 * RH,
        backgroundColor: colors.activeButton,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: colors.black,
        shadowRadius: 0.5 * RH,
        shadowOpacity: 0.8,
        shadowOffset: { height: 0.1 * RH, width: 0 }
    },
    text: {
        color: colors.white,
        fontFamily: "SF UI Text",
        fontSize: 1.5 * RFS,
        textAlign: "center",
        fontWeight: "bold"
    }
});
