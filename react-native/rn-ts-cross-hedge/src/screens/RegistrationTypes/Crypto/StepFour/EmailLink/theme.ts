import { ImageStyle, StyleSheet, TextStyle } from "react-native";
import { colors } from "../../../../../constants/colors";
import { RFS, RH, RW } from "../../../../../constants/window";

interface ComponentStyles {
    titleTop: TextStyle;
    titleBottom: TextStyle;
    image: ImageStyle;
}

const TitleMixin: TextStyle = {
    fontFamily: "SF UI Text",
    marginBottom: 7 * RH,
    color: colors.white,
    textAlign: "center"
};

export const theme = StyleSheet.create<ComponentStyles>({
    titleTop: {
        ...TitleMixin,
        marginTop: RH,
        fontSize: 2.2 * RFS
    },
    titleBottom: {
        ...TitleMixin,
        fontSize: 1.6 * RFS
    },
    image: {
        height: 17 * RH,
        width: 17 * RH
    }
});
