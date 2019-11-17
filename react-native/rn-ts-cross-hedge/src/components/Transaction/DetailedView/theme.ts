import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    wrapper: ViewStyle;
    titleWrapper: ViewStyle;
    title: TextStyle;
    btn: ViewStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        width: "100%",
        alignSelf: "center",
        paddingHorizontal: RW
    },
    titleWrapper: {
        width: "100%",
        borderBottomColor: colors.activeButton,
        borderBottomWidth: 0.1 * RH,
        paddingVertical: RH,
        marginBottom: RH,
        position: "relative"
    },
    title: {
        fontSize: 1.8 * RFS,
        alignSelf: "center"
    },
    btn: {
        position: "absolute",
        right: 0,
        top: 1.1 * RH
    }
});
