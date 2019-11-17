import React from "react";
import { SafeAreaView } from "react-native";
import BottomBar from "../../../components/BottomBar";
import Block from "../../../components/InnerPagesBlock";
import { RadioButton } from "../../../components/RadioButton";
import { theme } from "./theme";

type Languages = "english" | "french" | "spanish";
interface State {
    lang: Languages;
}

// interface OwnProps {}

type ComponentProps = any;

class LanguageSettings extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            lang: "english"
        };
    }

    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                <Block style={theme.container}>
                    <RadioButton
                        onPress={() => {
                            this.handleRadioButtons("english");
                        }}
                        label={"English"}
                        active={this.state.lang === "english"}
                        styles={{
                            wrapper: theme.radioBtnWrapper
                        }}
                    />
                    <RadioButton
                        onPress={() => {
                            this.handleRadioButtons("french");
                        }}
                        label={"French"}
                        active={this.state.lang === "french"}
                        styles={{
                            wrapper: theme.radioBtnWrapper
                        }}
                    />
                    <RadioButton
                        onPress={() => {
                            this.handleRadioButtons("spanish");
                        }}
                        label={"Spanish"}
                        active={this.state.lang === "spanish"}
                        styles={{
                            wrapper: theme.radioBtnWrapper
                        }}
                    />
                </Block>
                <BottomBar screen="Profile" />
            </SafeAreaView>
        );
    }

    handleRadioButtons = (value: Languages) => {
        this.setState({ lang: value });
    };
}

export default LanguageSettings;
