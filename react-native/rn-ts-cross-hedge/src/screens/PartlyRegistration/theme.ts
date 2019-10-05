import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    darkButtonContent,
    lightButtonContent
} from "../../constants/buttonStyles";
import { colors } from "../../constants/colors";
import { RH, RW } from "../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    wrapper: ViewStyle;
    btnDisabled: ViewStyle;
    btnActive: ViewStyle;
    btnContentDisabled: TextStyle;
    btnContentActive: TextStyle;
    block: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundDark
    },
    wrapper: {
        alignSelf: "center",
        justifyContent: "flex-start",
        flex: 1
    },
    btnDisabled: {
        borderWidth: 0.2 * RW,
        paddingVertical: 0.5 * RH,
        backgroundColor: colors.backgroundDark,
        borderColor: colors.activeButton,
        borderRadius: 50
    },
    btnActive: {
        borderWidth: 0.2 * RW,
        paddingVertical: 0.5 * RH,
        borderColor: colors.activeButton,
        borderRadius: 50,
        backgroundColor: colors.activeButton
    },
    btnContentDisabled: {
        ...lightButtonContent
    },
    btnContentActive: {
        ...darkButtonContent
    },
    block: {
        marginVertical: 0.5 * RH
    }
});
