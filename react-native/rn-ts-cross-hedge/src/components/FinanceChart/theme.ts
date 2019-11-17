import { StyleSheet, ViewStyle } from "react-native";
import { RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    YAxis: ViewStyle;
    chart: ViewStyle;
    bottomWrapper: ViewStyle;
    divider: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        height: 14 * RH,
        flexDirection: "row",
        marginTop: RH
    },
    YAxis: {
        marginRight: RW
    },
    chart: {
        height: 14 * RH,
        flex: 1
    },
    bottomWrapper: {
        marginHorizontal: RW,
        marginVertical: RH
    },
    divider: {
        width: "100%",
        height: 0.1 * RH,
        backgroundColor: "#A5AABF",
        marginBottom: RH
    }
});
