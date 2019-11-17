import React from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate/index";
import { countries } from "../../../constants/listCountries";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
}

interface State {
    country: string;
    chooseCountry: string[];
    data: string[];
}

type ComponentProps = OwnProps;

class RegistrationStepSeven extends React.PureComponent<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            country: "",
            chooseCountry: [],
            data: countries
        };
    }

    render() {
        const { country, data, chooseCountry } = this.state;
        return (
            <RegistrationTemplate
                isDefaultContinueButton={true}
                isDefaultTitle={true}
                title={"Which country do you live in?"}
                btnContent={t("btn_content_continue")}
                isBtnActive={data.includes(country)}
                isWarning={false}
                onStepForward={this.stepForward}
            >
                <TextInput
                    value={country}
                    style={theme.input}
                    onChangeText={text => this.change(text)}
                    underlineColorAndroid={"rgba(0,0,0,0)"}
                />
                {chooseCountry.length > 0 && (
                    <View style={theme.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {chooseCountry.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() =>
                                        this.setState({ country: item })
                                    }
                                    style={theme.underLine}
                                >
                                    <Text style={theme.text}>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}
            </RegistrationTemplate>
        );
    }
    change = (text: string) => {
        if (text) {
            const choose = this.state.data.filter(
                item => item.substr(0, text.length) === text
            );
            this.setState({ chooseCountry: choose, country: text });
        } else {
            this.setState({
                chooseCountry: [],
                country: text
            });
        }
    };

    stepForward = () => {
        const { data, country } = this.state;
        if (data.includes(country)) {
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        country
                    }
                })
                .then(() => this.props.stepForward());
        }
    };
}

export default RegistrationStepSeven;
