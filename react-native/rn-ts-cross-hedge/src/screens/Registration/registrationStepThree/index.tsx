import React from "react";
import FormBuilder from "../../../components/FormBuilder";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate/index";
import { NAME } from "../../../constants/validators";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";

interface State {
    errorMsg?: string;
    firstName: string;
}

interface OwnProps {
    stepForward: () => void;
}

type ComponentProps = OwnProps;

class RegistrationStepThree extends React.PureComponent<ComponentProps, State> {
    private form!: FormBuilder;

    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            errorMsg: undefined,
            firstName: ""
        };
    }

    render() {
        return (
            <RegistrationTemplate
                isBtnActive={
                    this.state.errorMsg !== undefined && !this.state.errorMsg
                }
                isDefaultTitle={true}
                isDefaultContinueButton={true}
                btnContent={t("btn_content_continue")}
                title={"What is your first name?"}
                isWarning={false}
                onStepForward={this.stepForward}
            >
                <FormBuilder
                    onRef={ref => (this.form = ref)}
                    fields={[
                        {
                            name: "name",
                            props: {
                                placeholder: "First Name",
                                getValue: this.handleInput,
                                errorMsg: this.state.errorMsg
                            }
                        }
                    ]}
                />
            </RegistrationTemplate>
        );
    }

    handleInput = (value: string) => {
        this.setState({
            firstName: value,
            errorMsg: this.validateName(value)
        });
    };

    validateName = (value: string) => {
        if (!value) return "Required";

        if (value.length < 3) return "Name must be at least 3 characters long";

        if (!NAME.test(value)) return "Enter the valid name";
        return "";
    };

    stepForward = () => {
        this.form.validate();
        !this.validateName(this.state.firstName) &&
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        name: this.form.getValues()[0].name
                    }
                })
                .then(() => this.props.stepForward());
    };
}

export default RegistrationStepThree;
