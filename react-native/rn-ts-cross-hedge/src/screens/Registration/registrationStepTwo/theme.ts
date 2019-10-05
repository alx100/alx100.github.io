import { StyleSheet, ViewStyle } from "react-native";
import { RH } from "../../../constants/window";

interface ComponentStyles {
    content: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    content: {
        width: "100%",
        marginTop: 3 * RH,
        marginBottom: 4 * RH
    }
});
