import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../../constants/colors";
import { RFS, RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    title_wrapper: ViewStyle;
    title_content: TextStyle;
    contentWrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    title_wrapper: {
        borderBottomWidth: 0.2 * RH,
        paddingTop: 1.5 * RH
    },
    title_content: {
        fontFamily: "SF UI Text",
        color: colors.textLight,
        fontSize: 1.8 * RFS
    },
    contentWrapper: {
        paddingTop: 1.6 * RH,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
