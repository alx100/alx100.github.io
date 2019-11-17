import { StyleSheet, ViewStyle } from "react-native";
import { RH } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        paddingBottom: 2 * RH
    }
});
