import { TextStyle } from "react-native";
import { colors } from "./colors";
import { RFS, RH, RW } from "./window";

export const darkInput: TextStyle = {
    borderRadius: 3,
    backgroundColor: colors.inputBackgroundDark,
    color: colors.white,
    width: "100%",
    height: 4 * RH,
    marginBottom: RH,
    fontSize: 1.6 * RFS,
    padding: 0.8 * RH
};

export const lightInput: TextStyle = {
    borderRadius: 3,
    backgroundColor: colors.lightGray,
    color: colors.globalCircle,
    width: "100%",
    height: 4 * RH,
    marginBottom: RH,
    fontSize: 1.6 * RFS,
    padding: 0.8 * RH
};
