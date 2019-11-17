import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFS, RH, RW } from "../../../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    name: TextStyle;
    value: TextStyle;
}

const TextMixin: TextStyle = {
    fontFamily: "SF UI Text",
    fontSize: 1.2 * RFS
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "85%",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 0.25 * RH
    },
    name: {
        ...TextMixin,
        width: "70%",
        textAlign: "left"
    },
    value: {
        ...TextMixin,
        width: "30%",
        textAlign: "right"
    }
});
