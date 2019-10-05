import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    statisticWrapper: ViewStyle;
    blockWrapper: ViewStyle;
}

const containerMixin: ViewStyle = {
    paddingVertical: 1.5 * RH,
    borderBottomWidth: 0.1 * RH,
    borderBottomColor: colors.textLight
};

export const theme = StyleSheet.create<ComponentStyles>({
    blockWrapper: {
        borderBottomWidth: 0,
        paddingRight: 1.5 * RW,
        paddingLeft: 1.5 * RW
    },
    statisticWrapper: {
        ...containerMixin,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
});
