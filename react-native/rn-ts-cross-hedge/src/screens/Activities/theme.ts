import { StyleSheet, ViewStyle } from "react-native";
import { RH } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F1F2F5",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-start",
        width: "100%"
    }
});
