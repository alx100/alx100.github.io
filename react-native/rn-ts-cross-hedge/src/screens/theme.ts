import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../constants/colors";
import { RFS, RH } from "../constants/window";

interface ComponentStyles {
    safeAreaView: ViewStyle;
    navBarStyle: ViewStyle;
    textHeader: TextStyle;
    lightNavBarStyle: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundDark
    },

    navBarStyle: {
        borderBottomWidth: 0,
        elevation: 0,
        borderBottomColor: colors.backgroundDark,
        backgroundColor: colors.backgroundDark
    },

    lightNavBarStyle: {
        borderBottomWidth: 0,
        shadowColor: colors.activeTitleColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 7
    },

    textHeader: {
        flex: 1,
        textAlign: "center",
        fontFamily: "SF UI Text",
        fontWeight: "normal",
        color: colors.activeTitleColor,
        fontSize: 1.8 * RFS,
        marginBottom: 0.7 * RH,
        position: "absolute",
        width: "100%",
        zIndex: -1
    }
});
