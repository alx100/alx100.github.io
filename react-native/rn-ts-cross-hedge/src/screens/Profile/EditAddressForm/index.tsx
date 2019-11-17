import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import BottomBar from "../../../components/BottomBar";
import { Button } from "../../../components/Button";
import FormBuilder from "../../../components/FormBuilder";
import Block from "../../../components/InnerPagesBlock";
import { ENGLISH_CHARACTERS } from "../../../constants/validators";
import { router } from "../../../services/router";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface State {
    errorMsg: {
        street?: string;
        city?: string;
        zip?: string;
        country?: string;
    };
}

interface Form {
    street: string;
    city: string;
    zip: string;
    stateCountry: string;
    country: string;
}

type ComponentState = State & Form;

type ComponentProps = any;

class EditAddressForm extends React.Component<ComponentProps, ComponentState> {
    private form!: FormBuilder;
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            street: "",
            city: "",
            zip: "",
            stateCountry: "",
            country: "",
            errorMsg: {}
        };
    }

    render() {
        const { errorMsg } = this.state;
        return (
            <SafeAreaView style={theme.safeArea}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <Block style={theme.container}>
                        <FormBuilder
                            onRef={ref => (this.form = ref)}
                            fields={[
                                {
                                    name: "street",
                                    props: {
                                        title: "Street",
                                        placeholder: "Street name and number",
                                        errorMsg: errorMsg.street,
                                        lightStyle: true,
                                        getValue: value => {
                                            this.handleForm("street", value);
                                        }
                                    }
                                },
                                {
                                    name: "city",
                                    props: {
                                        title: "City",
                                        placeholder: "Your City of residence",
                                        errorMsg: errorMsg.city,
                                        lightStyle: true,
                                        getValue: value => {
                                            this.handleForm("city", value);
                                        }
                                    }
                                },
                                {
                                    name: "zip",
                                    props: {
                                        title: "Zip code",
                                        placeholder: "Your City zip code",
                                        errorMsg: errorMsg.zip,
                                        lightStyle: true,
                                        getValue: value => {
                                            this.handleForm("zip", value);
                                        }
                                    }
                                },
                                {
                                    name: "stateCountry",
                                    props: {
                                        title: "State",
                                        placeholder: "State (if applicable)",
                                        lightStyle: true,
                                        errorMsg: "",
                                        getValue: value => {
                                            this.handleForm(
                                                "stateCountry",
                                                value
                                            );
                                        }
                                    }
                                },
                                {
                                    name: "country",
                                    props: {
                                        title: "Country",
                                        placeholder: "Country of residence",
                                        lightStyle: true,
                                        errorMsg: errorMsg.country,
                                        getValue: value => {
                                            this.handleForm("country", value);
                                        }
                                    }
                                }
                            ]}
                        />
                        <Button
                            content={t("btn_content_save")}
                            onPress={this.submit}
                            buttonStyle={theme.btnWrapper}
                            textStyle={theme.btnContent}
                        />
                    </Block>
                </ScrollView>
                <BottomBar screen="Profile" />
            </SafeAreaView>
        );
    }

    isActive = () => {
        if (Object.keys(this.state.errorMsg).length < 4) return false;
        const {
            errorMsg: { street, city, zip, country }
        } = this.state;
        return !street && !city && !zip && !country;
    };

    handleForm = (name: keyof Form, value: string) => {
        switch (name) {
            case "street":
                return this.setState({
                    street: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        street: this.validate(value)
                    }
                });
            case "city":
                return this.setState({
                    city: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        city: this.validate(value)
                    }
                });
            case "zip":
                return this.setState({
                    zip: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        zip: this.validate(value)
                    }
                });
            case "stateCountry":
                return this.setState({ stateCountry: value });
            case "country":
                return this.setState({
                    country: value,
                    errorMsg: {
                        ...this.state.errorMsg,
                        country: this.validate(value)
                    }
                });
        }
    };

    validateForm = () => {
        this.setState(
            {
                errorMsg: {
                    city: this.validate(this.state.city),
                    street: this.validate(this.state.street),
                    zip: this.validate(this.state.zip),
                    country: this.validate(this.state.country)
                }
            },
            this.form.validate
        );
    };

    validate = (value: string) => {
        if (!value) return "Required";

        if (!ENGLISH_CHARACTERS.test(value)) {
            return "Enter the valid characters";
        }
        return "";
    };

    submit = () => {
        const { street, city, zip, country, stateCountry } = this.state;
        this.validateForm();
        this.isActive() &&
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        street,
                        city,
                        zip,
                        country,
                        stateCountry
                    }
                })
                .then(() => router.replaceRoute("profile_settings"));
    };
}

export default EditAddressForm;
