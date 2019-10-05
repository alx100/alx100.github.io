import React from "react";
import { View, ViewProperties } from "react-native";
import { theme } from "./theme";

type ComponentProps = ViewProperties;

class Block extends React.PureComponent<ComponentProps> {
    render() {
        return (
            <View style={[theme.wrapper, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

export default Block;
