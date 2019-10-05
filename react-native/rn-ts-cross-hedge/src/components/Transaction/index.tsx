import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { Operation } from "../../api/resources";
import { RH } from "../../constants/window";
import { showModal } from "../../redux/actions/modal";
import Amount from "../Amount";
import { Icon } from "../Icons";
import DetailedView from "./DetailedView";
import { theme } from "./theme";

const color = {
    deposit: "#5D63A4",
    withdrawal: "#4FC3EC",
    investment: "#6EB9BD"
};

interface OwnProps {
    isLast: boolean;
}

type ComponentProps = OwnProps & Operation & DispatchProp;

class Transaction extends React.PureComponent<ComponentProps> {
    render() {
        return (
            <View
                style={
                    !this.props.isLast ? theme.wrapper : theme.lastItemWrapper
                }
            >
                <View style={theme.statusWrapper}>
                    <View style={theme[`statusIcon_${this.props.type}`]}>
                        <Icon
                            name={this.props.type}
                            size={
                                this.props.type === "withdrawal"
                                    ? 1.6 * RH
                                    : 2 * RH
                            }
                            color={color[this.props.type]}
                        />
                    </View>
                    {!this.props.isLast ? (
                        <View style={theme.statusLine} />
                    ) : null}
                </View>
                <TouchableOpacity
                    onPress={this.showDetailedInfo}
                    style={theme.opacity}
                >
                    <View style={theme[`detailsWrapper_${this.props.type}`]}>
                        <View style={theme.details}>
                            <Text style={theme[`type_${this.props.type}`]}>
                                {this.props.type.charAt(0).toUpperCase() +
                                    this.props.type.slice(1)}
                            </Text>
                            <Text style={theme.date}>{this.props.date}</Text>
                        </View>
                        <Amount
                            value={(this.props.type === "withdrawal"
                                ? -1 * this.props.amount
                                : this.props.amount
                            ).toString()}
                            unit={"€"}
                            showPlus={true}
                            styles={{
                                wrapper: theme.amountWrapper,
                                integer: theme[`amount_${this.props.type}`],
                                fractional: theme[`amount_${this.props.type}`]
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    showDetailedInfo = () =>
        this.props.dispatch(
            showModal({
                animationType: "fade",
                closeType: "custom",
                elements: (
                    <DetailedView
                        title={`Detail ${this.props.type}`}
                        info={this.props.additionalFields}
                    />
                )
            })
        );
}

export default connect()(Transaction);
