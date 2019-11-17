import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    integer: TextStyle;
    fractional: TextStyle;
}

const ValueMixin: TextStyle = {
    fontFamily: "SF UI Text",
    fontWeight: "bold",
    color: colors.lightBlueCrossButton
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    integer: {
        ...ValueMixin,
        fontSize: 2.8 * RFS
    },
    fractional: {
        ...ValueMixin,
        fontSize: 2 * RFS
    }
});
