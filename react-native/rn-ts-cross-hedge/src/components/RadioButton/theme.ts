import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    radioIcon: ViewStyle;
    label: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        marginVertical: RH,
        flexDirection: "row",
        alignItems: "center"
    },
    radioIcon: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 0.5 * RW
    },
    label: {
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS,
        color: colors.textLight
    }
});
