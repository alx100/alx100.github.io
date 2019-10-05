import React from "react";
import { SafeAreaView } from "react-native";
import { getEmailConfirmation } from "../../../../api/resources";
import CreatePassword from "./CreatePassword";
import EmailRedirectScreen from "./EmailLink";
import { theme } from "./theme";

interface State {
    linkRecieved: boolean;
}

class CryptoStepFour extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            linkRecieved: false
        };

        getEmailConfirmation().then(res =>
            this.setState({ linkRecieved: res.linkRecieved })
        );
    }

    render() {
        return (
            <SafeAreaView style={theme.safeArea}>
                {this.state.linkRecieved ? (
                    <CreatePassword />
                ) : (
                    <EmailRedirectScreen />
                )}
            </SafeAreaView>
        );
    }
}

export default CryptoStepFour;
