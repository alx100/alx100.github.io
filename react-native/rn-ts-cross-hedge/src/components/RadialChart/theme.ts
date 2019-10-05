import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    chart: ViewStyle;
    content: ViewStyle;
    description: TextStyle;
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
        height: 22 * RH,
        width: 22 * RH,
        alignSelf: "center",
        backgroundColor: "#F6F7F9",
        borderStyle: "dashed"
    },
    chart: {
        height: "100%",
        width: "100%"
    },
    content: {
        width: 15 * RH,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    description: {
        color: colors.textLight,
        marginTop: 0.5 * RH,
        textAlign: "center",
        fontSize: 1.2 * RFS
    }
});
