import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    title: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    title: {
        fontFamily: "SF UI Text",
        color: colors.textLight,
        fontSize: 1.4 * RFS,
        textAlign: "center",
        marginBottom: RH
    }
});
