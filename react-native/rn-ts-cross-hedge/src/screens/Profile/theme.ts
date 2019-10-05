import { StyleSheet, ViewStyle } from "react-native";
import { RW } from "../../constants/window";

interface ComponentStyles {
    infoBlock: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    infoBlock: {
        paddingHorizontal: 2 * RW
    }
});
