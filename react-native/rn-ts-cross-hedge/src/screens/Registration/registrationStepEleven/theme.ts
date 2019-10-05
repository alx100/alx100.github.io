import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    text: TextStyle;
    textWrapper: ViewStyle;
    imageWrapper: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    imageWrapper: {
        marginVertical: 2 * RH,
        width: "100%",
        borderRadius: 6,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: colors.white,
        borderStyle: "dashed"
    },

    text: {
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS,
        color: colors.white
    },

    textWrapper: {
        alignSelf: "flex-start",
        marginBottom: 2 * RH
    }
});
