import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../../../constants/colors";

interface ComponentStyles {
    safeArea: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundDark
    }
});
