import { Dimensions } from "react-native";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";

export const WINDOW = Dimensions.get("screen");

// REM equals ~ 10px
// export const REM = WINDOW.height * 0.02;
// ~ 10 for IP 6>
export const RH = responsiveHeight(1.6);
export const RW = responsiveWidth(2.8);
export const RFS = responsiveFontSize(1.4);
