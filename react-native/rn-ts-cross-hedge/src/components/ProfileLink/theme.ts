import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    text: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-start",
        paddingBottom: 1.8 * RH,
        paddingTop: 1.8 * RH,
        borderBottomWidth: 1,
        borderBottomColor: colors.textLight
    },
    text: {
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS,
        color: colors.textLight
    }
});
