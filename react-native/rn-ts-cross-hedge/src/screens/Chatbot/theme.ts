import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";

interface ComponentStyles {
    safeAreaView: ViewStyle;
    wrapper: ViewStyle;
    border: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#1B2345"
    },
    wrapper: {
        flex: 1,
        backgroundColor: colors.white
    },
    border: {
        height: 2 * RH,
        width: "100%",
        backgroundColor: "#1B2345"
    }
});
