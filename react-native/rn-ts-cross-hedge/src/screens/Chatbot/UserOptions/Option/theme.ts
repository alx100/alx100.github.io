import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../../constants/colors";
import { RFS, RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    value: TextStyle;
    checkboxOuter: ViewStyle;
    checkboxInner: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 0.25 * RH
    },
    value: {
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS,
        textAlign: "left",
        marginRight: 0.5 * RW,
        maxWidth: "80%"
    },
    checkboxOuter: {
        marginLeft: 0.5 * RW,
        width: 1.6 * RH,
        height: 1.6 * RH,
        borderWidth: 0.3 * RW,
        borderColor: colors.darkGray,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    checkboxInner: {
        height: 0.8 * RH,
        width: 0.8 * RH,
        borderRadius: 50,
        backgroundColor: colors.darkGray
    }
});
