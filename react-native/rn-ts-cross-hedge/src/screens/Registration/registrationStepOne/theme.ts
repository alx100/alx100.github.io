import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    darkButtonContent,
    darkButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    title: TextStyle;
    text: TextStyle;
    createButtonWrapper: ViewStyle;
    createButtonContent: TextStyle;
    image: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    image: {
        height: 17 * RH,
        width: 17 * RH
    },
    title: {
        marginTop: RH,
        marginBottom: 4 * RH,
        fontFamily: "SF UI Text",
        fontSize: 2.2 * RFS,
        color: colors.white,
        textAlign: "center"
    },
    text: {
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS,
        textAlign: "center",
        color: colors.white,
        marginBottom: RH
    },
    createButtonWrapper: {
        ...darkButtonWrapper,
        backgroundColor: colors.activeButton,
        marginTop: 3 * RH
    },
    createButtonContent: {
        ...darkButtonContent,
        color: colors.backgroundDark
    }
});
