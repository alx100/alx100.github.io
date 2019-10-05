import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { darkInput } from "../../../constants/inputStyles";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    title_top: TextStyle;
    title_bottom: TextStyle;
    input: TextStyle;
    passwordWrapper: ViewStyle;
    icon: ImageStyle;
    optionButtonWrapper: TextStyle;
    optionButtonContent: TextStyle;
    cancelButtonWrapper: TextStyle;
    detailedViewTitle: TextStyle;
    bottomButton: ViewStyle;
    image: ImageStyle;
    bottomBtnContent: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    title_top: {
        fontFamily: "SF UI Text",
        fontWeight: "bold",
        color: colors.white,
        fontSize: 2.2 * RFS
    },
    image: {
        height: 20 * RH,
        width: 20 * RH
    },
    title_bottom: {
        fontFamily: "SF UI Text",
        color: colors.white,
        fontSize: 1.6 * RFS,
        marginTop: RH,
        marginBottom: 2.3 * RH
    },
    input: {
        ...darkInput
    },
    passwordWrapper: {
        flexDirection: "row",
        position: "relative"
    },
    icon: {
        position: "absolute",
        right: "-14%",
        top: "18%"
    },
    optionButtonWrapper: {
        marginTop: 2 * RH
    },
    optionButtonContent: {
        textAlign: "center",
        color: colors.activeButton,
        fontSize: 1.6 * RFS
    },
    cancelButtonWrapper: {
        alignSelf: "flex-end",
        marginRight: -4 * RW,
        marginTop: RH,
        marginBottom: 4 * RH
    },
    detailedViewTitle: {
        color: colors.white,
        fontSize: 2.2 * RFS,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginBottom: 3 * RH
    },
    bottomButton: {
        marginTop: 2 * RH
    },
    bottomBtnContent: {
        height: 5 * RH,
        width: 5 * RH
    }
});
