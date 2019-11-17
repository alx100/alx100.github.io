import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    description: TextStyle;
    type: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: 15 * RH,
        height: 15 * RH,
        borderRadius: 100,
        borderWidth: 1.2 * RH,
        borderColor: "#CCCED9",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        marginBottom: 3 * RH
    },
    description: {
        color: colors.darkGray,
        textAlign: "center"
    },
    type: {
        textAlign: "center",
        fontFamily: "SF UI Text",
        fontSize: 2.6 * RFS,
        color: colors.activeButton,
        fontWeight: "bold"
    }
});
