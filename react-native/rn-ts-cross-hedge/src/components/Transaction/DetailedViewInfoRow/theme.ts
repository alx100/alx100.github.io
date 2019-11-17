import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    divider: ViewStyle;
    name: TextStyle;
    value: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "baseline",
        marginBottom: RH
    },
    divider: {
        height: 0.1 * RH,
        flexShrink: 1,
        flexGrow: 1,
        backgroundColor: colors.lightGray,
        marginHorizontal: RW
    },
    name: {
        color: colors.darkGray,
        fontSize: RFS
    },
    value: {
        color: colors.darkGray,
        fontSize: 1.3 * RFS
    }
});
