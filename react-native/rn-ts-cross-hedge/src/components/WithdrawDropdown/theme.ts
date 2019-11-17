import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    text: TextStyle;
    row: ViewStyle;
    amountWrapper: ViewStyle;
    amountText: TextStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    fontSize: 1.6 * RFS,
    fontWeight: "normal"
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 1.8 * RH,
        paddingTop: 1.8 * RH
    },
    text: {
        ...textMixin,
        color: colors.textLight
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    amountWrapper: {
        marginRight: RW
    },
    amountText: {
        ...textMixin,
        color: colors.activeTitleColor
    }
});
