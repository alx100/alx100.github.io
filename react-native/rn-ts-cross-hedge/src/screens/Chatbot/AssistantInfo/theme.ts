import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    avatarOuterWrapper: ViewStyle;
    avatarInnerWrapper: ViewStyle;
    avatar: ImageStyle;
    name: TextStyle;
    description: TextStyle;
    closeIcon: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        marginVertical: 2 * RH,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        position: "relative"
    },
    avatarOuterWrapper: {
        padding: 0.3 * RW,
        borderWidth: 0.2 * RW,
        borderRadius: 100,
        borderColor: colors.darkGray
    },
    avatarInnerWrapper: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 8 * RH,
        height: 8 * RH,
        borderWidth: 0.7 * RW,
        borderColor: colors.darkGray,
        borderRadius: 100
    },
    avatar: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        resizeMode: "contain"
    },
    name: {
        fontFamily: "SF UI Text",
        fontWeight: "bold",
        fontSize: 1.6 * RFS,
        marginVertical: 0.8 * RH
    },
    description: {
        fontFamily: "SF UI Text",
        color: colors.darkGray
    },
    closeIcon: {
        position: "absolute",
        right: 2 * RW,
        top: RH
    }
});
