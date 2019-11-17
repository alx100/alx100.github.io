import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";

interface ComponentStyles {
    container: ViewStyle;
    steps: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundDark,
        alignItems: "center"
    },
    steps: {
        flex: 11,
        width: "80%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center"
    }
});
