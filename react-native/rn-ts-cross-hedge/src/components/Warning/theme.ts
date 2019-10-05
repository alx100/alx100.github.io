import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
    darkButtonContent,
    darkButtonWrapper
} from "../../constants/buttonStyles";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    warningWrapper: ViewStyle;
    warningContent: TextStyle;
    icon: ImageStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    warningWrapper: {
        flexDirection: "row",
        width: "100%",
        marginBottom: RH,
        marginTop: 1.5 * RH
    },
    warningContent: {
        flex: 1,
        fontFamily: "SF UI Text",
        color: colors.colorERRMassage,
        fontSize: 1.2 * RFS,
        marginLeft: 0.5 * RW
    },
    icon: {
        height: 1.5 * RH,
        width: 1.5 * RH
    }
});
