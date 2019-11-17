import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    title: TextStyle;
    titleBig: TextStyle;
    amountText: TextStyle;
    amountTextBig: TextStyle;
    amountWrapper: ViewStyle;
    amountRangeWrapper: ViewStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    color: colors.textLight,
    fontWeight: "normal"
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: RH,
        borderRightColor: colors.lightGray,
        borderRightWidth: 1
    },
    title: {
        ...textMixin,
        fontSize: 1.2 * RFS,
        textAlign: "center",
        marginBottom: RH
    },
    titleBig: {
        ...textMixin,
        fontSize: 1.6 * RFS,
        textAlign: "center",
        marginBottom: 1.5 * RH
    },
    amountRangeWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    amountWrapper: {
        marginHorizontal: RW
    },
    amountText: {
        ...textMixin,
        fontSize: 1.6 * RFS
    },
    amountTextBig: {
        ...textMixin,
        fontSize: 2.2 * RFS
    }
});
