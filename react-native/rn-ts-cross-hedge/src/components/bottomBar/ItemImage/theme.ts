import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH } from "../../../constants/window";

interface ComponentStyles {
    flexColumn: ViewStyle;
    text: TextStyle;
    icon: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    text: {
        fontFamily: "SF UI Text",
        fontWeight: "bold",
        fontSize: 1.4 * RFS,
        color: colors.white,
        marginTop: RH
    },

    flexColumn: {
        width: 8.5 * RH,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-start"
    },
    icon: {
        width: 5 * RH,
        height: 5 * RH,
        borderRadius: 2.5 * RH,
        backgroundColor: colors.lightBlue,
        justifyContent: "center",
        alignItems: "center"
    }
});
