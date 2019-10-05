import { TextStyle, ViewStyle } from "react-native";
import { colors } from "./colors";
import { RFS, RH, RW } from "./window";

export const darkButtonWrapper: ViewStyle = {
    marginTop: 1.4 * RH,
    borderRadius: 60,
    borderColor: colors.lightBlue,
    borderWidth: 2,
    paddingTop: 0.8 * RH,
    paddingBottom: 0.8 * RH,
    width: "100%"
};

export const darkButtonContent: TextStyle = {
    textAlign: "center",
    fontFamily: "SF UI Text",
    fontWeight: "bold",
    fontSize: 1.6 * RFS
};

export const lightButtonWrapper: ViewStyle = {
    paddingVertical: 0.8 * RH,
    width: "100%",
    borderRadius: 3 * RH,
    borderColor: colors.lightBlueCrossButton
};

export const lightButtonContent: TextStyle = {
    textAlign: "center",
    fontFamily: "SF UI Text",
    fontWeight: "600",
    fontSize: 1.6 * RFS,
    color: colors.lightBlueCrossButton
};
