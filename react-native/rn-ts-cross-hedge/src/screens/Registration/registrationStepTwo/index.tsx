import React from "react";
import { View } from "react-native";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate/index";
import Warning from "../../../components/Warning";
import { t } from "../../../utils/t";
import StepItem, { StepItemProps } from "./StepItem";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
}

type ComponentProps = OwnProps;

const StepsInfo: StepItemProps[] = [
    {
        isFilled: true,
        title: "Confirm your information"
    },
    {
        title: "Verify your identity",
        additionalContent: (
            <Warning content={"You will need your ID card or passport"} />
        )
    },
    {
        title: "Add your bank account \ninformation"
    },
    {
        title: "Syncronize your phone",
        hideVerticalLine: true
    }
];

const RegistrationStepTwo = (props: ComponentProps) => {
    return (
        <RegistrationTemplate
            isBtnActive={true}
            isDefaultTitle={true}
            isDefaultContinueButton={true}
            isWarning={false}
            title={"Create an account in four steps"}
            btnContent={t("btn_content_continue")}
            onStepForward={props.stepForward}
        >
            <View style={theme.content}>
                {StepsInfo.map((el, i) => (
                    <StepItem key={i} {...el} />
                ))}
            </View>
        </RegistrationTemplate>
    );
};

export default RegistrationStepTwo;
