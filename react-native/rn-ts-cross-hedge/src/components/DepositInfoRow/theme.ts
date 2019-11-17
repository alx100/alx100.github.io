import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    title: TextStyle;
    valueWrapper: ViewStyle;
    value: TextStyle;
    iconWrapper: ViewStyle;
    icon: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 0.5 * RH
    },
    title: {
        color: colors.textLight,
        fontSize: 1.4 * RFS,
        marginRight: 0.7 * RW,
        textAlign: "right",
        width: "20%"
    },
    valueWrapper: {
        justifyContent: "center",
        alignContent: "flex-start",
        alignItems: "flex-start",
        padding: 0.6 * RH,
        borderRadius: 0.5 * RH,
        backgroundColor: "#F1F2F5",
        width: "70%"
    },
    value: {
        color: colors.textLight
    },
    iconWrapper: {
        marginLeft: 0.6 * RW,
        width: "10%"
    },
    icon: {
        height: 1.7 * RH,
        width: 1.3 * RW
    }
});
