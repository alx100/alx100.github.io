import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeAreaView: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    }
});
