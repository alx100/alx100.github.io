import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    headWrapper: ViewStyle;
    title: TextStyle;
    titleBig: TextStyle;
    subtitle: TextStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    color: colors.activeTitleColor,
    fontSize: 1.8 * RFS,
    fontWeight: "600"
};

export const theme = StyleSheet.create<ComponentStyles>({
    headWrapper: {
        height: 7 * RH,
        justifyContent: "center",
        alignItems: "center",
        padding: 0.5 * RH,
        paddingTop: RH,
        borderBottomColor: colors.activeTitleColor,
        borderBottomWidth: 0.1 * RH
    },
    title: {
        ...textMixin
    },
    titleBig: {
        ...textMixin,
        fontSize: 2.2 * RFS,
        fontWeight: "bold"
    },
    subtitle: {
        ...textMixin,
        fontSize: 1.4 * RFS,
        color: colors.textLight,
        marginTop: 1.5 * RH
    }
});
