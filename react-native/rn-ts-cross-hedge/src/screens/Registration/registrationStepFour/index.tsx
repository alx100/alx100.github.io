import React from "react";
import FormBuilder from "../../../components/FormBuilder";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate/index";
import { NAME } from "../../../constants/validators";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";

interface State {
    name: string;
    lastName: string;
    errorMsg?: string;
}
interface OwnProps {
    stepForward: () => void;
}

type ComponentProps = OwnProps;

class RegistrationStepFour extends React.PureComponent<ComponentProps, State> {
    private form!: FormBuilder;
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            name: "",
            errorMsg: undefined,
            lastName: ""
        };
    }

    async componentDidMount() {
        const res = await storage.getStorageItem<User>("user");

        this.setState({ name: res!.user_info!.name! });
    }

    render() {
        return (
            <RegistrationTemplate
                isBtnActive={
                    this.state.errorMsg !== undefined && !this.state.errorMsg
                }
                isDefaultTitle={true}
                isDefaultContinueButton={true}
                isWarning={false}
                title={`What is your last name, ${this.state.name}?`}
                btnContent={t("btn_content_continue")}
                onStepForward={this.stepForward}
            >
                <FormBuilder
                    onRef={ref => (this.form = ref)}
                    fields={[
                        {
                            name: "lastName",
                            props: {
                                placeholder: "Last Name",
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
            lastName: value,
            errorMsg: this.validateLastName(value)
        });
    };

    validateLastName = (value: string) => {
        if (!value) return "Required";

        if (value.length < 3) return "Name must be at least 3 characters long";

        if (!NAME.test(value)) return "Enter the valid name";
        return "";
    };

    stepForward = () => {
        this.form.validate();
        !this.validateLastName(this.state.lastName) &&
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        lastName: this.state.lastName
                    }
                })
                .then(() => this.props.stepForward());
    };
}

export default RegistrationStepFour;
