import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import {
    darkButtonContent,
    darkButtonWrapper
} from "../../../../constants/buttonStyles";
import { colors } from "../../../../constants/colors";
import { RFS, RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    title: TextStyle;
    phone_number: TextStyle;
    buttonWrapper: ViewStyle;
    buttonWrapperActive: ViewStyle;
    buttonContent: TextStyle;
    buttonContentActive: TextStyle;
    positionBothButton: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundDark
    },
    title: {
        fontFamily: "SF UI Text",
        color: colors.white,
        fontSize: 1.6 * RFS,
        marginBottom: 3 * RH
    },

    phone_number: {
        fontFamily: "SF UI Text",
        width: "100%",
        color: colors.activeButton,
        fontSize: 2.2 * RFS,
        marginBottom: 1.6 * RH
    },

    buttonWrapper: {
        ...darkButtonWrapper,
        width: "45%",
        marginLeft: "5%"
    },

    buttonWrapperActive: {
        ...darkButtonWrapper,
        backgroundColor: colors.activeButton,
        width: "45%",
        marginRight: "5%"
    },

    buttonContent: {
        ...darkButtonContent,
        color: colors.activeButton
    },

    buttonContentActive: {
        ...darkButtonContent
    },

    positionBothButton: {
        flexDirection: "row"
    }
});
