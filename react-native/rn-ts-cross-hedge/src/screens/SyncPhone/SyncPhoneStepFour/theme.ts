import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    buttonWrapper: ViewStyle;
    buttonContent: TextStyle;
    title: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        paddingTop: 2.5 * RH,
        paddingHorizontal: 5 * RW
    },
    title: {
        fontFamily: "SF UI Text",
        textAlign: "left",
        fontSize: 1.2 * RFS,
        color: colors.globalCircle,
        alignSelf: "flex-start"
    },
    buttonWrapper: {
        ...lightButtonWrapper,
        backgroundColor: colors.lightBlueCrossButton,
        marginTop: 1.5 * RH
    },
    buttonContent: {
        ...lightButtonContent,
        color: colors.white
    }
});
