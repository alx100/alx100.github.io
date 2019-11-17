import React from "react";
import { SafeAreaView } from "react-native";
import { connect, DispatchProp } from "react-redux";
import RegistrationTemplate from "../../../../components/RegistrationScreenTemplate";
import SMSCode from "../../../../components/SmsCode";
import { NUMBER } from "../../../../constants/validators";
import { showModal } from "../../../../redux/actions/modal";
import { router } from "../../../../services/router";
import { t } from "../../../../utils/t";
import { theme } from "./theme";

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

interface State {
    code: string[];
    key: string;
    activeBtn: boolean;
}

type ComponentProps = OwnProps & DispatchProp;

class CryptoStepThree extends React.PureComponent<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            code: [],
            key: "",
            activeBtn: false
        };
    }

    handleLanguage = (code: string[]) => {
        this.setState({
            activeBtn: code.every(item => NUMBER.test(item)),
            code
        });
    };

    render() {
        const { activeBtn } = this.state;
        return (
            <SafeAreaView style={theme.safeArea}>
                <RegistrationTemplate
                    isDefaultContinueButton={true}
                    isBtnActive={activeBtn ? true : false}
                    btnContent={t("btn_content_confirm")}
                    isDefaultTitle={true}
                    isWarning={false}
                    title={t("registration_type_crypto_title_received_sms")}
                    onStepForward={this.onPress}
                    style={{ width: "80%" }}
                >
                    <SMSCode style={"dark"} onPressCode={this.handleLanguage} />
                </RegistrationTemplate>
            </SafeAreaView>
        );
    }

    onPress = () => {
        this.state.activeBtn && this.openModal();
    };

    openModal = () => {
        this.props.dispatch(
            showModal({
                title: "Thank you! We've received your request.",
                content:
                    "You will receive an email with a confirmation link shortly." +
                    "\n\n" +
                    "See you soon!" +
                    "\n\n" +
                    "The Cross Hedge team.",
                onClose: this.onModalClose,
                closeType: "default"
            })
        );
    };

    onModalClose = () => router.replaceRoute("regTypes_crypto_step_four");
}

export default connect()(CryptoStepThree);
