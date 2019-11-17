import { StyleSheet, ViewStyle } from "react-native";
import { RH, RW } from "../../../constants/window";

interface ComponentStyles {
    scrollView: ViewStyle;
    scrollViewContent: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    scrollView: {
        width: "100%"
    },
    scrollViewContent: {
        alignSelf: "flex-start",
        paddingBottom: 5 * RH,
        marginLeft: 1.5 * RW
    }
});
