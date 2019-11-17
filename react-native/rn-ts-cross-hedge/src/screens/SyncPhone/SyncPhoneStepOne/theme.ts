import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    textWrapper: ViewStyle;
    text: TextStyle;
    buttonWrapper: ViewStyle;
    buttonContent: TextStyle;
    container: ViewStyle;
    image: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        paddingTop: 4 * RH,
        paddingHorizontal: 5 * RW
    },
    textWrapper: {
        marginVertical: 3 * RH
    },
    text: {
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS,
        textAlign: "center",
        color: colors.globalCircle
    },
    buttonWrapper: {
        ...lightButtonWrapper,
        marginTop: 2 * RH,
        backgroundColor: colors.lightBlueCrossButton
    },
    buttonContent: {
        ...lightButtonContent,
        color: colors.white
    },
    image: {
        width: 24 * RH,
        height: 24 * RH
    }
});
