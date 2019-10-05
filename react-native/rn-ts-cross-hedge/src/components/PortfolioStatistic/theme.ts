import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    textContainer: ViewStyle;
    text: TextStyle;
    img: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    img: {
        height: 2.5 * RH,
        width: 2.5 * RH,
        marginRight: 0.5 * RW
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "SF UI Text",
        color: colors.textLight,
        fontSize: 1.2 * RFS,
        fontWeight: "normal"
    }
});
