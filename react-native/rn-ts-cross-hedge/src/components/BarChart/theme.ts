import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    barWrapper: ViewStyle;
    description: TextStyle;
    barFill: ViewStyle;
    barPercentage: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignContent: "center",
        alignItems: "center",
        paddingTop: RH
    },
    barWrapper: {
        width: 0.7 * RW,
        height: 7 * RH,
        backgroundColor: "#F1F2F5",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignContent: "center",
        alignItems: "center",
        position: "relative"
    },
    barFill: {
        backgroundColor: colors.activeButton,
        position: "relative",
        width: "100%"
    },
    barPercentage: {
        fontFamily: "SF UI Text",
        fontSize: 1.3 * RFS,
        color: colors.textLight,
        width: 5 * RW,
        alignSelf: "center",
        textAlign: "center",
        top: -1.5 * RH
    },
    description: {
        color: colors.textLight,
        fontFamily: "SF UI Text",
        fontSize: 1.2 * RFS,
        marginTop: RH
    }
});
