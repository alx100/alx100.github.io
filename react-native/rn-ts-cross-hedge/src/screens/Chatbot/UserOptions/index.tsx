import React from "react";
import { Text } from "react-native";
import { Button } from "../../../components/Button";
import { t } from "../../../utils/t";
import UserOption from "./Option";
import { theme } from "./theme";

interface OptionElement {
    name: string;
    value: number;
    content: string | React.ReactNode;
}

interface ChatbotOptionProps {
    options: OptionElement[];
    onSubmit: (value: number) => void;
}

interface State {
    selected: OptionElement | undefined;
    confirmed: boolean;
}

class UserOptions extends React.PureComponent<ChatbotOptionProps, State> {
    state: State = {
        selected: undefined,
        confirmed: false
    };
    render() {
        return !this.state.confirmed ? (
            <React.Fragment>
                {this.props.options.map((el, i) => (
                    <UserOption
                        key={i}
                        {...el}
                        onPress={() => this.setSelected(el)}
                        selected={
                            Boolean(this.state.selected) &&
                            el.name === this.state.selected!.name
                        }
                    />
                ))}
                {this.state.selected ? (
                    <Button
                        onPress={() =>
                            this.onSubmit(this.state.selected!.value)
                        }
                        buttonStyle={theme.btnWrapper}
                        textStyle={theme.btnContent}
                        content={t("chatbot_btnContent_continue")}
                    />
                ) : null}
            </React.Fragment>
        ) : typeof this.state.selected!.content === "string" ? (
            <Text style={theme.confirmedMsg}>
                {this.state.selected!.content}
            </Text>
        ) : (
            this.state.selected!.content
        );
    }

    setSelected = (el: OptionElement): void => {
        this.setState({ selected: el });
    };

    onSubmit = (value: number): void => {
        if (this.state.selected) {
            this.setState({ confirmed: true });
            this.props.onSubmit(value);
        }
    };
}

export default UserOptions;
