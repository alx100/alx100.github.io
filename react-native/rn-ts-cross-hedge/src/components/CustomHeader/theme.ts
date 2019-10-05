import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH } from "../../constants/window";

interface ComponentStyles {
    darkContainer: ViewStyle;
    lightContainer: ViewStyle;
    title: TextStyle;
}

const containerMixin: ViewStyle = {
    minHeight: Platform.OS === "android" ? 56 : 43,
    paddingVertical: RH,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
    zIndex: 1
};

export const theme = StyleSheet.create<ComponentStyles>({
    darkContainer: {
        ...containerMixin,
        backgroundColor: colors.backgroundLight,
        shadowColor: colors.activeTitleColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2
    },
    lightContainer: {
        ...containerMixin,
        backgroundColor: colors.backgroundDark
    },
    title: {
        width: "100%",
        fontFamily: "SF UI Text",
        fontSize: 1.8 * RFS,
        color: colors.activeTitleColor,
        textAlign: "center",
        position: "absolute",
        zIndex: -1
    }
});
