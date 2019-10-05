import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../../constants/buttonStyles";
import { colors } from "../../../../constants/colors";
import { RFS, RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    title: TextStyle;
    radioForm: ViewStyle;
    confirmBtnWrapper: ViewStyle;
    confirmBtnContent: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        padding: 2 * RH,
        justifyContent: "center"
    },
    title: {
        fontFamily: "SF UI Text",
        color: colors.activeTitleColor,
        fontSize: 1.6 * RFS,
        fontWeight: "600"
    },
    radioForm: {
        paddingTop: 1.5 * RH,
        paddingBottom: 2 * RH
    },
    confirmBtnWrapper: {
        ...lightButtonWrapper,
        backgroundColor: colors.lightBlueCrossButton
    },
    confirmBtnContent: {
        ...lightButtonContent,
        color: colors.white
    }
});
