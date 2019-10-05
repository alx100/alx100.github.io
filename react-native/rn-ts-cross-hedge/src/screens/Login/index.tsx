import React from "react";
import { SafeAreaView, View } from "react-native";
import { colors } from "../../constants/colors";
import LoginForm from "./loginForm/index";
import RestorePassword from "./passwordRestoreForm";
import { theme } from "./theme";

interface State {
    passwordForgotten: boolean;
}

class Login extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            passwordForgotten: false
        };
    }

    render() {
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.backgroundDark }}
            >
                <View style={theme.container}>
                    <View style={theme.steps}>
                        {!this.state.passwordForgotten ? (
                            <LoginForm restoreAccount={this.openRestoreForm} />
                        ) : (
                            <RestorePassword
                                cancelRestore={this.closeRestoreForm}
                            />
                        )}
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    openRestoreForm = () => this.setState({ passwordForgotten: true });

    closeRestoreForm = () => this.setState({ passwordForgotten: false });
}

export default Login;
