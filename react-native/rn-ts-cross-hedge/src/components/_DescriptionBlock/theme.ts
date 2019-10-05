import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    descriptionWrapper: ViewStyle;
    titleWrapper: ViewStyle;
    icon: ImageStyle;
    descriptionTitle: TextStyle;
    descriptionText: TextStyle;
}

const textMixin: TextStyle = {
    fontFamily: "SF UI Text",
    color: colors.textLight
};

export const theme = StyleSheet.create<ComponentStyles>({
    descriptionWrapper: {
        paddingVertical: 1.5 * RH,
        borderBottomWidth: 0.1 * RH,
        borderBottomColor: colors.textLight
    },
    titleWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        marginBottom: RH
    },
    icon: {
        height: 1.5 * RH,
        width: 1.5 * RH,
        marginLeft: RW
    },
    descriptionTitle: {
        ...textMixin,
        fontSize: 1.6 * RFS
    },
    descriptionText: {
        ...textMixin,
        fontSize: 1.4 * RFS,
        fontWeight: "300"
    }
});
