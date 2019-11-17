import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";

interface ComponentStyles {
    safeAreaView: ViewStyle;
    chartWrapper: ViewStyle;
    mainBalanceBlock: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    },
    chartWrapper: {
        marginBottom: 2 * RH
    },
    mainBalanceBlock: {
        paddingBottom: 3 * RH,
        borderBottomWidth: 0
    }
});
