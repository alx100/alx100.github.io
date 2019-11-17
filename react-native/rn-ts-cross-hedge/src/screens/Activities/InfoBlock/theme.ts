import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    paragraph: TextStyle;
    btnWrapper: ViewStyle;
    btnContent: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        paddingTop: 5 * RH,
        width: "80%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    paragraph: {
        width: "100%",
        fontSize: 1.6 * RFS,
        fontFamily: "SF UI Text",
        color: "#878DAA",
        textAlign: "left",
        marginBottom: 1.5 * RH
    },
    btnContent: {
        ...lightButtonContent,
        color: colors.white,
        fontWeight: "200"
    },
    btnWrapper: {
        ...lightButtonWrapper,
        backgroundColor: colors.lightBlueCrossButton,
        marginTop: 4 * RH
    }
});
