import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    titleWrapper: ViewStyle;
    newsTitle: TextStyle;
    crossIcon: ImageStyle;
    newsDescription: TextStyle;
    link: TextStyle;
    image: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        backgroundColor: colors.white,
        height: 12 * RH,
        padding: 0,
        borderBottomWidth: 0.3 * RH
    },

    titleWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center"
    },

    newsTitle: {
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS,
        color: colors.globalCircle,
        padding: RH
    },

    crossIcon: {
        marginRight: RW
    },

    newsDescription: {
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS,
        color: colors.activeTitleColor,
        paddingLeft: RW,
        paddingRight: RW
    },

    link: {
        fontFamily: "SF UI Text",
        fontSize: 1.2 * RFS,
        color: colors.readNewsText,
        paddingLeft: RW,
        marginVertical: 0.5 * RH,
        textDecorationLine: "underline"
    },

    image: {
        width: "100%",
        height: "100%"
    }
});
