import React from "react";
import { connect, DispatchProp } from "react-redux";
import FormBuilder from "../../../../components/FormBuilder/index";
import RegistrationTemplate from "../../../../components/RegistrationScreenTemplate";
import { EMAIL } from "../../../../constants/validators";
import { showModal } from "../../../../redux/actions/modal";
import { t } from "../../../../utils/t";

interface OwnProps {
    cancelRestore: () => void;
}

interface State {
    email: string;
    errorMsg: string;
}

type ComponentProps = OwnProps & DispatchProp;

class RestorePasswordStepOne extends React.Component<ComponentProps, State> {
    private form!: FormBuilder;
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            email: "",
            errorMsg: ""
        };
    }
    render() {
        return (
            <RegistrationTemplate
                isDefaultTitle={false}
                isDefaultContinueButton={true}
                isBtnActive={true}
                isWarning={false}
                btnContent={t("btn_content_send")}
                onStepForward={this.openModal}
                style={{ flex: 0, paddingTop: 0 }}
            >
                <FormBuilder
                    onRef={ref => (this.form = ref)}
                    fields={[
                        {
                            name: "email",
                            props: {
                                placeholder: t(
                                    "login_loginForm_email_placeholder"
                                ),
                                autoCapitalize: "none",
                                errorMsg: this.state.errorMsg,
                                getValue: this.handleInput
                            }
                        }
                    ]}
                />
            </RegistrationTemplate>
        );
    }

    handleInput = (value: string) => {
        this.setState({ email: value, errorMsg: this.validateEmail(value) });
    };

    openModal = () => {
        this.form.validate();
        !this.validateEmail(this.state.email) &&
            this.props.dispatch(
                showModal({
                    title: "Please check your mailbox...",
                    content:
                        "We've just sent you a reset link. Just click on it to create your new password",
                    closeType: "default"
                })
            );
    };

    validateEmail = (value: string) => {
        if (!value) {
            return "Fill the input";
        }

        if (!EMAIL.test(value)) {
            return "Enter valid email address";
        }

        return "";
    };
}

export default connect()(RestorePasswordStepOne);
