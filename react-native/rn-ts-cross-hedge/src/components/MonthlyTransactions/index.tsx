import React from "react";
import { ImageProps, Text, TouchableOpacity, View } from "react-native";
import { Operation } from "../../api/resources";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { Icon } from "../Icons";
import Transaction from "../Transaction";
import { theme } from "./theme";

interface OwnProps {
    month: string;
    data: Operation[];
    name: string;
}

interface State {
    isListShown: boolean;
}

type ComponentProps = OwnProps;

class MonthBlock extends React.PureComponent<ComponentProps, State> {
    state: State = {
        isListShown: true
    };
    render() {
        return (
            <View style={theme.wrapper}>
                <TouchableOpacity onPress={this.hideList}>
                    <View style={theme.infoWrapper}>
                        <View style={theme.monthWrapper}>
                            <Icon
                                {...this.props}
                                size={3.5 * RH}
                                color={colors.textLight}
                            />
                            {this.state.isListShown ? (
                                <View style={theme.monthLine} />
                            ) : null}
                        </View>
                        <Text style={theme.info}>{this.props.month}</Text>
                    </View>
                </TouchableOpacity>
                {this.state.isListShown
                    ? this.props.data.map((el, i) => (
                          <Transaction
                              key={i}
                              isLast={i === this.props.data.length - 1}
                              {...el}
                          />
                      ))
                    : null}
            </View>
        );
    }

    hideList = () => this.setState({ isListShown: !this.state.isListShown });
}

export default MonthBlock;
