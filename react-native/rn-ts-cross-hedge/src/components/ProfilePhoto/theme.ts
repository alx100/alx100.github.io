import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    background: ViewStyle;
    avatar: ViewStyle;
    name: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "column",
        alignItems: "center"
    },
    background: {
        width: "100%",
        height: 11 * RH,
        alignContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: colors.lightGray
    },
    avatar: {
        position: "absolute",
        top: 1.5 * RH,
        zIndex: 10
    },
    name: {
        marginTop: 5 * RH,
        marginBottom: 2 * RH,
        fontSize: 2 * RFS,
        fontFamily: "SF UI Text",
        fontWeight: "bold"
    }
});
