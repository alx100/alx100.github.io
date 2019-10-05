import { StyleSheet, TextStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    cancelButtonWrapper: TextStyle;
    restorePasswordTitle: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    cancelButtonWrapper: {
        alignSelf: "flex-end",
        marginRight: -2 * RW,
        marginTop: RH,
        marginBottom: 4 * RH
    },
    restorePasswordTitle: {
        color: colors.white,
        fontSize: 2.2 * RFS,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginBottom: 3 * RH
    }
});
