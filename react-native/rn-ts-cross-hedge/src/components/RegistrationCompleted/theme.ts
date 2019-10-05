import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    text: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: "80%"
    },
    text: {
        width: "100%",
        color: colors.white,
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS,
        marginVertical: RH
    }
});
