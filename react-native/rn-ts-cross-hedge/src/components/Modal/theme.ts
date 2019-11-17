import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, WINDOW } from "../../constants/window";

interface ComponentStyles {
    modalBackground: ViewStyle;
    defaultModal: ViewStyle;
    customModal: ViewStyle;
    positionCross: ViewStyle;
    title: TextStyle;
    content: TextStyle;
}

const ModalMixin: ViewStyle = {
    borderRadius: 8,
    margin: WINDOW.width * 0.05,
    backgroundColor: colors.white,
    top: WINDOW.height * 0.15,
    width: WINDOW.width * 0.9,
    position: "absolute",
    shadowOpacity: 0.5,
    shadowColor: colors.black,
    shadowRadius: 8,
    shadowOffset: { height: 4, width: 0 }
};

export const theme = StyleSheet.create<ComponentStyles>({
    modalBackground: {
        backgroundColor: colors.activeTitleColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.4,
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    defaultModal: {
        ...ModalMixin,
        height: WINDOW.height * 0.5,
        padding: 20
    },

    customModal: {
        ...ModalMixin
    },

    positionCross: {
        position: "absolute",
        top: WINDOW.height * 0.13,
        right: WINDOW.width * 0.05
    },

    title: {
        color: colors.backgroundDark,
        fontFamily: "SF UI Text",
        fontWeight: "bold",
        fontSize: 2.2 * RFS
    },

    content: {
        color: colors.backgroundDark,
        marginTop: 3 * RH,
        fontFamily: "SF UI Text",
        fontSize: 1.6 * RFS
    }
});
