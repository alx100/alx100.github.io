import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    btnWrapper: ViewStyle;
    activeBtnWrapper: ViewStyle;
    activeRange: TextStyle;
    bluredRange: TextStyle;
}

const btnMixin: ViewStyle = {
    flex: 1,
    borderBottomWidth: 0.3 * RH,
    borderBottomColor: colors.lightGray,
    paddingBottom: 1.5 * RH
};

const textMixin: TextStyle = {
    fontSize: 1.4 * RFS,
    textAlign: "center",
    fontFamily: "SF UI Text"
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: RH
    },
    btnWrapper: {
        ...btnMixin
    },
    activeBtnWrapper: {
        ...btnMixin,
        borderBottomColor: colors.lightBlueCrossButton
    },
    activeRange: {
        ...textMixin,
        color: colors.textLight
    },
    bluredRange: {
        ...textMixin,
        color: colors.textLight,
        opacity: 0.6
    }
});
