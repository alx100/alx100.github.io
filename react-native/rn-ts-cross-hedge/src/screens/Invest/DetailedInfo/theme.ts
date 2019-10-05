import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RH, RW } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    title: TextStyle;
    detailedInfoRow: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "90%",
        paddingHorizontal: RW,
        paddingVertical: 0.5 * RH,
        marginVertical: RH,
        borderRadius: 50,
        borderWidth: 0.1 * RH,
        borderColor: "#878DAA",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    title: {
        fontFamily: "SF UI Text",
        color: "#878DAA",
        textAlign: "center"
    },
    detailedInfoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        width: "85%",
        marginVertical: 0.1 * RH
    }
});
