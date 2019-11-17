import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    balanceWrapper: ViewStyle;
    crossIcon: ImageStyle;
    text: TextStyle;
    date: TextStyle;
    amountWrapper: ViewStyle;
}

const TextMixin: TextStyle = {
    fontFamily: "SF UI Text",
    color: colors.youBalanceText,
    fontWeight: "normal"
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        paddingTop: 2.3 * RH,
        paddingBottom: RH,
        width: "100%",
        zIndex: 1,
        elevation: 10,
        shadowColor: "#1B2345",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 7
    },
    balanceWrapper: {
        marginLeft: 4 * RW,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center"
    },
    crossIcon: {
        height: 1.5 * RH,
        width: 1.5 * RH
    },

    amountWrapper: {
        marginLeft: RW
    },
    text: {
        ...TextMixin,
        fontSize: 1.6 * RFS
    },
    date: {
        ...TextMixin,
        fontSize: 1.3 * RFS,
        marginTop: 2 * RH
    }
});
