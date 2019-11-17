import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../../constants/buttonStyles";
import { colors } from "../../../../constants/colors";
import { RFS, RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    row: ViewStyle;
    amountRow: ViewStyle;
    cancelBtnWrapper: ViewStyle;
    cancelBtnContent: TextStyle;
    confirmBtnWrapper: ViewStyle;
    confirmBtnContent: TextStyle;
    amountTitle: TextStyle;
    amount: TextStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    fontWeight: "normal",
    color: colors.textLight
};

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        paddingVertical: 1.5 * RH,
        paddingHorizontal: RW
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: RH
    },
    amountRow: {
        paddingHorizontal: 2 * RW
    },
    amountTitle: {
        ...textMixin,
        fontSize: 1.6 * RFS
    },
    amount: {
        ...textMixin,
        fontSize: 2.2 * RFS
    },
    cancelBtnWrapper: {
        ...lightButtonWrapper,
        borderWidth: 0.1 * RH,
        width: "45%",
        backgroundColor: colors.white
    },
    cancelBtnContent: {
        ...lightButtonContent,
        color: colors.lightBlueCrossButton
    },
    confirmBtnWrapper: {
        ...lightButtonWrapper,
        backgroundColor: colors.lightBlueCrossButton,
        width: "45%"
    },
    confirmBtnContent: {
        ...lightButtonContent,
        color: colors.white
    }
});
