import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../../constants/colors";
import { RFS, RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    roundWrapper: ViewStyle;
    outerRound: ViewStyle;
    innerRound: ViewStyle;
    verticalLine: ViewStyle;
    contentWrapper: ViewStyle;
    title: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    roundWrapper: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    outerRound: {
        width: 2.5 * RH,
        height: 2.5 * RH,
        borderWidth: 2,
        borderColor: "#878DAA",
        borderRadius: 50 * RH,
        padding: 0.3 * RH,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    innerRound: {
        height: 1.5 * RH,
        width: 1.5 * RH,
        backgroundColor: colors.white,
        borderRadius: 50
    },
    verticalLine: {
        width: 0.2 * RW,
        height: 3.5 * RH,
        marginVertical: 0.8 * RH,
        backgroundColor: "#878DAA"
    },
    title: {
        color: colors.white,
        fontFamily: "SF UI Text",
        fontSize: 1.7 * RFS
    },
    contentWrapper: {
        marginLeft: RW,
        justifyContent: "flex-start",
        alignContent: "flex-start"
    }
});
