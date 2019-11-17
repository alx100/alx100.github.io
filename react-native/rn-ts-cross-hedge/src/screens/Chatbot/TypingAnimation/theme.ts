import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { RH, RW } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    animationWrapper: ViewStyle;
    avatar: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        flexDirection: "row",
        marginHorizontal: RW,
        marginVertical: 0.5 * RH
    },
    animationWrapper: {
        backgroundColor: "rgba(79,228,236,0.15)",
        width: 6 * RW,
        height: 2.6 * RH,
        borderRadius: 10,
        marginHorizontal: RW
    },
    avatar: {
        width: 2.6 * RH,
        height: 2.6 * RH
    }
});
