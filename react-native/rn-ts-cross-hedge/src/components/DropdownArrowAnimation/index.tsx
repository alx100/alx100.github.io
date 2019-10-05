import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import { colors } from "../../constants/colors";
import { RW } from "../../constants/window";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    up: boolean;
}

class DropdownArrowAnimation extends Component<OwnProps> {
    private arrowAnimation = new Animated.Value(0);

    componentWillReceiveProps(nextProps: OwnProps) {
        if (nextProps.up !== this.props.up) {
            this.handleArrow();
        }
    }

    render() {
        return (
            <Animated.View
                style={[
                    theme.arrowWrapper,
                    {
                        transform: [
                            {
                                rotate: this.arrowAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "180deg"]
                                })
                            }
                        ]
                    }
                ]}
            >
                <Icon
                    size={0.8 * RW}
                    name={"arrow_down"}
                    color={colors.textLight}
                />
            </Animated.View>
        );
    }

    handleArrow = () => {
        Animated.timing(this.arrowAnimation, {
            toValue: this.props.up ? 0 : 1,
            duration: 200,
            easing: Easing.linear
        }).start();
    };
}

export default DropdownArrowAnimation;
