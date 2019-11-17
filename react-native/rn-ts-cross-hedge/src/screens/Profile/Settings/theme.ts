import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    appSettingsBlock: ViewStyle;
    appSettingsTitle: TextStyle;
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
    appSettingsBlock: {
        borderBottomWidth: 0,
        paddingTop: 2 * RH
    },
    appSettingsTitle: {
        ...textMixin,
        color: colors.activeTitleColor,
        fontSize: 1.6 * RFS,
        fontWeight: "bold",
        marginBottom: 0.5 * RH
    }
});
