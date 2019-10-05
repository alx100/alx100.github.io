import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "100%",
        padding: 2 * RH,
        paddingTop: 0,
        justifyContent: "center",
        alignContent: "center",
        borderBottomWidth: 0.8 * RH,
        borderBottomColor: "#F1F2F5",
        backgroundColor: colors.backgroundLight
    }
});
