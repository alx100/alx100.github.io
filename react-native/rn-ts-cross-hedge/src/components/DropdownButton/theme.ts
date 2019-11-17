import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    detailsBtnWrapper: ViewStyle;
    detailsBtnContent: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    detailsBtnWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    detailsBtnContent: {
        fontFamily: "SF UI Text",
        color: colors.textLight,
        fontSize: 1.4 * RFS
    }
});
