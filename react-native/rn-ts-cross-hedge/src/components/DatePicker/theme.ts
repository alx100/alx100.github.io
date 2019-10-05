import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    activeRange: TextStyle;
    bluredRange: TextStyle;
}

const RangeMixin: TextStyle = {
    fontSize: 1.4 * RFS,
    textAlign: "center",
    fontFamily: "SF UI Text"
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: 2 * RH,
        paddingBottom: 2 * RH
    },
    activeRange: {
        ...RangeMixin,
        color: colors.textLight
    },
    bluredRange: {
        ...RangeMixin,
        color: colors.textLight,
        opacity: 0.6
    }
});
