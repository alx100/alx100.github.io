import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    container: ViewStyle;
    headBlock: ViewStyle;
    headText: TextStyle;
    btnWrapper: ViewStyle;
    btnContent: TextStyle;
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
    headBlock: {
        backgroundColor: colors.lightGray,
        borderBottomWidth: 0,
        paddingTop: 2.5 * RH,
        paddingBottom: 2.5 * RH,
        paddingHorizontal: 2 * RW
    },
    headText: {
        ...textMixin,
        color: colors.globalCircle,
        textAlign: "center"
    },
    container: {
        flex: 1,
        borderBottomWidth: 0,
        paddingTop: 5 * RH,
        justifyContent: "flex-start",
        paddingHorizontal: 6 * RW
    },
    btnWrapper: {
        ...lightButtonWrapper,
        borderWidth: 0.1 * RH,
        marginTop: 4 * RH
    },
    btnContent: {
        ...lightButtonContent,
        color: colors.lightBlueCrossButton
    }
});
