import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    headBlock: ViewStyle;
    headText: TextStyle;
    mainBlock: ViewStyle;
    dropdownBlockWrapper: ViewStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    color: colors.textLight,
    fontSize: 1.4 * RFS
};

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    },
    headBlock: {
        backgroundColor: colors.lightGray,
        borderBottomWidth: 0,
        paddingTop: 3 * RH,
        paddingBottom: 4 * RH
    },
    headText: {
        ...textMixin,
        textAlign: "center",
        color: colors.globalCircle
    },
    mainBlock: {
        flex: 1,
        borderBottomWidth: 0,
        justifyContent: "flex-start",
        padding: 2 * RH,
        paddingTop: RH
    },
    dropdownBlockWrapper: {
        borderBottomWidth: 0.1 * RH,
        borderBottomColor: colors.textLight
    }
});
