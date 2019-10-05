import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    firstBlock: ViewStyle;
    amount: ViewStyle;
    secondBlock: ViewStyle;
    secondText: TextStyle;
    secondBtn: ViewStyle;
    secondBtnContent: TextStyle;
    arrowIcon: ImageStyle;
    lastBlock: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    },
    firstBlock: {
        paddingHorizontal: 2.5 * RW,
        paddingTop: 2 * RH,
        paddingBottom: 2 * RH,
        borderBottomWidth: 0,
        shadowColor: colors.activeTitleColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        backgroundColor: colors.backgroundLight
    },
    amount: {
        alignSelf: "flex-end"
    },
    secondBlock: {
        backgroundColor: colors.lightGray,
        borderBottomWidth: 0,
        paddingHorizontal: 4 * RW,
        paddingBottom: 2 * RH,
        paddingTop: RH
    },
    secondText: {
        color: colors.darkGray,
        fontFamily: "SF UI Text",
        fontSize: 1.2 * RFS,
        alignSelf: "flex-end"
    },
    secondBtn: {
        marginTop: 1.5 * RH,
        alignSelf: "flex-end",
        flexDirection: "row",
        alignItems: "center"
    },
    secondBtnContent: {
        color: colors.darkGray,
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS
    },
    arrowIcon: {
        marginLeft: 0.5 * RW,
        width: 1 * RH,
        height: 1 * RH,
        justifyContent: "center",
        alignItems: "center"
    },
    lastBlock: {
        borderBottomWidth: 0,
        paddingHorizontal: 2 * RW,
        paddingBottom: 3 * RH,
        paddingTop: RH
    }
});
