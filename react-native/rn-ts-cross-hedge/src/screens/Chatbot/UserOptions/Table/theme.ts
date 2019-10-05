import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../../../constants/colors";
import { RH, RW } from "../../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#e0e1e4",
        borderRadius: 10,
        paddingVertical: 0.5 * RH,
        paddingHorizontal: RW
    }
});
