import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    darkButtonContent,
    darkButtonWrapper
} from "../../constants/buttonStyles";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    content: ViewStyle;
    title: TextStyle;
    buttonWrapper: ViewStyle;
    buttonWrapperActive: ViewStyle;
    buttonContent: TextStyle;
    buttonContentActive: TextStyle;
    warningWrapper: ViewStyle;
    warningContent: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: colors.backgroundDark,
        alignItems: "center",
        alignSelf: "center",
        paddingTop: 3 * RH
    },
    content: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        width: "100%",
        fontFamily: "SF UI Text",
        fontSize: 2.2 * RFS,
        color: colors.white,
        marginBottom: 2 * RH
    },
    buttonWrapper: {
        ...darkButtonWrapper
    },
    buttonWrapperActive: {
        ...darkButtonWrapper,
        backgroundColor: colors.activeButton
    },
    buttonContent: {
        ...darkButtonContent,
        color: colors.lightBlue
    },
    buttonContentActive: {
        ...darkButtonContent
    },
    warningWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        marginBottom: RH,
        marginTop: 1.5 * RH
    },
    warningContent: {
        color: colors.colorERRMassage,
        fontSize: 1.2 * RFS,
        marginLeft: 0.5 * RW
    }
});
