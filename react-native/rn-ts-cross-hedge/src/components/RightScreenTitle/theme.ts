import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    btnWrapper: ViewStyle;
    text_light: TextStyle;
    text_dark: TextStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    fontSize: 1.4 * RFS
};

export const theme = StyleSheet.create<ComponentStyles>({
    btnWrapper: {
        marginRight: 2 * RW
    },
    text_light: {
        ...textMixin,
        color: colors.white
    },
    text_dark: {
        ...textMixin,
        color: colors.activeTitleColor
    }
});
