import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    balanceBlock: ViewStyle;
    graphicBlock: ViewStyle;
    detailsWrapper: ViewStyle;
    absoluteWrapper: ViewStyle;
    text: TextStyle;
    downloadBtnWrapper: ViewStyle;
    downloadBtnContent: TextStyle;
    downloadIcon: ImageStyle;
    scroll: ViewStyle;
    amountRangeBlock: ViewStyle;
    investBtnBlock: ViewStyle;
    investBtnWrapper: ViewStyle;
    investBtnContent: TextStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    color: colors.textLight,
    fontSize: 1.4 * RFS
};

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    },
    balanceBlock: {
        borderBottomWidth: 0,
        backgroundColor: colors.lightGray,
        paddingTop: 2 * RH,
        paddingBottom: 3 * RH,
        alignItems: "center"
    },
    absoluteWrapper: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    scroll: {
        flex: 1
    },
    graphicBlock: {
        flex: 1,
        paddingTop: 2.5 * RH,
        paddingHorizontal: 2 * RW,
        zIndex: -1
    },
    detailsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 1 * RH
    },
    text: {
        ...textMixin,
        fontSize: 1.2 * RFS
    },
    downloadBtnWrapper: {
        height: 2.5 * RH,
        width: 12 * RW,
        borderRadius: 1.3 * RH,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightBlueCrossButton
    },
    downloadBtnContent: {
        ...textMixin,
        color: colors.white,
        fontSize: 1.2 * RFS
    },
    downloadIcon: {
        marginRight: 0.5 * RW
    },
    amountRangeBlock: {
        flexDirection: "row",
        alignItems: "center",
        padding: 0
    },
    investBtnBlock: {
        borderBottomWidth: 0,
        paddingTop: 1.5 * RH,
        paddingBottom: 1.5 * RH,
        paddingHorizontal: 6 * RW
    },
    investBtnWrapper: {
        ...lightButtonWrapper,
        backgroundColor: colors.lightBlueCrossButton
    },
    investBtnContent: {
        ...lightButtonContent,
        color: colors.white
    }
});
