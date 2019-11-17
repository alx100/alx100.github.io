import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    investWrapper: ViewStyle;
    remainedWrapper: ViewStyle;
    description: ViewStyle;
    investIcon: ViewStyle;
    remainedIcon: ViewStyle;
    investTitle: TextStyle;
    remainedTitle: TextStyle;
}

const WrapperMixin: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 1.5 * RH,
    paddingBottom: 1.5 * RH
};

const IconMixin: ViewStyle = {
    width: 1.5 * RW,
    height: 0.5 * RH,
    borderRadius: 5 * RH,
    marginRight: 0.5 * RW
};

const TitleMixin: TextStyle = {
    fontSize: 1.6 * RFS,
    fontFamily: "SF UI Text",
    fontWeight: "normal"
};

export const theme = StyleSheet.create<ComponentStyles>({
    investWrapper: {
        ...WrapperMixin,
        borderBottomWidth: 1,
        borderBottomColor: "#A1A6BC"
    },
    remainedWrapper: {
        ...WrapperMixin,
        paddingBottom: RH
    },
    description: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    investIcon: {
        ...IconMixin,
        backgroundColor: "#9396B5"
    },
    remainedIcon: {
        ...IconMixin,
        backgroundColor: "#CCCED9"
    },
    investTitle: {
        ...TitleMixin,
        color: "#9396B5"
    },
    remainedTitle: {
        ...TitleMixin,
        color: "#CCCED9"
    }
});
