import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH } from "../../../constants/window";

interface ComponentStyles {
    btnWrapper: ViewStyle;
    btnContent: TextStyle;
    confirmedMsg: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    btnWrapper: {
        width: "100%",
        marginTop: RH,
        borderRadius: 5,
        paddingVertical: 0.5 * RH,
        backgroundColor: "rgba(79,228,236,0.3)"
    },
    btnContent: {
        textAlign: "center",
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS
    },
    confirmedMsg: {
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS
    }
});
