import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    container: ViewStyle;
    radioBtnWrapper: ViewStyle;
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
    container: {
        flex: 1,
        borderBottomWidth: 0,
        paddingTop: 1.5 * RH,
        justifyContent: "flex-start"
    },
    radioBtnWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: colors.textLight,
        paddingVertical: 1.5 * RH,
        marginVertical: 0
    }
});
