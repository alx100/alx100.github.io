import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    safeArea: ViewStyle;
    personalInfoBlock: ViewStyle;
    addressInfoBlock: ViewStyle;
    title: TextStyle;
    image: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    },
    personalInfoBlock: {
        paddingTop: 2 * RH,
        justifyContent: "flex-start"
    },
    addressInfoBlock: {
        paddingTop: 1.5 * RH,
        borderBottomWidth: 0,
        justifyContent: "flex-start"
    },
    title: {
        color: colors.activeTitleColor,
        fontWeight: "bold"
    },
    image: {
        position: "absolute",
        height: "100%",
        left: "50%",
        top: 2 * RH,
        resizeMode: "contain",
        zIndex: -1
    }
});
