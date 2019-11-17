import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../constants/buttonStyles";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    row: ViewStyle;
    cancelBtnWrapper: ViewStyle;
    cancelBtnContent: TextStyle;
    confirmBtnWrapper: ViewStyle;
    confirmBtnContent: TextStyle;
}

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
