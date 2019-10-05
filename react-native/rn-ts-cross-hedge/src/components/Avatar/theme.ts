import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    wrapperCommon: ViewStyle;
    wrapperLarge: ViewStyle;
    innerCircle: ViewStyle;
    innerCircleEmpty: ViewStyle;
    imageCommon: ImageStyle;
    imageLarge: ImageStyle;
    edit: ViewStyle;
}

const WrapperMixin: ViewStyle = {
    borderColor: "#707070",
    borderWidth: 0.1 * RH,
    borderRadius: 10 * RH,
    justifyContent: "center",
    alignItems: "center"
};

const InnerCircleMixin: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10 * RH,
    width: "100%",
    height: "100%",
    position: "relative"
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapperCommon: {
        ...WrapperMixin,
        height: 13 * RH,
        width: 13 * RH,
        padding: 0.2 * RH
    },
    wrapperLarge: {
        ...WrapperMixin,
        height: 20 * RW,
        width: 20 * RW,
        padding: 0.4 * RH
    },
    innerCircle: {
        ...InnerCircleMixin,
        backgroundColor: "#707070",
        overflow: "hidden",
        position: "relative"
    },
    innerCircleEmpty: {
        ...InnerCircleMixin,
        backgroundColor: colors.white,
        borderWidth: 0.5 * RH,
        borderColor: "#707070",
        overflow: "hidden",
        position: "relative"
    },
    imageCommon: {
        height: 11.4 * RH,
        width: 11.4 * RH
    },
    imageLarge: {
        height: 18 * RW,
        width: 18 * RW
    },
    edit: {
        position: "absolute",
        backgroundColor: colors.white,
        borderWidth: 0.2 * RH,
        borderColor: "#E7E8EE",
        padding: 0.5 * RH,
        borderRadius: 100,
        right: 0.3 * RH,
        bottom: 0.3 * RH,
        zIndex: 10
    }
});
