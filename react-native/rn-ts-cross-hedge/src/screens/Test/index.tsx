import React from "react";
import { SafeAreaView } from "react-native";
import { theme } from "./theme";

class Test extends React.Component {
    render() {
        return <SafeAreaView style={theme.safeArea} />;
    }
}

export default Test;
