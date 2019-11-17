import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH } from "../../../constants/window";

interface ComponentStyles {
    thirdBlock: ViewStyle;
    thirdInnerBlocks: ViewStyle;
    innerBlocksTitle: TextStyle;
    innerBlocksAmount: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    thirdBlock: {
        borderBottomWidth: 0,
        paddingBottom: 0,
        paddingHorizontal: 0,
        backgroundColor: colors.backgroundLight,
        shadowColor: colors.activeTitleColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        flexDirection: "row",
        alignItems: "stretch",
        elevation: 2,
        zIndex: 1
    },
    thirdInnerBlocks: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: "#F3F3F3",
        paddingVertical: RH
    },
    innerBlocksTitle: {
        color: colors.textLight,
        fontFamily: "SF UI Text",
        fontSize: 1.2 * RFS
    },
    innerBlocksAmount: {
        color: colors.lightBlueCrossButton,
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS,
        marginTop: 0.5 * RH
    }
});
