import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    btnWrapper: ViewStyle;
    leftBtnWrapper: ViewStyle;
    leftBtnContent: TextStyle;
    rightBtnWrapper: ViewStyle;
    rightBtnContent: TextStyle;
    textWrapper: ViewStyle;
    text: TextStyle;
    phone: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        paddingTop: 2.5 * RH,
        paddingHorizontal: 5 * RW
    },
    textWrapper: {
        paddingTop: 4 * RH,
        paddingBottom: 0.5 * RH
    },
    text: {
        fontFamily: "SF UI Text",
        textAlign: "left",
        fontSize: 1.6 * RFS,
        color: colors.globalCircle,
        alignSelf: "flex-start"
    },
    phone: {
        fontFamily: "SF UI Text",
        textAlign: "left",
        fontWeight: "600",
        fontSize: 2.2 * RFS,
        color: colors.lightBlueCrossButton,
        alignSelf: "flex-start"
    },
    btnWrapper: {
        width: "100%",
        marginTop: 3 * RH,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftBtnWrapper: {
        ...lightButtonWrapper,
        width: "43%",
        backgroundColor: colors.lightBlueCrossButton
    },
    leftBtnContent: {
        ...lightButtonContent,
        color: colors.white
    },
    rightBtnWrapper: {
        ...lightButtonWrapper,
        width: "43%",
        borderColor: colors.lightBlueCrossButton,
        borderWidth: 1
    },
    rightBtnContent: {
        ...lightButtonContent,
        color: colors.lightBlueCrossButton
    }
});
