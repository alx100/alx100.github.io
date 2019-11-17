import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    background: ImageStyle;
    avatar: ViewStyle;
    container: ViewStyle;
    instructionWrapper: ViewStyle;
    instructionContext: TextStyle;
    instructionIcon: ViewStyle;
    saveBtnWrapper: ViewStyle;
    saveBtnContent: TextStyle;
    saveBtnWrapperActive: ViewStyle;
    saveBtnContentActive: TextStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    color: colors.textLight,
    fontSize: 1.2 * RFS
};

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundLight
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
        zIndex: 101
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 11 * RH,
        paddingHorizontal: 5 * RW,
        paddingBottom: 2 * RH
    },
    instructionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: RH,
        width: "100%"
    },
    instructionIcon: {
        height: 5 * RH,
        width: 7 * RW,
        marginRight: RW
    },
    instructionContext: {
        ...textMixin,
        width: "60%"
    },
    saveBtnWrapper: {
        ...lightButtonWrapper,
        borderWidth: 0.1 * RH,
        width: "100%",
        marginTop: 2 * RH
    },
    saveBtnContent: {
        ...lightButtonContent
    },
    saveBtnWrapperActive: {
        ...lightButtonWrapper,
        backgroundColor: colors.lightBlueCrossButton,
        width: "100%",
        marginTop: 2 * RH
    },
    saveBtnContentActive: {
        ...lightButtonContent,
        color: colors.white
    }
});
