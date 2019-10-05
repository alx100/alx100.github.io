import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import { RFS, RH, RW, WINDOW } from "../../constants/window";

const depositColor = "#5D63A4";
const withdrawalColor = "#4FC3EC";
const investmentColor = "#6EB9BD";

interface ComponentStyles {
    wrapper: ViewStyle;
    lastItemWrapper: ViewStyle;
    statusWrapper: ViewStyle;
    statusIcon_deposit: ViewStyle;
    statusIcon_withdrawal: ViewStyle;
    statusIcon_investment: ViewStyle;
    statusLine: ViewStyle;
    detailsWrapper_deposit: ViewStyle;
    detailsWrapper_withdrawal: ViewStyle;
    detailsWrapper_investment: ViewStyle;
    details: ViewStyle;
    date: TextStyle;
    opacity: ViewStyle;
    type_deposit: TextStyle;
    type_withdrawal: TextStyle;
    type_investment: TextStyle;
    amountWrapper: ViewStyle;
    amount_deposit: TextStyle;
    amount_withdrawal: TextStyle;
    amount_investment: TextStyle;
}

const WrapperMixin: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    alignContent: "stretch",
    alignItems: "stretch"
};

const StatusIconMixin: ViewStyle = {
    width: 3.5 * RH,
    height: 3.5 * RH,
    borderRadius: 100,
    borderWidth: 0.1 * RH,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
};

const TypeMixin: TextStyle = {
    fontSize: 1.4 * RFS
};

const DetailsMixin: ViewStyle = {
    marginLeft: RW,
    borderRadius: 2 * RH,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 0.1 * RH,
    height: 3.5 * RH,
    width: WINDOW.width * 0.9 - 4 * RW,
    paddingLeft: 1.5 * RW,
    paddingRight: 1.5 * RW,
    backgroundColor: colors.white
};

const AmountMixin: TextStyle = {
    fontSize: 1.4 * RFS,
    fontWeight: "normal"
};

export const theme = StyleSheet.create<ComponentStyles>({
    wrapper: {
        ...WrapperMixin,
        paddingBottom: 2 * RH
    },
    lastItemWrapper: {
        ...WrapperMixin
    },
    statusWrapper: {
        position: "relative"
    },
    statusIcon_deposit: {
        ...StatusIconMixin,
        borderColor: depositColor
    },
    statusIcon_withdrawal: {
        ...StatusIconMixin,
        borderColor: withdrawalColor
    },
    statusIcon_investment: {
        ...StatusIconMixin,
        borderColor: investmentColor
    },
    statusLine: {
        position: "absolute",
        height: 2 * RH,
        width: 0.1 * RW,
        backgroundColor: "#D8D8D8",
        right: 1.7 * RH,
        bottom: -2 * RH
    },
    detailsWrapper_deposit: {
        ...DetailsMixin,
        borderColor: depositColor
    },
    detailsWrapper_withdrawal: {
        ...DetailsMixin,
        borderColor: withdrawalColor
    },
    detailsWrapper_investment: {
        ...DetailsMixin,
        borderColor: investmentColor
    },
    details: {
        flexDirection: "column",
        justifyContent: "center"
    },
    date: {
        marginTop: 0.1 * RH,
        fontSize: 1 * RFS,
        color: "#B2B6C9"
    },
    opacity: {
        display: "flex",
        position: "relative"
    },
    type_deposit: {
        ...TypeMixin,
        color: depositColor
    },
    type_withdrawal: {
        ...TypeMixin,
        color: withdrawalColor
    },
    type_investment: {
        ...TypeMixin,
        color: investmentColor
    },
    amountWrapper: {
        justifyContent: "center",
        alignContent: "center"
    },
    amount_deposit: {
        ...AmountMixin,
        color: depositColor
    },
    amount_withdrawal: {
        ...AmountMixin,
        color: withdrawalColor
    },
    amount_investment: {
        ...AmountMixin,
        color: investmentColor
    }
});
