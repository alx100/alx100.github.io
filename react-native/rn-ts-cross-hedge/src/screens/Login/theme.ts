import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    steps: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundDark,
        alignItems: "center",
        paddingTop: 2 * RH
    },
    steps: {
        flex: 1,
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center"
    }
});
