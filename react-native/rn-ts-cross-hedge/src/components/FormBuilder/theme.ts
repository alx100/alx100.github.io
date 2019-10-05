import { StyleSheet, ViewStyle } from "react-native";

interface ComponentStyles {
    formWrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    formWrapper: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center"
    }
});
