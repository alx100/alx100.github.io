import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    infoWrapper: ViewStyle;
    monthWrapper: ViewStyle;
    monthIcon: ImageStyle;
    monthLine: ViewStyle;
    info: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        alignSelf: "flex-start",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        paddingVertical: RH
    },
    infoWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingBottom: 2 * RH
    },
    monthWrapper: {
        position: "relative"
    },
    monthIcon: {
        width: 3.5 * RH,
        height: 3.5 * RH
    },
    monthLine: {
        position: "absolute",
        height: 2 * RH,
        width: 0.1 * RW,
        backgroundColor: "#D8D8D8",
        right: "48%",
        bottom: -2 * RH,
        zIndex: -1
    },
    info: {
        color: "#878DAA",
        marginLeft: RW,
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS
    }
});
