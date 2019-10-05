import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    buttonWrapper: ViewStyle;
    btnContent: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: "100%",
        marginBottom: 0.5 * RH
    },
    buttonWrapper: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingRight: RW
    },
    btnContent: {
        fontSize: 1.2 * RFS,
        color: colors.textLight
    }
});
