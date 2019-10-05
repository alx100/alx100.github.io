import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    positionLeftText: ViewStyle;
    text_dark: TextStyle;
    text_light: TextStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    fontSize: 1.4 * RFS,
    marginLeft: 0.5 * RW
};

export const theme = StyleSheet.create<ComponentStyles>({
    positionLeftText: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 2 * RW
    },

    text_dark: {
        ...textMixin,
        color: colors.activeTitleColor
    },

    text_light: {
        ...textMixin,
        color: colors.white
    }
});
