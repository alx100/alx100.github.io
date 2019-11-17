import React from "react";
import FormBuilder from "../../../components/FormBuilder";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate/index";
import { ENGLISH_CHARACTERS } from "../../../constants/validators";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";

type FormInputs = "street" | "city" | "zip" | "stateCountry" | string;

interface State {
    errorMsg: {
        street?: string;
        city?: string;
        zip?: string;
    };
    street: string;
    city: string;
    zip: string;
    stateCountry: string;
}

interface OwnProps {
    stepForward: () => void;
}

type ComponentProps = OwnProps;

class RegistrationStepEight extends React.PureComponent<ComponentProps, State> {
    private form!: FormBuilder;

    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            errorMsg: {},
            street: "",
            city: "",
            zip: "",
            stateCountry: ""
        };
    }

    render() {
        return (
            <RegistrationTemplate
                isDefaultTitle={true}
                isDefaultContinueButton={true}
                isBtnActive={this.isActive()}
                isWarning={false}
                title={"What is your address?"}
                btnContent={t("btn_content_continue")}
                onStepForward={this.stepForward}
            >
                <FormBuilder
                    onRef={ref => (this.form = ref)}
                    fields={[
                        {
                            name: "street",
                            props: {
                                placeholder: "Street name and number",
                                errorMsg: this.state.errorMsg.street,
                                getValue: value =>
                                    this.handleForm("street", value)
                            }
                        },
                        {
                            name: "city",
                            props: {
                                placeholder: "City of residence",
                                errorMsg: this.state.errorMsg.city,
                                getValue: value =>
                                    this.handleForm("city", value)
                            }
                        },
                        {
                            name: "zip",
                            props: {
                                placeholder: "Zip code",
                                errorMsg: this.state.errorMsg.zip,
                                getValue: value => this.handleForm("zip", value)
                            }
                        },
                        {
                            name: "stateCountry",
                            props: {
                                placeholder: "State (if applicable)",
                                getValue: value =>
                                    this.handleForm("stateCountry", value)
                            }
                        }
                    ]}
                />
            </RegistrationTemplate>
        );
    }

    isActive = () => {
        if (Object.keys(this.state.errorMsg).length < 3) return false;
        const {
            errorMsg: { street, city, zip }
        } = this.state;
        return !street && !city && !zip;
    };

    handleForm = (name: FormInputs, value: string) => {
        switch (name) {
            case "street":
                this.setState({
                    street: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        street: this.validation(value)
                    }
                });
                break;
            case "city":
                this.setState({
                    city: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        city: this.validation(value)
                    }
                });
                break;
            case "zip":
                this.setState({
                    zip: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        zip: this.validation(value)
                    }
                });
                break;
            case "stateCountry":
                this.setState({ stateCountry: value });
                break;
            default:
                break;
        }
    };

    validation = (value: string) => {
        if (!value) return "Required";

        if (!ENGLISH_CHARACTERS.test(value)) {
            return "Enter the valid characters";
        }
        return "";
    };

    stepForward = () => {
        this.form.validate();
        if (this.isActive()) {
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        address: {
                            zip: this.state.zip,
                            street: this.state.street,
                            city: this.state.city,
                            state: this.state.stateCountry
                                ? this.state.stateCountry
                                : ""
                        }
                    }
                })
                .then(() => this.props.stepForward());
        }
    };
}

export default RegistrationStepEight;
