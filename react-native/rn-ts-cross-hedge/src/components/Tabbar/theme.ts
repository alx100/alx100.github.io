import { StyleSheet, ViewStyle } from "react-native";
import { RFS, RH, RW } from "../../constants/window";

interface ComponentStyles {
    tabBar: ViewStyle;
    iconView: ViewStyle;
    tabButton: ViewStyle;
}

export const styles = StyleSheet.create<ComponentStyles>({
    tabBar: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 5.7 * RH,
        opacity: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
        zIndex: 300
    },
    iconView: {
        flex: 1,
        height: 5 * RH,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch"
    },
    tabButton: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 5 * RH
    }
});
