import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    chart: ViewStyle;
    divider: ViewStyle;
    XAxis: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        height: 180,
        flexDirection: "row",
        width: "100%"
    },
    chart: {
        flex: 1,
        marginLeft: RW,
        marginRight: 0.5 * RW
    },
    divider: {
        width: "100%",
        height: 0.1 * RH,
        backgroundColor: "#A5AABF",
        marginTop: RH
    },
    XAxis: {
        height: 30,
        marginLeft: 30,
        marginRight: 3,
        marginTop: RH
    }
});
