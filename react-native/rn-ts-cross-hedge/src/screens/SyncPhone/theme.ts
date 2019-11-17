import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    container: ViewStyle;
    headBlock: ViewStyle;
    headText: TextStyle;
}

export const theme = StyleSheet.create<ComponentStyles>({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundLight
    },
    headBlock: {
        backgroundColor: colors.lightGray,
        borderBottomWidth: 0,
        paddingTop: 2 * RH,
        paddingBottom: 2 * RH
    },
    headText: {
        fontFamily: "SF UI Text",
        fontSize: 1.4 * RFS,
        textAlign: "center",
        color: colors.globalCircle
    }
});
