import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    containerFirst: ViewStyle;
    containerSecond: ViewStyle;
    containerThird: ViewStyle;
    globalCirclePassive: ViewStyle;
    globalCircleActive: ViewStyle;
    textContainerPassive: TextStyle;
    textContainerActive: TextStyle;
    centerCircle: ViewStyle;
}

const containerMixing: ViewStyle = {
    borderRadius: 3,
    backgroundColor: colors.inputBackgroundDark,
    width: "100%",
    height: 4 * RH,
    marginBottom: RH,
    padding: 0.8 * RH,
    flexDirection: "row",
    marginTop: RH,
    alignItems: "center"
};

const circleMixing: ViewStyle = {
    width: 2 * RH,
    height: 2 * RH,
    borderRadius: RH,
    borderWidth: 0.2 * RH,
    justifyContent: "center",
    alignItems: "center",
    padding: 0.3 * RH
};

export const theme = StyleSheet.create<ComponentStyles>({
    containerFirst: {
        ...containerMixing,
        marginTop: 2 * RH
    },

    containerSecond: {
        ...containerMixing
    },

    containerThird: {
        ...containerMixing,
        marginBottom: 2 * RH
    },

    globalCirclePassive: {
        ...circleMixing,
        borderColor: colors.globalCircle
    },

    textContainerPassive: {
        fontSize: 1.6 * RFS,
        fontFamily: "SF UI Text",
        color: colors.globalCircle,
        marginLeft: RW
    },

    globalCircleActive: {
        ...circleMixing,
        borderColor: colors.white
    },

    textContainerActive: {
        fontSize: 1.6 * RFS,
        color: colors.white,
        fontFamily: "SF UI Text",
        marginLeft: RW
    },

    centerCircle: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
        backgroundColor: colors.white
    }
});
