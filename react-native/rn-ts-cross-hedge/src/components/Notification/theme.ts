import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    msg: TextStyle;
    titleMsg: TextStyle;
    title: ViewStyle;
    titleWrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "90%",
        alignSelf: "center",
        position: "absolute",
        minHeight: 5 * RH,
        backgroundColor: colors.white,
        top: 4 * RH,
        borderRadius: 8,
        justifyContent: "flex-start",
        shadowColor: colors.black,
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0.5 * RH }
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: colors.inputBackgroundDark,
        padding: RH
    },
    titleWrapper: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center"
    },
    titleMsg: {
        fontFamily: "SF UI Text",
        color: colors.white,
        fontSize: 1.6 * RFS,
        marginLeft: RW
    },
    msg: {
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS,
        padding: RH
    }
});
