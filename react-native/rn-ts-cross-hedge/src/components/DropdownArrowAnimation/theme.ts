import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    arrowWrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    arrowWrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 0.5 * RW,
        height: 1.4 * RH
    }
});
