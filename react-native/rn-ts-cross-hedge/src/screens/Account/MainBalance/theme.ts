import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../../constants/colors";
import { RFS, RH, RW } from "../../../constants/window";

interface ComponentStyles {
    activeWrapper: ViewStyle;
    disabledWrapper: ViewStyle;
    innerWrapper: ViewStyle;
    text: TextStyle;
}

const WrapperMixin: ViewStyle = {
    marginTop: 2 * RH,
    alignSelf: "center",
    width: "70%",
    height: 4.5 * RH,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10 * RH,
    padding: 0.5 * RH
};

export const theme = StyleSheet.create<ComponentStyles>({
    activeWrapper: {
        ...WrapperMixin,
        backgroundColor: colors.activeButton
    },
    disabledWrapper: {
        ...WrapperMixin,
        backgroundColor: "#878DAA"
    },
    innerWrapper: {
        ...WrapperMixin,
        marginTop: 0,
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderColor: colors.white,
        padding: 0,
        paddingRight: RW,
        paddingLeft: RW,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    text: {
        color: colors.white,
        fontSize: 1.6 * RFS,
        fontWeight: "normal"
    }
});
