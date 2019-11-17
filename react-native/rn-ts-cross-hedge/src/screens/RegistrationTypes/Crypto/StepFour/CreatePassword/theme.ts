import { StyleSheet, TextStyle } from "react-native";
import { colors } from "../../../../../constants/colors";
import { RFS, RH } from "../../../../../constants/window";

interface ComponentStyles {
    title: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    title: {
        marginBottom: RH,
        fontSize: 1.6 * RFS,
        fontFamily: "SF UI Text",
        alignSelf: "flex-start",
        color: colors.white
    }
});
