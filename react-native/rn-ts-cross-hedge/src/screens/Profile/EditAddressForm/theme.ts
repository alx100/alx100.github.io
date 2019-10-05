import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    lightButtonContent,
    lightButtonWrapper
} from "../../../constants/buttonStyles";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    container: ViewStyle;
    btnWrapper: ViewStyle;
    btnContent: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    },
    container: {
        flex: 1,
        borderBottomWidth: 0,
        paddingTop: 3 * RH,
        paddingHorizontal: 6 * RW
    },
    btnWrapper: {
        ...lightButtonWrapper,
        borderWidth: 0.1 * RH,
        marginTop: 3 * RH
    },
    btnContent: {
        ...lightButtonContent,
        color: colors.lightBlueCrossButton
    }
});
